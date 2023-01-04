/**
 * @ File Name: Manager.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-02 17:33:33
 * @ Description: 관리자 메인 페이지
 */

/** import */
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// 메뉴 스타일
const MenuLinkContainer = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inilne-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      color: #fff;
    }
  }

  &.active {
    text-decoration: underline;
    color: #22b8cf;

    &:after {
      border-bottom: 4px solid #fff !important;
    }
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
    <div>
      <MenuLinkContainer to="test1">고객의소리</MenuLinkContainer>
      <MenuLinkContainer to="test2">뉴스</MenuLinkContainer>
      <MenuLinkContainer to="test3">공지사항</MenuLinkContainer>
      <MenuLinkContainer to="test4">뉴스</MenuLinkContainer>
      <MenuLinkContainer to="test5">예약</MenuLinkContainer>
    </div>
  );
});

export default Manager;
