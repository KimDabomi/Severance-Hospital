/**
 * @ File Name: LoginHeader.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-06 12:08
 * @ Description: 로그인센터 헤더 네비게이션
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoutImg from "../assets/img/ico-logout-white.png";
import loginImg from "../assets/img/logo@2x (1).png";

const Container = styled.div`
  letter-spacing: 0.02em;
  line-height: 1.625;
  .top {
    background-color: #0054d1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    color: white;
    font-size: 15px;
    text-align: right;
    b {
      font-weight: bold;
    }
    p {
      display: block;
      &:after {
        content: '';
        margin: 0 25px;
        border: none;
        border-right: 1px solid white;
      }
    }
    a {
      color: white;
      &:last-child {
        margin-left: 5px;
      }
    }
  }
  .nav {
    width: 1280px;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      li {
        float: left;
        &:hover {
          a {
            color: #0054d1;
            &:after {
              opacity: 1;
              visibility: visible;
              width: 64px;
              height: 64px;
              margin: -32px 0 0 -32px;
            }
          }
        }
        a {
          position: relative;
          font-size: 22px;
          line-height: 100px;
          text-align: center;
          padding: 0 30px;
          font-weight: bold;
          display: block;
          cursor: pointer;
          &:after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            width: 0;
            height: 0;
            margin: 0;
            background-color: #d9edf8;
            opacity: 0;
            visibility: hidden;
            -webkit-transition-duration: 0.3s;
            transition-duration: 0.3s;
            
          }
        }
        &:first-child {
          margin: 30px 478px 0 -30px;
          img {
            width: 190px;
          }
          &:hover {
            a:after {
              visibility: hidden;
            }
          }
        }
        &:last-child {
          &:hover {
            a:after {
              opacity: 1;
              visibility: visible;
              width: 64px;
              height: 64px;
              margin: -32px 0 0 -16px;
            }
          }
          a {
            padding-right: 0;
          }
        }
      }
    }
  }
  hr {
    border: none;
    border-top: 1px solid #e6e6e6;
    margin: 0;
  }
`;

const LoginHeader = memo(() => {
  return (
    <Container>
      <div className='top'>
        <p><b>이름</b>님 반갑습니다.</p>
        <Link to='/'><img src={logoutImg} alt="logoutImg" /></Link>
        <Link to='/'>로그아웃</Link>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <img src={loginImg} alt="통합로그인센터" />
            </Link>
          </li>
          <li>
            <Link to="/">예약현황</Link>
          </li>
          <li>
            <Link to="/">결과조회</Link>
          </li>
          <li>
            <Link to="/">나의 세브란스</Link>
          </li>
          <li>
            <Link to="/">회원정보</Link>
          </li>
        </ul>
      </div>
      <hr />
    </Container>
  );
});

export default LoginHeader;
