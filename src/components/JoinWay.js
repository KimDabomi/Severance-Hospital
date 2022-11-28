/**
 * @ File Name: JoinWay.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-11-28 17:20
 * @ Description: 회원가입 방법 선택 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import loginImg from "../assets/img/logo@2x.png";
import JoinAccept from "./JoinAccept";
import LoginFooter from "./LoginFooter";
import localImg from "../assets/img/ico-login1@2x.png";
import childImg from "../assets/img/ico-login2@2x.png";
import globalImg from "../assets/img/ico-login3@2x.png";
import naver from "../assets/img/ico-sns-naver@2x.png";
import kakao from "../assets/img/ico-sns-kakao@2x.png";
import facebook from "../assets/img/ico-sns-facebook@2x.png";

const Container = styled.div`
  position: relative;
  .nav {
    width: 1280px;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;

    h1 {
      .sevLogo {
        width: 231px;
        height: 40px;
        object-fit: cover;
      }
    }
    ul {
      display: flex;

      li {
        display: flex;
        align-items: center;
        a {
          font-weight: bold;
          text-align: center;
          font-size: 20px;
          padding: 0 33px;
          line-height: 84px;
          img {
            width: 200px;
            margin-right: 100px;
          }
        }
        &:nth-child(5) {
          margin-left: 20px;
        }
        &:nth-child(6) {
          margin-left: 20px;
        }
      }
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 14px;
  }
  .ways {
    padding-left: 2%;
    box-sizing: border-box;
    .root_box {
      margin-top: 30px;
      margin-right: 30px;
      padding: 2% 0;
      box-sizing: border-box;
      float: left;
      width: 22.5%;
      height: 230px;
      border: 1px solid rgb(200, 200, 200);
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
      h2 {
        font-size: 22px;
        margin-bottom: 5px;
        font-weight: bold;
      }
      p {
        margin-bottom: 2px;
      }
      img {
        margin: auto;
        margin-top: 20px;
        width: 20%;
      }
      
      &:nth-child(3) {
        p {
          margin-bottom: 50px;
        }
      }
      &:nth-child(4) {
        p {
          margin-bottom: 25px;
          line-height: 1.5em;
        }
        ul {
          li {
            a {
              img {
                float: left;
                width: 17%;
                margin-left: 7%;
              }
            }
            &:first-child {
              a {
                img {
                  margin-left: 18%;
                }
              }
            }
          }
        }
      }
      &:hover {
        border: 1px solid rgb(0, 148, 251);
      }
    }
  }
  .qna {
    margin-right: 32%;
    height: 50px;
    line-height: 50px;
    p {
      margin: 50px 0 0 0;
      float: right;
      button {
        float: right;
        margin-left: 10px;
        background-color: white;
        border: 1px solid #ddd;
        padding: 10px 25px;
        font-size: 14px;
        border-radius: 30px;
      }
    }
  }
`;
const JoinWay = memo(() => {
  return (
    <Container>
      <div>
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

        <h1>회원가입</h1>
        <p>
          세브란스 홈페이지에 방문해주셔서 감사 드립니다. 통합 계정으로 모든
          패밀리사이트를 이용할 수 있습니다.
        </p>
        <div className="ways">
          <Link to="/join_accept" className="root_box">
            <h2>내/외국인</h2>
            <p>14세 이상</p>
            <p>국내거주 내/외국인</p>
            <img src={localImg} alt="내/외국인" />
          </Link>
          <Link to="/join_accept" className="root_box">
            <h2>소아/청소년</h2>
            <p>14세 미만</p>
            <p>내/외국인</p>
            <img src={childImg} alt="소아/청소년" />
          </Link>
          <Link to="/join_accept" className="root_box">
            <h2>해외거주 외국인</h2>
            <p>Foreign membership</p>
            <img src={globalImg} alt="해외거주외국인" />
          </Link>
          <Routes>
            <Route path="/join_accept" element={<JoinAccept />} />
          </Routes>
          <div className="root_box">
            <h2>SNS 회원가입</h2>
            <p>
              기존 사용하는 계정으로
              <br />
              간단하게 가입
            </p>
            <ul>
              <li>
                <Link to="/">
                  <img src={naver} alt="naver" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={kakao} alt="kakao" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={facebook} alt="facebook" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="qna">
            <p>
              회원가입이 잘 안되나요?
              <button type="button" className="qna_button">
                회원가입 할 때 가장 많이 물어보는 질문은?
              </button>
            </p>
          </div>
        </div>
        {/* <footer>
          <Link to='/'>이용약관</Link>
          <Link to='/'>개인정보처리방침</Link>
          <address>03722 서울특별시 서대문구 연세로 50-1</address>
          <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
          <button type='button'>연세의료원 네트워크</button>
        </footer> */}
        <LoginFooter />
      </div>
    </Container>
  );
});

export default JoinWay;
