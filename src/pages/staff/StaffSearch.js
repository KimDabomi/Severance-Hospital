/**
 * @ File Name: StaffSearch.js
 * @ Author: 오태원 (daxxx2030@gail.com)
 * @ Last Update: 2022-11-25 15:00
 * @ Description: 의료진 찾기 페이지
 */

import React, { memo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { getStaffList } from "../../slices/StaffSearchSlice";

import { useQueryString } from "../../hooks/useQueryString";

import Header from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import Dropdown from "../../components/Dropdown";
import StaffRadio from "./StaffRadio";

const MainContainer = styled.main`
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 40px;
    line-height: 52px;
    font-weight: bold;
  }
`;

const SearchContainer = styled.form`
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

const SearchText = styled.div`
  margin: 138px 0px 43px;

  span {
    padding: 30px;
    span {
      color: #0094fb;
      padding: 0px;
    }
  }
`;

const StaffSearch = memo(() => {
  return (
    <>
      <Header />
      <MainContainer>
        <h2>의료진 찾기</h2>
        <div>
          <StaffRadio />
          <SearchContainer>
            <Dropdown />
            <Search />
          </SearchContainer>
          <SearchText>
            <i className="">(아이콘 자리)</i>
            <span>
              진료과.클리닉.센터에 속한 의료진을 빠르게 찾으실 수 있습니다.
              <br />
              의료진 찾기는 <span>질병명</span>과 <span>의료진명</span>으로
              검색이 가능합니다.
            </span>
          </SearchText>
        </div>
      </MainContainer>
      <Footer />
    </>
  );
});

export default StaffSearch;
