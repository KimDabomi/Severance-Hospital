/**
 * @ File Name: Number.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-11 15:02:00
 * @ Description: 이용안내 주요전화번호 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

/** 서브 타이틀 h4 스타일 */
const StyledH4 = styled.h4`
  padding-left: 18px;
  margin: 65px 0 22px;
  font-size: 24px;
  font-weight: bold;
  line-height: 38px;
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

/** 텍스트 들여쓰기 스타일 */
const IndentDiv = styled.div`
  margin-left: 18px;
`;

/** 테이블 스타일 */
const TableStyle = styled.table`
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  th {
    border-bottom: 1px solid #ebebeb;
    background-color: #f9f9f9;
    font-weight: bold;
    height: 50px;
    padding: 13px 20px;
    box-sizing: border-box;
  }

  tr {

  }

  td {
    height: 50px;
    padding: 13px 20px;
    border-right: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
    box-sizing: border-box;

    &:last-child {
      border-right: 0;
    }
  }
`;

const Number = memo(() => {
  return (
    <>
      <Header />
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">주요전화번호</h1>
          <div className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ul className="textLeftBoxShape">
              <li>환자 및 보호자의 전화예약 및 문의에 대하여 효율적으로 안내하고자 아래와 같이 대표전화 ARS 시스템을 도입하여 운영하고 있습니다.</li>
              <li>세브란스병원 대표 및 진료예약 전화번호와 각 진료과 및 센터/클리닉 전화번호를 확인하실 수 있습니다.</li>
            </ul>
          </div>

          <StyledH4>대표전화, 진료예약 안내</StyledH4>
          <IndentDiv>
            <TableStyle>
              <tr>
                <th>전화예약 이용시간</th>
                <th colSpan="2">ARS안내</th>
              </tr>
              <tr>
                <td rowSpan="6">예약센터 전화 1599-1004 (평일 08:00~18:00, 토요일 08:00~13:00)</td>
                <td>병원이용 및 전화번호 안내</td>
                <td>0번</td>
              </tr>
              <tr>
                <td>진료 및 검사예약일자 확인 및 취소</td>
                <td>1번</td>
              </tr>
              <tr>
                <td>진료 및 검사예약상담</td>
                <td>2번</td>
              </tr>
              <tr>
                <td>병원위치 및 교통편 안내</td>
                <td>3번</td>
              </tr>
              <tr>
                <td>세브란스헬스체크업 예약 및 안내</td>
                <td>4번</td>
              </tr>
              <tr>
                <td>English Service</td>
                <td>7번</td>
              </tr>
            </TableStyle>
          </IndentDiv>

          <StyledH4>접수 및 외래 안내</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>전문진료센터 및 클리닉</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>본원 진료과 접수</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>재활병원</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>안과병원</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>심장혈관병원</StyledH4>
          <IndentDiv></IndentDiv>

          <StyledH4>치과대학병원</StyledH4>
          <IndentDiv></IndentDiv>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Number;
