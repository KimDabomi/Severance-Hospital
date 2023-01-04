/**
 * @ File Name: Manager.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-02 17:33:33
 * @ Description: 관리자 메인 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ManagerCustomerBoard from "./ManagerCustomerBoard";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 50px 100px 20px;
  border-bottom: 1px solid #eee;
`;
// 메뉴 스타일
const MenuLinkContainer = styled(NavLink)`
  font-size: 18px;
  padding-bottom: 2px;
  color: #ccc;

  &:hover {
    color: #222;
    font-weight: bold;
  }

  &.active {
    color: #222;
    font-weight: bold;
  }
`;
const Table = styled.table`
  border-collapse: collapse;
  border-top: 3px solid #168;
  font-size: 14px;
  text-align: center;
  margin: auto;
  width: 100%;

  th {
    color: #168;
    background: #f0f6f9;
    border: 1px solid #ddd;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }

  td {
    padding: 10px;
    border: 1px solid #ddd;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }
`;
const TableEx = styled(Table)`
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
  }
`;
const Manager = memo(() => {
  return (
    <>
      <MenuContainer>
        <MenuLinkContainer to="customer_board">고객의소리</MenuLinkContainer>
        <MenuLinkContainer to="test2">뉴스</MenuLinkContainer>
        <MenuLinkContainer to="test3">공지사항</MenuLinkContainer>
        <MenuLinkContainer to="test4">예약</MenuLinkContainer>
        <MenuLinkContainer to="test5">회원정보</MenuLinkContainer>
        <MenuLinkContainer to="test6">회원결과</MenuLinkContainer>
        <MenuLinkContainer to="test7">병원</MenuLinkContainer>
        <MenuLinkContainer to="test8">의사</MenuLinkContainer>
        <MenuLinkContainer to="test9">협력병원</MenuLinkContainer>
        <MenuLinkContainer to="test10">협력의사</MenuLinkContainer>
        <MenuLinkContainer to="test11">진료과</MenuLinkContainer>
      </MenuContainer>

      <Routes>
        <Route path='/customer_board' element={<ManagerCustomerBoard />} />
      </Routes>
    </>
  );
});

export default Manager;
