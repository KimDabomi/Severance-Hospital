/**
 * @ File Name: Login.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-06 10:55
 * @ Description: 로그인 첫 페이지
 */

import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import naver from "../assets/img/ico-sns-naver@2x.png";
import kakao from "../assets/img/ico-sns-kakao@2x.png";
import facebook from "../assets/img/ico-sns-facebook@2x.png";
import bg from "../assets/img/bg-pattern.png";

const Container = styled.div`
  position: relative;
  .content {
    background: url(${bg}) no-repeat center /cover;
    height: 600px;
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  .login_section {
    text-align: center;
    width: 1280px;
    margin: auto;
    a {
      display: block;
      float: left;
      width: 49.8%;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      font-weight: bold;
      border: 1px solid #ebebeb;

      &:first-child {
        border-bottom: 3px solid #ffd553;
      }
      &:last-child {
        background-color: rgb(249, 249, 249);
        font-weight: normal;
      }
    }
  }
  .login_ways {
    width: 1280px;
    margin: auto;
    position: relative;
    .login_input {
      width: 640px;
      margin-top: 120px;
      position: relative;
      
      .email_input,
      .password_input {
        width: 58%;
        height: 50px;
        margin: 2% 0 0 9%;
        border: 1px solid #ebebeb;
        padding-left: 3%;
        box-sizing: border-box;
        font-size: 18px;
      }
      button {
        width: 20%;
        height: 113px;
        position: absolute;
        top: 9.5%;
        right: 9%;
        background-color: rgb(0, 148, 251);
        color: white;
        border: 0;
        font-size: 22px;
        border-radius: 4%;
        cursor: pointer;
      }
    }
    .remember {
      margin: 1% 0 0 5%;
      font-size: 16px;
      color: rgba(100, 100, 100);
    }
    .find {
      padding: 4% 0 0 5%;
      a {
        border: 1px solid rgb(100, 100, 100);
        padding: 15px 6.4%;
        box-sizing: border-box;
        border-radius: 4%;
        font-size: 16px;
        color: rgba(100, 100, 100);

        &:first-child {
          margin-right: 15px;
        }
      }
    }
    .sns_login {
      width: 550px;
      position: absolute;
      right: 2%;
      top: 0;
      h3 {
        font-size: 18px;
      }
      ul {
        border-radius: 2px;
        background-color: rgb(249, 249, 249);
        width: 94%;
        height: 85px;
        padding: 3% 27%;
        margin-top: 20px;
        box-sizing: border-box;
        li {
          margin-right: 10%;
          float: left;
          a {
            img {
              width: 50px;
            }
          }
        }
      }
    }
    .go_join {
      width: 550px;
      position: absolute;
      right: 2%;
      top: 65%;
      h3 {
        font-size: 18px;
      }
      p {
        margin-top: 10px;
        line-height: 1.5em;
        font-size: 16px;
        float: left;
      }
      button {
        background-color: white;
        border: 1px solid rgb(0, 148, 251);
        color: rgb(0, 148, 251);
        border-radius: 4%;
        padding: 2% 3%;
        font-size: 18px;
        margin: 20px 0 0 26%;
        cursor: pointer;
      }
    }
  }
  .checkBox {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  .checkBox + label {
    position: relative;
    height: 20px;
  }
  .checkBox + label::before {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 0;
    margin: -2px 5px 0 0;
    background-color: #fff;
    content: "";
    border: 0;
    border-radius: 50%;
    background: #959595 url(./img/ico-checkbox-checked-white.png) no-repeat 45%
      center !important;
    background-size: 11px 8px !important;
  }
  .checkBox:checked + label::before {
    background-color: #0094fb !important;
  }
`;
const Login = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/mypage");
  };

  const joinBtnClick = e => {
    navigate('/join_way');
  };
  return (
    <Container>
      <div>
        <LoginHeader />
        <div className='content'>
          <div className='title'>
            <h1>로그인</h1>
          </div>
          <div className="login_section">
            <Link to="/login">세브란스 로그인</Link>
            <Link to="/login">본인인증 로그인</Link>
          </div>
          <div className='login_ways'>
            <form className="login_input">
              <input
                name="email"
                type="email"
                placeholder="아이디를 입력해 주세요."
                value={email}
                onChange={onEmailHandler}
                className="email_input"
              />
              <input
                name="password"
                type="new_password"
                placeholder="비밀번호를 입력해 주세요."
                value={password}
                onChange={onPasswordHandler}
                className="password_input"
              />
              <button type="submit" onSubmit={onSubmit} className="login_button">
                로그인
              </button>
            </form>
            <form className="remember">
              <input
                type="checkbox"
                name="remember_id"
                id="remember_id"
                className="checkBox"
              />
              <label htmlFor="remember_id">아이디를 기억합니다.</label>
            </form>
            <div className="find">
              <Link to="/">아이디 찾기</Link>
              <Link to="/">비밀번호 찾기</Link>
            </div>
            <div className="sns_login">
              <h3>SNS 계정으로 로그인</h3>
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
            <div className="go_join">
              <h3>아직 세브란스 회원이 아니신가요?</h3>
              <p>
                지금 바로 회원가입을 하고 <br />
                나에게 딱 맞는 정보를 확인해 보세요!
              </p>
              <button type="button" onClick={joinBtnClick}>회원가입</button>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>
    </Container>
  );
});

export default Login;
