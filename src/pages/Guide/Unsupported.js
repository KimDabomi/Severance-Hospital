/**
 * @ File Name: Unsupported.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-19 20:40
 * @ Description: 비급여진료비 페이지
 */

import React, { memo } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
import search from "../../assets/img/ico-search-white.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    padding-left: 18px;
    /* font-family: "NanumSquare", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
    font-size: 24px;
    line-height: 38px;
    position: relative;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;

    // 제목 앞에 파란색 띠
    &:before {
      position: absolute;
      left: 0;
      width: 6px;
      height: 20px;
      background-color: #0094fb;
      border-radius: 3px;
      top: 9px;
      margin-right: 12px;
      content: "";
    }
  }

  // 안내사항 박스
  .boxGuide {
    max-width: 1280px;
    margin: 0 auto 60px;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: #aaa;
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
  }

  // 네비게이션
  .tab {
    width: 1280px;
    margin: 0 auto 60px;
    background-color: rgb(238, 247, 252);
    .tab_list {
      &:after {
        display: block;
        clear: both;
        content: "";
      }
      li {
        float: left;
        width: 20%;
        text-align: center;
        padding: 10px 0;
        box-sizing: border-box;
        border: 1px solid rgb(238, 247, 252);
        border-right: 1px solid #fff;
        background-color: rgb(238, 247, 252);
        font-size: 18px;
        line-height: 1.2;
      }
      .on {
        border: 1px solid #0094fb;
        background-color: #fff;
        font-weight: bold;
        a {
          color: #0094fb;
        }
      }
    }
  }

  // 검색어입력
  .search_box {
    width: 1280px;
    margin: auto;
    background-color: #f9f9f9;
    padding: 15px 200px 15px;
    box-sizing: border-box;
    &:before {
      content: "";
      display: block;
      clear: both;
    }
    // 셀렉트 박스
    select {
      width: 150px;
      height: 48px;
      padding-right: 30px;
      padding-left: 10px;
      margin-right: 10px;
      background: #fff url(${dropdown}) no-repeat right 12px center;
      background-size: 17px auto;
      border: 1px solid #e6e6e6;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      float: left;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    // 검색어 입력란
    .keyword {
      width: 620px;
      height: 46px;
      float: left;
      padding: 0;
      margin-right: 10px;
      border: 1px solid #e6e6e6;
    }
    // 검색버튼
    .searchBtn {
      height: 48px;
      width: 60px;
      border-radius: 2px;
      background-color: #0094fb;
      border: 2px solid #0094fb;
      color: #fff;
      cursor: pointer;
      img {
        margin: auto;
      }
    }
  }

  // 목록수조절
  .list_select {
    width: 1280px;
    margin: auto;
    .label {
      float: left;
      margin: 40px 5px 0 0;
    }
    .list_num {
      float: left;
      width: 100px;
      height: 48px;
      padding-right: 30px;
      padding-left: 20px;
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 16px;
      background: #fff url(${dropdown}) no-repeat right 12px center;
      background-size: 17px auto;
      border: 1px solid #e6e6e6;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      float: left;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }

    // 수가기준일
    p {
      float: right;
      margin-top: 40px;
    }
  }

  // 테이블
  .table_box {
    clear: both;
    table {
      width: 1280px;
      margin: auto;
      thead {
        tr {
          th {
            background-color: #f9f9f9;
            vertical-align: middle;
            text-align: center;
            border-right: 1px solid #fff;
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
  }
`;

const Unsupported = memo(() => {
  const today = dayjs(new Date());
  const today1 = today.format("YYYY. MM. DD");

  return (
    <Container>
      <div className="bgAll">
        <h1>비급여진료비</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              관련근거 : 의료법 제45조 제1항 및 제2항과 동법 시행규칙 제 42조의
              제1항, 제2항 및 제3항에 의하여 비급여 진료비용을 고지하기 위한
              조회 화면입니다.
            </li>
            <li>
              행위료는 단일 개별 항목의 비용으로 시행횟수 및 범위에 따라 달라질
              수 있으며, 치료재료 및 약제가 필요한 경우 별도 산정됩니다.
            </li>
          </ul>
        </div>

        {/* 네비게이션 */}
        <nav className="tab">
          <ul className="tab_list">
            <li className="on">
              <a href="#" className="moveTab" role="tab" data-toggle="tab">
                행위
              </a>
            </li>
            <li>
              <a href="#" className="moveTab" role="tab" data-toggle="tab">
                치료재료
              </a>
            </li>
            <li>
              <a href="#" className="moveTab" role="tab" data-toggle="tab">
                약제
              </a>
            </li>
            <li>
              <a href="#" className="moveTab" role="tab" data-toggle="tab">
                제증명수수료
              </a>
            </li>
          </ul>
        </nav>

        {/* 검색어 입력창 */}
        <div className="search_box">
          <div className="dropdown">
            <select
              className="category"
              title="검색 카테고리"
              data-id="상세항목 전체보기"
            >
              <option data-id="전체" data-code="">
                전체
              </option>
              <option data-id="제1장 기본진료료" data-code="NF020100">
                제1장 기본진료료
              </option>
              <option data-id="제2장 검사료" data-code="NF020200">
                제2장 검사료
              </option>
              <option
                data-id="제3장 영상진단 및 방사선 치료료"
                data-code="NF020300"
              >
                제3장 영상진단 및 방사선 치료료
              </option>
              <option data-id="제6장 마취료" data-code="NF020600">
                제6장 마취료
              </option>
              <option
                data-id="제7장 이학요법료(물리치료료)"
                data-code="NF020700"
              >
                제7장 이학요법료(물리치료료)
              </option>
              <option data-id="제8장 정신요법료" data-code="NF020800">
                제8장 정신요법료
              </option>
              <option data-id="제9장 처치 및 수술료 등" data-code="NF020900">
                제9장 처치 및 수술료 등
              </option>
              <option data-id="제10장 치과처치, 수술료" data-code="NF021000">
                제10장 치과처치, 수술료
              </option>
              <option data-id="제18장 치과의 보철료" data-code="NF021800">
                제18장 치과의 보철료
              </option>
              <option data-id="제20장 치과의 교정치료료" data-code="NF022000">
                제20장 치과의 교정치료료
              </option>
              <option data-id="기타" data-code="NF029900">
                기타
              </option>
            </select>
          </div>
          <div className="keyword_input">
            <input
              type="text"
              className="keyword"
              id="srchKwd"
              placeholder="항목명칭 또는 구분을 입력해주세요"
              title="항목명칭 또는 구분 입력 검색"
            />
            <span className="search_btn">
              <button type="button" className="searchBtn">
                <img src={search} alt="search" />
              </button>
            </span>
          </div>
        </div>

        {/* 목록수조절 */}
        <div className="list_select">
          <label htmlFor="pagePerNum" className="label">
            목록수조절
          </label>
          <select name="pagePerNum" id="pagePerNum" className="list_num">
            <option defaultValue="20" selected="">
              20개
            </option>
            <option defaultValue="50">50개</option>
            <option defaultValue="100">100개</option>
          </select>
          <p>{`※ 수가 기준일 : ${today1}`} </p>
        </div>

        {/* 테이블 */}
        <div className="table_box">
          <table>
            <thead>
              <tr>
                <th rowSpan="2">중분류</th>
                <th rowSpan="2">소분류</th>
                <th colSpan="2">진료비용항목</th>
                <th colSpan="6">항목별 가격정보(단위:원)</th>
                <th rowSpan="2">
                  최종
                  <br />
                  변경일
                </th>
                <th rowSpan="2">특이사항</th>
              </tr>
              <tr>
                <th>코드</th>
                <th>명칭</th>
                <th>구분</th>
                <th>비용</th>
                <th>최저비용</th>
                <th>최고비용</th>
                <th>
                  치료재료대
                  <br />
                  포함여부
                </th>
                <th>
                  약제비
                  <br />
                  포함여부
                </th>
              </tr>
            </thead>
            <tbody className="bbs-data">
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
});

export default Unsupported;
