/**
 * @ File Name: LoginHeader.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-03 15:60
 * @ Description: 로그인센터 헤더 네비게이션
 */

import React, { memo } from "react";
import loginImg from "../assets/img/logo@2x.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  .nav {
    width: 1280px;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 33px;
    box-sizing: border-box;
    ul {
      li {
        float: left;
        a {
          font-weight: bold;
          text-align: center;
          font-size: 22px;
          margin-right: 50px;
          img {
            width: 200px;
            margin-right: 289px;
          }
        }
        &:last-child {
            a {
                margin-right: 0;
            }
        }
      }
    }
  }
`;

const LoginHeader = memo(() => {
  return (
    <Container>
      <div className="nav">
        <ul>
          <li>
            <Link to="/login">
              <img src={loginImg} alt="통합로그인센터" />
            </Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/join_way">회원가입</Link>
          </li>
          <li>
            <Link to="/">아이디/비밀번호 찾기</Link>
          </li>
          <li>
            <Link to="/">병원등록번호 조회</Link>
          </li>
          <li>
            <Link to="/">이용정책</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
});

export default LoginHeader;
