const express = require('express');
const router = express.Router();
const models = require("../models")
const testdb = models.back_test;
const cwr = require('../utils/createWebResponse');

const postTestResult = async (req, res) => {
    //결과 받아서 알고리즘 타서 최종 결과 db에서 받아오고 그 결과 테스트수 +1
    //우선 db에 test결과 넣어줘야함
    const header = res.setHeader('Content-Type', 'application/json');
    const resultArr = req.body.result;
    res.header("Access-Control-Allow-Origin","*")

    let gihun = 0, chulsoo = 0, junha = 0, ryuhwan = 0, yongnam = 0, kwangsoo = 0;

    for (let i = 1; i < 11; i++) {
        if (i == 1) {
            if (resultArr[i] == 0) ryuhwan++, yongnam++, kwangsoo++;
            else gihun++, chulsoo++, junha++;
            continue;
        }
        if (i == 2) {
            if (resultArr[i] == 0) gihun++, chulsoo++, kwangsoo++;
            else yongnam++, ryuhwan++, junha++;
            continue;
        }
        if (i == 3) {
            if (resultArr[i] == 0) ryuhwan++, junha++, kwangsoo++;
            else yongnam++, chulsoo++, junha++;
            continue;
        }
        if (i == 4) {
            if (resultArr[i] == 0) chulsoo++, junha++, kwangsoo++, gihun++;
            else yongnam++, ryuhwan++;
            continue;
        }
        if (i == 5) {
            if (resultArr[i] == 0) ryuhwan++, yongnam++, kwangsoo++;
            else chulsoo++, junha++, gihun++;
            continue;
        }
        if (i == 6) {
            if (resultArr[i] == 0) gihun++, junha++, kwangsoo++;
            else yongnam++, ryuhwan++, chulsoo++;
            continue;
        }
        if (i == 7) {
            if (resultArr[i] == 0) gihun++, yongnam++, ryuhwan++;
            else chulsoo++, kwangsoo++, junha++;

            continue;
        }
        if (i == 8) {
            if (resultArr[i] == 0) junha, gihun++, chulsoo++, yongnam++;
            else kwangsoo++, ryuhwan++;
            continue;
        }
        if (i == 9) {
            if (resultArr[i] == 0) junha++, yongnam++, gihun++;
            else kwangsoo++, chulsoo++, ryuhwan++;
            continue;
        }
        if (i == 10) {
            if (resultArr[i] == 0) yongnam++, ryuhwan++, gihun++;
            else yongnam++, ryuhwan++, gihun++;
            continue;
        }

    }
    const name = ["gihun", "chulsoo", "junha", "ryuhwan", "yongnam", "kwangsoo"];
    const cnt = [gihun, chulsoo, junha, ryuhwan, yongnam, kwangsoo];
    let max_name = name[0];
    let max_cnt = cnt[0];
    // console.log(max_cnt)
    // console.log(max_name)
    // console.log(name)
    // console.log(cnt)
    for (let i = 0; i < 6; i++) {
        if (max_cnt < cnt[i]) {
            max_name = name[i];
            max_cnt = cnt[i];
        }
    }

    //결과 db에서 찾아오고, 해당타입 참여수 +1 해준다
    let testResult = await testdb.findOne({where: {type_id: max_name}});
    console.log(testResult)
    //console.log(testResult.dataValues.type_id)
    let resultLike = await testdb.findOne({where: {type_id: testResult.dataValues.type_like}});
    let resultDislike = await testdb.findOne({where: {type_id: testResult.dataValues.type_dislike}});
    testdb.increment({type_attend: 1}, {where: {type_id: testResult.dataValues.type_id}}).then(function (result) {
        return cwr.createWebResp(res, header, 200, {
            message: "testing is completed, sending testResult!",
            testResult: testResult,
            resultLike: resultLike,
            resultDislike: resultDislike
        });
    }).catch(e => {
        return cwr.errorWebResp(res, header, 500,
            'test failed', e.message || e);
    });
}

const getResult = async (req, res) => {
    const header = res.setHeader('Content-Type', 'application/json');
    const {id} = req.query;
    let testResult = await testdb.findOne({where: {type_id: id}});
    let resultLike = await testdb.findOne({where: {type_id: testResult.dataValues.type_like}});
    let resultDislike = await testdb.findOne({where: {type_id: testResult.dataValues.type_dislike}});

    return cwr.createWebResp(res, header, 200, {
        message: "testing is completed, sending testResult!",
        testResult: testResult,
        resultLike: resultLike,
        resultDislike: resultDislike
    });

}


module.exports = {postTestResult,getResult}