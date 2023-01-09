/**
 * @ File Name: CHospitalController.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-09 00:33:33
 * @ Description: 협력병원 컨트롤러
 */

/** import */
const express = require("express");
const regexHelper = require("../helper/RegexHelper");
const CHospitalService = require("../services/CHospitalService");
const { pagenation } = require("../helper/UtilHelper");

const logger = require("../helper/LogHelper");
const { ForbiddenException } = require("../helper/ExceptionHelper");

module.exports = (() => {
  const url = "/manager/cooperation_hospital";
  const router = express.Router();

  /** 목록 조회 */
  router.get(url, async (req, res, next) => {
    // 검색어, 페이지 번호, 한 페이지에 표시할 목록 수 파라미터
    const { query, page = 1, rows = 20 } = req.query;

    // 검색어를 MyBatis에 전달하기 위한 객체로 구성
    const params = {};
    if (query) {
      params.CHospitalArea = query;
      params.CHospitalName = query;
    }

    // 조회
    let json = null;
    let pageInfo = null;

    try {
      // 전체 수 얻기
      const totalCount = await CHospitalService.getCount(params);
      pageInfo = pagenation(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;
      json = await CHospitalService.getList(params);
    } catch (err) {
      return next(err);
    }

    res.sendResult({ pagenation: pageInfo, data: json });
  });

  /** 단일 조회 */
  router.get(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;

    // 파라미터 유효성검사
    try {
      regexHelper.value(id, "해당 아이디가 없습니다.");
      regexHelper.num(id, "타입 유효성검사");
    } catch (err) {
      return next(err);
    }

    // 조회
    let json = null;

    try {
      json = await CHospitalService.getItem({
        id: id
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 추가 */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const { CHospitalArea, CHospitalIntroduction, CHospitalAddress, CHospitalZipCode, CHospitalTel, CHospitalName, CMedicalDepartment, CHospitalURL } =
      req.body;

    // 유효성 검사
    try {
      regexHelper.value(CHospitalArea, "지역이 없습니다.");
      regexHelper.value(CHospitalIntroduction, "소개가 없습니다.");
      regexHelper.value(CHospitalAddress, "주소가 없습니다.");
      regexHelper.value(CHospitalZipCode, "우편번호가 없습니다.");
      regexHelper.value(CHospitalTel, "전화번호가 없습니다.");
      regexHelper.value(CHospitalName, "이름이 없습니다.");
      regexHelper.value(CMedicalDepartment, "진료과가 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 저장
    let json = null;

    try {
      json = await CHospitalService.addItem({
        CHospitalArea: CHospitalArea,
        CHospitalIntroduction: CHospitalIntroduction,
        CHospitalAddress: CHospitalAddress,
        CHospitalZipCode: CHospitalZipCode,
        CHospitalTel: CHospitalTel,
        CHospitalName: CHospitalName,
        CMedicalDepartment: CMedicalDepartment,
        CHospitalURL: CHospitalURL
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 수정 */
  router.put(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;
    const { CHospitalArea, CHospitalIntroduction, CHospitalAddress, CHospitalZipCode, CHospitalTel, CHospitalName, CMedicalDepartment, CHospitalURL } =
      req.body;

    // 유효성 검사
    try {
      regexHelper.value(CHospitalArea, "지역이 없습니다.");
      regexHelper.value(CHospitalIntroduction, "소개가 없습니다.");
      regexHelper.value(CHospitalAddress, "주소가 없습니다.");
      regexHelper.value(CHospitalZipCode, "우편번호가 없습니다.");
      regexHelper.value(CHospitalTel, "전화번호가 없습니다.");
      regexHelper.value(CHospitalName, "이름이 없습니다.");
      regexHelper.value(CMedicalDepartment, "진료과가 없습니다.");
    } catch (err) {
      return next(err);
    }

    // 저장
    let json = null;

    try {
      json = await CHospitalService.editItem({
        id: id,
        CHospitalArea: CHospitalArea,
        CHospitalIntroduction: CHospitalIntroduction,
        CHospitalAddress: CHospitalAddress,
        CHospitalZipCode: CHospitalZipCode,
        CHospitalTel: CHospitalTel,
        CHospitalName: CHospitalName,
        CMedicalDepartment: CMedicalDepartment,
        CHospitalURL: CHospitalURL
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ data: json });
  });

  /** 삭제 */
  router.delete(`${url}/:id`, async (req, res, next) => {
    // 파라미터 받기
    const { id } = req.params;

    // 유효성 검사
    try {
      regexHelper.value(id, "해당 아이디가 없습니다.");
      regexHelper.num(id, "타입 유효성검사");
    } catch (err) {
      return next(err);
    }

    try {
      await CHospitalService.deleteItem({
        id: id
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult();
  });

  return router;
})();
