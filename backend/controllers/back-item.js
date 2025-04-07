const express = require('express');
const models = require("../models");
const itemdb = models.back_item;
const votedb = models.back_item_vote;
const {Op} = require("sequelize");
const cwr = require('../utils/createWebResponse');

const getItems = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    await itemdb.findAll({raw: true})
        .then(function (result) {
            return cwr.createWebResp(res, header, 200, {
                message: "getting items from database is completed, sending items!",
                result: result,
            });
        }).catch(e => {
            return cwr.errorWebResp(res, header, 500,
                'test failed', e.message || e);
        });
}

const voteItems = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');
    const browser = getBrowserInfo(userAgent);
    const itemNum = req.query.itemNum;

    console.log(ip, browser, itemNum)
    const item = await itemdb.findOne({where: {item_id: itemNum}})
    itemdb.increment({item_voted: 1}, {where: {item_id: item.dataValues.item_id}});
    itemdb.increment({item_voted: 1}, {where: {item_id: 0}});

    votedb.create({
        item_id: itemNum, bvote_name: null,
        bvote_ip: ip, bvote_date: new Date(), bvote_browser: browser
    }).then(function (result) {
        res.cookie('voted', itemNum);
        return cwr.createWebResp(res, header, 200, {
            message: `voted for item${itemNum}!`,
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'vote failed', e.message || e);
    });

}

const voteResult = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const result = await itemdb.findAll({
        attributes: ['item_id', 'item_name', 'item_img', 'item_voted'],
        raw: true,
        order: [['item_voted', 'DESC']],
        where: {[Op.not]: [{item_id: [0]}]}
    });
    const total = await itemdb.findOne({where: {item_id: 0}, raw: true, attributes: ['item_voted']})
    let voteResult = [];
    for (let i = 0; i < result.length; i++) {
        voteResult.push(result[i], (result[i].item_voted / total.item_voted * 100).toFixed(2));
    }

    return cwr.createWebResp(res, header, 200, {
        message: `vote result sending`,
        voteResult: voteResult
    });


}

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


module.exports = {getItems, voteItems, voteResult}