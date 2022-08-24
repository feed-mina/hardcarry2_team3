const express = require('express');
const models = require("../models");
const diarydb = models.back_diary;
const likedb = models.back_diary_like;
const checkdb = models.back_diary_check;
const {Op, Sequelize} = require("sequelize");
const cwr = require('../utils/createWebResponse');

const createDiary = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin","*")
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);
    const diary = req.body;

    diarydb.create({
        diary_writter: diary.diary_writter,
        diary_content: diary.diary_content,
        diary_like: 0,
        diary_date: Sequelize.literal('now()'),
        diary_ip: ip,
        diary_browser: browser
    }).then(write_diary => {
        checkdb.create({
            diary_id: write_diary.diary_id,
            diary_checked: diary.diary_checked,
            diary_name: diary.diary_name,
            diary_phone: diary.diary_phone
        }).then(function (result) {
            res.cookie('diary_writter', diary.diary_writter);
            res.cookie('diary_date', new Date());
            return cwr.createWebResp(res, header, 200, {
                message: `${diary.diary_writter} has write the diary, checked=${diary.diary_checked}`
            });
        }).catch(e => {
            return cwr.errorWebResp(res, header, 500,
                'diary write failed', e.message || e);
        });
    })
}

const diaryLike = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);
    const diary_id = req.query.diary_id;
    let dlike_name = req.cookies.diary_writter;
    if (dlike_name==undefined) dlike_name=null;

    likedb.findOrCreate({
        where: {dlike_name: dlike_name, dlike_ip: ip, dlike_browser: browser, diary_id: diary_id},
        defaults: {
            diary_id: diary_id,
            dlike_name: dlike_name,
            dlike_ip: ip,
            dlike_date: new Date(),
            dlike_browser: browser,
            dlike_use: `O`
        }, raw: true
    }).then(function (result) {
        const status = result[1];
        const dId = result[0].dlike_id;
        let use = result[0].dlike_use;
        if (status == false) {//false면 값 반전-> 원래 있었다는 뜻임
            if (use === "O") {//좋아요가 눌러져있었으면?
                likedb.update({dlike_use: "X"}, {where: {dlike_id: dId}});
                use='X';
                diarydb.decrement({diary_like: 1}, {where: {diary_id: diary_id}});
            } else {
                likedb.update({dlike_use: 'O'}, {where: {dlike_id: dId}});
                use='O';
                diarydb.increment({diary_like: 1}, {where: {diary_id: diary_id}});
            }
        } else {
            diarydb.increment({diary_like: 1}, {where: {diary_id: diary_id}});
        }

        return cwr.createWebResp(res, header, 200, {
            message: (use == 'O' ? `like success` : `dislike success`),
            createdNow: status,
            dlike_use: use
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'like or dislike failed', e.message || e);
    });
}

const getDiary = async (req, res) => {
    //한번에 4개씩 불러옴
    const { page, size, sort, keyword} = req.query;
    const { limit, offset } = getPagination(page, size);
    let condition;
    if (keyword != null)  condition = keyword ? {diary_content: {[Op.like]: `%${keyword}%`}} : null;
    else condition=null;


    if(sort=="latest"){
        diarydb.findAndCountAll({limit, offset,where: condition, order: [["diary_date", "DESC"]]})
            .then(data => {
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving diary."
                });
            });
    }else if(sort=="popular"){
        diarydb.findAndCountAll({limit, offset,where: condition,order: [["diary_like", "DESC"]]})
            .then(data => {
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving diary."
                });
            });
    }
}

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: diaryList } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, diaryList, totalPages, currentPage };
};

function getBrowserInfo(req) {
    var agent = req.toUpperCase();
    if (agent.indexOf('TRIDENT') >= 0) {
        return 'IE';
    } else if (agent.indexOf('FIREFOX') >= 0) {
        return 'FIREFOX';
    } else if (agent.indexOf('EDG') >= 0) {
        return 'EDGE';
    } else if (agent.indexOf('SAFARI') >= 0) {
        return 'SAFARI';
    } else if (agent.indexOf('CHROME') >= 0) {
        return 'CHROME';
    } else {
        return '';
    }
}


module.exports = {createDiary, diaryLike,getDiary}