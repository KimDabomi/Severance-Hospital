/**
 * @ File Name: Unsupported.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-14 21:25
 * @ Description: 비급여진료비 페이지
 */

import React, { memo } from "react";
import styled from "styled-components";
// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const Container = styled.div`
  width: 1280px;
  margin: auto;
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
`;
const OutpatientInfo = memo(() => {
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
      </div>
    </Container>
  );
});

export default OutpatientInfo;
