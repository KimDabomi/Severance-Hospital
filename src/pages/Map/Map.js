/**
 * @ File Name: Map.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-08 15:02:00
 * @ Description: 오시는 길 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 약도 및 주소 안내
import Content1 from "./Content1";
// 오시는 방법
import Content2 from "./Content2";

/** 이미지 import */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const Map = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">위치 및 오시는 방법</h1>
          <div className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ul className="textLeftBoxShape">
              <li>누구나 쉽게 찾아오시도록 병원 위치 및 교통수단별 안내 드립니다.</li>
              <li>지하철과 연계하여 바로 오실 수 있도록 셔틀버스를 운영하고 있으며, 노약자 및 임산부를 위하여 원내순환 전기차를 운영하고 있습니다.</li>
            </ul>
          </div>

          {/* 탭 기본 구조 */}
          <nav className="tabMenu">
            {/* 경로가 /map.do와 /map.do/tab_content1일때, 모두 active 활성화 */}
            <NavLink to={pathname == "/map.do" ? "/map.do" : "/map.do/tab_content1"}>약도 및 주소 안내</NavLink>

            <NavLink to="tab_content2">오시는 방법</NavLink>
          </nav>

          <Routes>
            {/* 경로가 /map.do일때, 기본값 */}
            <Route path="/" element={<Content1 />} />

            {/* 약도 및 주소 안내, 오시는 방법 페이지 */}
            <Route path="tab_content1" element={<Content1 />} />
            <Route path="tab_content2" element={<Content2 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Map;
