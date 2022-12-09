/**
 * @ File Name: Content1.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-08 15:02:00
 * @ Description: 오시는 길 페이지 -> 오시는 방법 컨텐츠
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 지도
import LocationMap from "../../assets/img/img-locationmap1.jpg";

// h4 스타일 적용 + 가상 선택자
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

const IndentUl = styled.ul`
  margin-left: 18px;
`;
const Content1 = memo(() => {
  return (
    <div>
      <StyledH4>약도</StyledH4>
      <img src={LocationMap} />
      <StyledH4>주소 안내</StyledH4>
      <div>
        <IndentUl>
          <li>03722 서울특별시 서대문구 연세로 50-1 세브란스병원</li>
          <li>Severance Hospital 50-1 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea</li>
          <li>[대표전화] 진료예약 : <strong>1599-1004</strong> / 세브란스 체크업(건강검진) : <strong>1588-7757</strong></li>
        </IndentUl>
      </div>
    </div>
  );
});

export default Content1;
