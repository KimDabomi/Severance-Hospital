/**
 * @ File Name: Cooperation.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-16 15:02:00
 * @ Description: 의료인 > 진료의뢰 페이지
 */

/** import */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

// 헤더 푸터
import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 협력병원 현황
import Hospital from "./Hospital";
// 협진병, 의원 현황
import Doctor from "./Doctor";

const Cooperation = memo(() => {
  return (
    <>
      <Header />
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">

          <Routes>
            <Route path="/hospital.do" element={<Hospital />} />
            <Route path="/doctor.do" element={<Doctor />} />
          </Routes>
          
        </div>
      </div>
      <Footer />
    </>
  );
});

export default Cooperation;
