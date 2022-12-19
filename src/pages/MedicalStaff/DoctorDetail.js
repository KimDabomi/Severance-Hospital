/**
 * @ File Name: DoctorDetail.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-19 15:02:00
 * @ Description: 협진병, 의원 현황 상세 페이지
 */

/** import */
import React, { memo } from "react";
import { Link } from "react-router-dom";
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

/** 한개 버튼 박스 스타일 */
const SingleButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 25px;

  a {
    width: 100px;
    height: 50px;
    display: block;

    font-size: 18px;
    line-height: 50px;

    margin: 5px 0;
    padding: 0 28px;

    border: 2px solid transparent;
    border-radius: 25px;
    box-sizing: border-box;

    color: #fff;
    background-color: #0094fb;
  }
`;

const DoctorDetail = memo(() => {
  return (
    <>
      {/* 페이지 타이틀 */}
      <h1 className="pageTitle">협진병, 의원 현황</h1>
      <section className="boxGuide">
        <img src={boxGuideDecor} alt="boxGuideDecor" />
        <ListStyleUl>
          <li>전국 병 · 의원과의 협력을 통하여 진료의뢰, 회송이 원활하게 이루어지도록 진료협력센터(Severance Hospital Referral Center)를 운영하고 있습니다.</li>
        </ListStyleUl>
      </section>

      <SingleButtonDiv>
        <Link to="/cooperation/doctor.do">
          목록
        </Link>
      </SingleButtonDiv>
    </>
  );
});

export default DoctorDetail;
