/**
 * @ File Name: Map.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-08 15:02:00
 * @ Description: 오시는 길 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 주요전화번호
import Number from "./Number";

const Guide = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <>
      <Header />

          <Routes>
            <Route path="/number" element={<Number />} />
          </Routes>

      <Footer />
    </>
  );
});

export default Guide;
