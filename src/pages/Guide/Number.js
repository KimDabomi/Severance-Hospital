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
            <ColTableStyle>
              <table>
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
              </table>
            </ColTableStyle>
          </IndentDiv>

          <StyledH4>접수 및 외래 안내</StyledH4>
          <IndentDiv>
            <RowTableStyle>
              <table>
                <tr>
                  <th>세브란스헬스체크업</th>
                  <td>1588-7757</td>
                  <th>진료예약(타 병,의원 의사 전용)</th>
                  <td>02) 2228 - 7700</td>
                </tr>
                <tr>
                  <th>외래수납(3 ~ 6층)</th>
                  <td>
                    본관 : 02-2228-7170~5, 7228
                    <br />
                    연세암병원 : 02-2228-4500
                    <br />
                    재활병원 : 02-2228-3766
                    <br />
                    심장혈관병원 : 02-2228-8255
                    <br />
                    안과병원 : 02-2228-3421
                    <br />
                    어린이병원 : 02-2228-5966
                  </td>
                  <th>입원수속</th>
                  <td>02) 2228 - 7000</td>
                </tr>
                <tr>
                  <th>응급진료센터</th>
                  <td>02) 2228 - 8888, 6566</td>
                  <th />
                  <td />
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>전문진료센터 및 클리닉</StyledH4>
          <IndentDiv>
            <RowTableStyle>
              <table>
                <tr>
                  <th>당뇨병센터</th>
                  <td>02) 2228 - 5450 ~ 2</td>
                  <th>국제진료소</th>
                  <td>02) 2228 - 5800, 10</td>
                </tr>
                <tr>
                  <th>어린이병원</th>
                  <td>02) 2228-5920</td>
                  <th>장기이식센터</th>
                  <td>02) 2228 - 5330</td>
                </tr>
                <tr>
                  <th>알레르기클리닉</th>
                  <td>02) 2228 - 5880</td>
                  <th>통증클리닉</th>
                  <td>02) 2228 - 5770</td>
                </tr>
                <tr>
                  <th>불임클리닉</th>
                  <td>02) 2228 - 5968 ~ 70</td>
                  <th />
                  <td />
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>본원 진료과 접수</StyledH4>
          <IndentDiv>
            <RowTableStyle>
              <table>
                <tr>
                  <th>소화기내과</th>
                  <td>02) 2228 - 5170, 1</td>
                  <th>호흡기내과</th>
                  <td>02) 2228 - 5860, 1</td>
                </tr>
                <tr>
                  <th>혈액내과</th>
                  <td>02) 2228 - 5450 ~ 2</td>
                  <th>내분비내과</th>
                  <td>02) 2228 - 5450 ~ 2</td>
                </tr>
                <tr>
                  <th>신장내과</th>
                  <td>02) 2228 - 5331</td>
                  <th>류마티스내과</th>
                  <td>02) 2228 - 5560, 4</td>
                </tr>
                <tr>
                  <th>알레르기내과</th>
                  <td>02) 2228 - 5880</td>
                  <th>감염내과</th>
                  <td>02) 2228 - 5490</td>
                </tr>
                <tr>
                  <th>신경과</th>
                  <td>02)2228 - 5230 ~ 2</td>
                  <th>피부과</th>
                  <td>02) 2228 - 5380, 1</td>
                </tr>
                <tr>
                  <th>외과</th>
                  <td>02) 2228 - 5650, 1</td>
                  <th>소아외과</th>
                  <td>02) 2228 - 5920 ~ 1</td>
                </tr>
                <tr>
                  <th>이식외과</th>
                  <td>02) 2228 - 5330</td>
                  <th>신경외과</th>
                  <td>02) 2228 - 5230 ~ 2</td>
                </tr>
                <tr>
                  <th>흉부외과</th>
                  <td>02) 2228 - 5860, 1</td>
                  <th>정형외과</th>
                  <td>02) 2228 - 5670, 1</td>
                </tr>
                <tr>
                  <th>성형외과</th>
                  <td>02) 2228 - 5690, 1</td>
                  <th>산부인과</th>
                  <td>02) 2228 - 5710, 1</td>
                </tr>
                <tr>
                  <th>비뇨기과</th>
                  <td>02) 2228 - 5740, 1</td>
                  <th>가정의학과</th>
                  <td>02) 2228 - 5760</td>
                </tr>
                <tr>
                  <th>영상의학과</th>
                  <td>02) 2228 - 7301, 7302, 7303</td>
                  <th>마취통증의학과</th>
                  <td>02) 2228 - 5770</td>
                </tr>
                <tr>
                  <th>진단검사의학과</th>
                  <td>02) 2228 - 6100, 1</td>
                  <th>병리과</th>
                  <td>02)2228 - 2621 ~ 3</td>
                </tr>
                <tr>
                  <th>핵의학과</th>
                  <td>02) 2228 - 6040, 4850</td>
                  <th>임상유전과</th>
                  <td>02)2228 - 5920</td>
                </tr>
                <tr>
                  <th>정신건강의학과</th>
                  <td>02) 2228 - 5570, 1</td>
                  <th>이비인후과</th>
                  <td>02)02) 2228 - 3480, 3490</td>
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>재활병원</StyledH4>
          <IndentDiv>
          <RowTableStyle>
              <table>
                <tr>
                  <th>외래접수</th>
                  <td>02) 2228 - 3740, 4</td>
                  <th>입원수속 및 진료비계산</th>
                  <td>02) 2228 - 3764, 3766</td>
                </tr>
                <tr>
                  <th>응급전화</th>
                  <td>02) 2228 - 3767</td>
                  <th />
                  <td />
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>안과병원</StyledH4>
          <IndentDiv>
          <RowTableStyle>
              <table>
                <tr>
                  <th>진료비계산</th>
                  <td>02) 2228 - 3421</td>
                  <th>접수</th>
                  <td>02) 2228 - 3430, 3440</td>
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>심장혈관병원</StyledH4>
          <IndentDiv>
          <RowTableStyle>
              <table>
                <tr>
                  <th>현관안내</th>
                  <td>02) 2227 - 4514</td>
                  <th>입원안내</th>
                  <td>02) 2228 - 8252</td>
                </tr>
                <tr>
                  <th>입원진료비안내</th>
                  <td>02) 2228 - 8256</td>
                  <th>심장내과/심장혈관외과 접수</th>
                  <td>02) 2228 - 8271, 8272</td>
                </tr>
                <tr>
                  <th>소아심장과 접수</th>
                  <td>02) 2228 - 8280</td>
                  <th />
                  <td />
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>

          <StyledH4>치과대학병원</StyledH4>
          <IndentDiv>
          <RowTableStyle>
              <table>
                <tr>
                  <th>접수 및 진료비계산</th>
                  <td>02) 2228 - 8634 ~ 7(2층), 8638, 39(4층)</td>
                  <th>야간응급진료센터</th>
                  <td>02) 2228 - 8958</td>
                </tr>
                <tr>
                  <th>진료안내(상담)</th>
                  <td>02) 2228 - 8622</td>
                  <th />
                  <td />
                </tr>
              </table>
            </RowTableStyle>
          </IndentDiv>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Number;
