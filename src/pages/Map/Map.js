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

const Map = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      {/* 페이지 기본 구조 */}
      <div className="pageCont">
        {/* 페이지 타이틀 */}
        <h1 className="pageTitle">위치 및 오시는 방법</h1>

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
      <Footer />
    </>
  );
});

export default Map;
