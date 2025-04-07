const express = require('express');
const models = require("../models")
const cwr = require("../utils/createWebResponse");
const {Op, Sequelize} = require("sequelize");
const balancedb = models.back_balance;
const blikedb = models.back_balance_like;
const bcountdb = models.back_balance_count;

const selectBalance = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const balance_type = req.query.balance_type;

    await bcountdb.increment({balance_selected: 1}, {where: {balance_type: balance_type}}).then(function (result) {
        res.cookie('balance_type', balance_type);
        return cwr.createWebResp(res, header, 200, {
            message: `balance selected ${balance_type}!`,
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'balance select failed', e.message || e);
    });
}

const balanceResult = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const result = await bcountdb.findAll();

    const total = result[0].balance_selected + result[1].balance_selected;
    const cntA = result[0].balance_selected;
    const cntB = result[1].balance_selected;

    return cwr.createWebResp(res, header, 200, {
        message: `balance result send`,
        total: total,
        cntA: cntA,
        rateA: (cntA / total * 100).toFixed(2),
        cntB: cntB,
        rateB: (cntB / total * 100).toFixed(2),
    });
}

const createReply = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);
    const reply = req.body;
    let balance_type = req.cookies.balance_type;
    if(balance_type==undefined || balance_type==null)
        balance_type=reply.balance_type;

    await balancedb.create({
        balance_content: reply.balance_content,
        balance_name: reply.balance_name,
        balance_date: new Date(),
        balance_like: 0,
        balance_type: balance_type,
        balance_ip: ip,
        balance_browser: browser
    }).then(function (result) {
        res.cookie('balance_name', reply.balance_name);
        res.cookie('balance_date', new Date());
        return cwr.createWebResp(res, header, 200, {
            message: `${reply.balance_name} has write the reply, selected ${balance_type}`
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'reply write failed', e.message || e);
    });
}

const replyLike = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);
    const balance_id = req.query.balance_id;
    let balance_name = req.cookies.balance_name;
    if (balance_name == undefined) balance_name = null;

    blikedb.findOrCreate({
        where: {blike_name: balance_name, blike_ip: ip, blike_browser: browser, balance_id: balance_id},
        defaults: {
            balance_id: balance_id,
            blike_name: balance_name,
            blike_ip: ip,
            blike_date: new Date(),
            blike_browser: browser,
            blike_use: 'O'
        }, raw: true
    }).then(function (result) {
        const status = result[1];
        const bId = result[0].blike_id;
        let use = result[0].blike_use;
        if (status == false) {//false면 값 반전-> 원래 있었다는 뜻임
            if (use === "O") {//좋아요가 눌러져있었으면?
                blikedb.update({blike_use: "X"}, {where: {blike_id: bId}});
                use = 'X';
                balancedb.decrement({balance_like: 1}, {where: {balance_id: balance_id}});
            } else {
                blikedb.update({blike_use: 'O'}, {where: {blike_id: bId}});
                use = 'O';
                balancedb.increment({balance_like: 1}, {where: {balance_id: balance_id}});
            }
        } else {
            balancedb.increment({balance_like: 1}, {where: {balance_id: balance_id}});
        }

        return cwr.createWebResp(res, header, 200, {
            message: (use == 'O' ? `like success` : `dislike success`),
            createdNow: status,
            blike_use: use
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'like or dislike failed', e.message || e);
    });
}
const getReply = async (req, res) => {
    const {page, size, sort, keyword} = req.query;
    const {limit, offset} = getPagination(page, size);
    let condition = keyword ? {balance_content: {[Op.like]: `%${keyword}%`}} : null;
    if (sort == "latest") {
        balancedb.findAndCountAll({limit, offset,where: condition, order: [["balance_date", "DESC"]]})
            .then(data => {
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving balance reply."
                });
            });
    } else if(sort=="popular") {
        balancedb.findAndCountAll({limit, offset,where: condition,order: [["balance_like", "DESC"]]})
            .then(data => {
                const response = getPagingData(data, page, limit);
                res.send(response);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving balance reply."
                });
            });
    }
}

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return {limit, offset};
};

const getPagingData = (data, page, limit) => {
    const {count: totalItems, rows: diaryList} = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return {totalItems, diaryList, totalPages, currentPage};
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

module.exports = {selectBalance, balanceResult, createReply, replyLike, getReply}