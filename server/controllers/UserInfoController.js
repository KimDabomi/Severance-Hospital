/*
 * @ File name: UserInfoController.js
 * @ Author: 김다보미(cdabomi60@gmail.com)
 * @ Last Update: 2023-01-11 17:50
 * @ Description: 회원정보 컨트롤러
*/

const express = require("express");
const regexHelper = require('../helper/RegexHelper');
const UserInfoService = require("../services/UserInfoService");
const { pagenation } = require('../helper/UtilHelper');

module.exports = (() => {
    const url = "/userinfo";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
        const { query, page=1, rows=5 } = req.query;

        // 검색어를 MyBatis에 전달하기 위한 객체로 구성
        const params = {};
        if (query) {
            params.userId = query;
            params.userName = query;
            params.userSex = query;
            params.userTel = query;
        }

        // 데이터 조회
        let json = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await UserInfoService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await UserInfoService.getList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ pagenation: pageInfo, data: json });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:id`, async (req, res, next) => {
        // 파라미터 받기
        const { id } = req.params;

        // 파라미터 유효성검사
        try {
            regexHelper.value(id, "회원번호가 없습니다.");
            regexHelper.num(id, "회원번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await UserInfoService.getItem({
              id: id
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post(url, async (req, res, next) => {
        // 파라미터 받기
        const { userId,userPassword,userName,userSex,userTel,userPreTel,userEmail,prtctorName,prtctorSex,prtctorBirth,regDate,userCategory,withdrawalStatus,withdrawalDate,withdrawalReason,editDate,pwEditDate,authCode,termsAgree,privateAgree,marketingAgree } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(userId, "회원아이디가 없습니다.");
            regexHelper.minLength(userId, 6, "아이디는 6자 이상 20자 이내로 입력해주세요.");
            regexHelper.maxLength(userId, 20, "아이디는 6자 이상 20자 이내로 입력해주세요.");
            regexHelper.value(userPassword, "비밀번호가 없습니다.");
            regexHelper.value(userName, "회원이름이 없습니다.");
            regexHelper.value(userSex, "회원성별이 없습니다.");
            regexHelper.value(userTel, "회원전화번호가 없습니다."); 
        } catch (err) {
            return next(err); 
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserInfoService.addItem({
                userId: userId,
                userPassword: userPassword,
                userName: userName,
                userSex: userSex,
                userTel: userTel,
                userPreTel: userPreTel,
                userEmail: userEmail,
                prtctorName: prtctorName,
                prtctorSex: prtctorSex,
                prtctorBirth: prtctorBirth,
                regDate: regDate,
                userCategory: userCategory,
                withdrawalStatus: withdrawalStatus,
                withdrawalDate: withdrawalDate,
                withdrawalReason: withdrawalReason,
                editDate: editDate,
                pwEditDate: pwEditDate,
                authCode: authCode,
                termsAgree: termsAgree,
                privateAgree: privateAgree,
                marketingAgree: marketingAgree
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 수정 --> Update(UPDATE) */
    router.put(`${url}/:id`, async (req, res, next) => {
        // 파라미터 받기
        const { id } = req.params;
        const { userPassword,userTel,userPreTel,userEmail,editDate,pwEditDate } = req.body;

        // 유효성 검사
        try {
            regexHelper.value(userPassword, "비밀번호가 없습니다.");
            regexHelper.value(userTel, "회원전화번호가 없습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await UserInfoService.editItem({
                id: id,
                userPassword: userPassword,
                userTel: userTel,
                userPreTel: userPreTel,
                userEmail: userEmail,
                editDate: editDate,
                pwEditDate: pwEditDate
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ data: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:id`, async (req, res, next) => {
        // 파라미터 받기
        const { id } = req.params;

        // 유효성 검사
        try {
            regexHelper.value(id, "회원번호가 없습니다.");
            regexHelper.num(id, "회원번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await UserInfoService.deleteItem({
              id: id
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
})();