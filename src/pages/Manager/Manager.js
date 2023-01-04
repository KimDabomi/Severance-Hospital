/**
 * @ File Name: Manager.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-02 17:33:33
 * @ Description: 관리자 메인 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";

// 서브 라우팅 페이지
import ManagerCustomerBoard from "./ManagerCustomerBoard";
import ManagerNews from "./ManagerNews";
import ManagerNotice from "./ManagerNotice";
import ManagerCooperationHospital from "./ManagerCooperationHospital";
import ManagerCooperationDoctor from "./ManagerCooperationDoctor";

/** 전체 메뉴 스타일 */
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 50px 100px 20px;
  border-bottom: 1px solid #eee;
`;
// 각 메뉴 스타일
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

const Manager = memo(() => {
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  return (
    <>
      <MenuContainer>
        <MenuLinkContainer to={pathname === "/manager" ? "/manager" : "/manager/manager_customer_board"}>고객의소리</MenuLinkContainer>
        <MenuLinkContainer to="manager_news">뉴스</MenuLinkContainer>
        <MenuLinkContainer to="manager_notice">공지사항</MenuLinkContainer>
        <MenuLinkContainer to="test4">예약</MenuLinkContainer>
        <MenuLinkContainer to="test5">회원정보</MenuLinkContainer>
        <MenuLinkContainer to="test6">회원결과</MenuLinkContainer>
        <MenuLinkContainer to="test7">병원</MenuLinkContainer>
        <MenuLinkContainer to="test8">의사</MenuLinkContainer>
        <MenuLinkContainer to="manager_cooperation_hospital">협력병원</MenuLinkContainer>
        <MenuLinkContainer to="manager_cooperation_doctor">협력의사</MenuLinkContainer>
        <MenuLinkContainer to="test11">진료과</MenuLinkContainer>
      </MenuContainer>

      <Routes>
        <Route path="/" element={<ManagerCustomerBoard />} />
        <Route path="/manager_customer_board" element={<ManagerCustomerBoard />} />
        <Route path="/manager_news" element={<ManagerNews />} />
        <Route path="/manager_notice" element={<ManagerNotice />} />

        
        <Route path="/manager_cooperation_hospital" element={<ManagerCooperationHospital />} />
        <Route path="/manager_cooperation_doctor" element={<ManagerCooperationDoctor />} />
      </Routes>
    </>
  );
});

export default Manager;
