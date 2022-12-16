/**
 * @ File Name: Hospital.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-16 15:02:00
 * @ Description: 협력병원 현황 페이지
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;

/** 타이틀 h4태그 스타일 */
// 타이틀1
const Title1H4 = styled.h4`
  padding-left: 18px;
  margin: 65px 0 22px;

  font-size: 24px;
  font-weight: bold;
  line-height: 38px;

  color: #222;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    top: 9px;
    left: 0;
    background-color: #0094fb;
    border-radius: 3px;
  }
`;
// 타이틀2
const Title2H4 = styled.h4`
  padding-left: 19px;
  margin: 47px 0 22px 18px;

  font-size: 20px;
  font-weight: bold;
  line-height: 34px;

  color: #222;
  position: relative;

  &:before {
    content: "";
    width: 11px;
    height: 11px;

    position: absolute;
    top: 0.55em;
    left: 0;

    border: 3px solid #0094fb;
    border-radius: 50%;
    box-sizing: border-box;

    margin-right: 8px;
  }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;
// 들여쓰기2
const Indent2 = styled.div`
  margin-left: 37px;
`;

/** 테이블 스타일 */
// 세로 테이블
const ColTableStyle = styled.div`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  box-sizing: border-box;

  table {
    width: 100%;
    overflow: hidden;
    text-align: center;

    th {
      width: 50%;
      height: 50px;
      padding: 13px 20px;

      font-weight: bold;
      background-color: #f9f9f9;

      border-right: 1px solid #ebebeb;
      box-sizing: border-box;

      &:last-child {
        border-right: 0;
      }
    }

    tr {
    }

    td {
      height: 50px;
      padding: 13px 20px;
      vertical-align: middle;

      border-top: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      box-sizing: border-box;

      &:last-child {
        border-right: 0;
      }
    }
  }
`;
// 가로 테이블
const RowTableStyle = styled.div`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  box-sizing: border-box;

  table {
    width: 100%;
    overflow: hidden;

    th {
      width: 200px;
      height: 50px;
      padding: 13px 20px;
      vertical-align: middle;

      font-weight: bold;
      background-color: #f9f9f9;

      border-left: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      box-sizing: border-box;

      &:first-child {
        border-left: 0;
      }
    }

    tr {
      border-bottom: 1px solid #ebebeb;

      &:last-child {
        border-bottom: 0;
      }
    }

    td {
      width: 431px;
      height: 50px;
      vertical-align: middle;

      padding: 13px 20px;
      box-sizing: border-box;

      &:last-child {
        border-right: 0;
      }
    }
  }
`;

const Hospital = memo(() => {
  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">협력병원 현황</h1>
          <section className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>전국 세브란스병원 협력병원 현황입니다.</li>
            </ListStyleUl>
          </section>

          <section>
          </section>
        </div>
      </div>
    </>
  );
});

export default Hospital;
