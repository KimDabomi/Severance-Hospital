/**
 * @ File Name: Unsupported.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 16:45
 * @ Description: 비급여진료비 페이지
 */

import React, { memo } from "react";
import { Routes,Route,NavLink,useLocation } from "react-router-dom";
import styled from "styled-components";
import Tab01 from "./Tab01";
import Tab02 from "./Tab02";
import Tab03 from "./Tab03";
import Tab04 from "./Tab04";
// 이미지
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";


const Container = styled.div`
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

const TabMenuNav = styled.nav`
  width: 1280px;
  margin: 0 auto 60px;

  ul {
    font-size: 18px;
    display: flex;
    li {
      flex: 1;
      background-color: #eef7fc;
      border-right: 1px solid #fff;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 1px;
        height: 55px;

        &::before {
          content: "";
          position: absolute;
          top: -1px;
          right: 0;
          bottom: -1px;
          left: 0;
          z-index: 100;
          border: 1px solid transparent;
          border-bottom: 3px solid transparent;
        }

        &.active {
          background-color: white;
          font-weight: bold;
          border: 1px solid #0094fb;
        }

        &.active::before {
          
        }
      }
    }
  }
`;

const Unsupported = memo(() => {
  const { pathname } = useLocation();

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

        {/* 네비게이션 */}
        <div className="tab">
          <TabMenuNav>
            <ul>
              <li>
                <NavLink to={pathname === "/guide/unsupported" ? "/guide/unsupported" : "/guide/unsupported/tab01"}>
                  <span>행위</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="tab02">
                  <span>치료재료</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="tab03">
                  <span>약제</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="tab04">
                  <span>제증명수수료</span>
                </NavLink>
              </li>
            </ul>
          </TabMenuNav>
        </div>
        <Routes>
          <Route path="/" element={<Tab01 />} />
          <Route path="tab01" element={<Tab01 />} />
          <Route path="tab02" element={<Tab02 />} />
          <Route path="tab03" element={<Tab03 />} />
          <Route path="tab04" element={<Tab04 />} />
        </Routes>
      </div>
    </Container>
  );
});

export default Unsupported;
