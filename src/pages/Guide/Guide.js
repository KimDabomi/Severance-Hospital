/**
 * @ File Name: Guide.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-11 15:02:00
 * @ Description: 이용안내 페이지
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 주요전화번호
import Number from "./Number";
// 층별시설안내
import Facility from "./Facility";

const Guide = memo(() => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/number.do" element={<Number />} />
        <Route path="/facility.do" element={<Facility />} />
      </Routes>

      <Footer />
    </>
  );
});

export default Guide;
