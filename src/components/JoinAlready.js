/**
 * @ File Name: JoinComplete.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-05 22:45
 * @ Description: 이미 회원가입됨 안내 페이지
 */

import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "./LoginHeader";
import LoginFooter from "./LoginFooter";
import Right from "../assets/img/ico-arrow-right-gray@2x.png";
import step01 from "../assets/img/ico-login-step1-off@2x.png";
import step02 from "../assets/img/ico-login-step2-off@2x.png";
import step03 from "../assets/img/ico-login-step3-off@2x.png";
import step04 from "../assets/img/ico-login-step4-off@2x.png";
import bg from "../assets/img/bg-pattern.png";


const Container = styled.div`
  position: relative;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  hr {
    width: 100%;
    margin: 0;
    border: 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .steps {
    ol {
      li {
        .box {
          font-size: 16px;
          float: left;
          border: 2px solid #e6e6e6;
          width: 240px;
          height: 50px;
          text-align: left;
          padding: 6px 2px;
          box-sizing: border-box;
          border-radius: 30px;
          img {
            margin: 5px 10px 5px 50px;
            float: left;
            width: 10%;
          }
          p {
            float: left;
            margin-top: 4px;
          }
        }
        &:nth-of-type(4) {
          .box {
            color: rgb(0, 148, 251);
            font-weight: bold;
            border: 2px solid rgb(0, 148, 251);
          }
        }
      }
      .right {
        float: left;
        margin: 13px 3.6%;
        height: 25px;
      }
    }
  }
  h4 {
    margin: 53px 0 13px 0;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0.02em;
    line-height: 1.625;
    &:before {
      content: "";
      display: block;
      width: 100px;
      height: 42px;
    }
    .sub_text {
      font-size: 14px;
      color: #999;
      margin-left: 80%;
      .require {
        color: #f76117;
        font-weight: bold;
      }
    }
  }
  .buttons {
    float: left;
    margin-left: 19.5%;
    margin-top: 40px;
  }
  .find_id,
  .find_password {
    height: 50px;
    width: 190px;
    font-size: 18px;
    font-weight: 100;
    float: left;
    border: 1px solid rgb(0, 148, 251);
    padding: 10px 25px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: rgb(0, 148, 251);
    color: white;
    cursor: pointer;
    margin-right: 5px;
  }
  .retry,
  .go_home {
    height: 50px;
    width: 190px;
    font-size: 18px;
    float: left;
    border: 2px solid rgb(0, 148, 251);
    padding: 10px 28px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: white;
    color: rgb(0, 148, 251);
    margin-right: 5px;
    cursor: pointer;
  }
  .box_tip {
    float: left;
    border: 1px solid #e6e6e6;
    margin-top: 40px;
    padding: 17px 30px 18px 35px;
    box-sizing: border-box;
    line-height: 2em;
    width: 62%;
    margin-left: 19%;
  }
`;

const JoinComplete = memo(() => {
  const navigate = useNavigate();

  const goHome = (e) => {
    navigate("/");
  };

  const goJoinWay = (e) => {
    navigate('/join_way');
  };

  return (
    <Container>
      <div>
        <LoginHeader />
        <div className='title'>
          <h1>회원가입</h1>
        </div>
        <div className="steps">
          <ol>
            <li>
              <div className="box">
                <img src={step01} alt="step01" />
                <p>약관동의 하기</p>
              </div>
            </li>
            <img src={Right} alt="right" className="right" />
            <li>
              <div className="box">
                <img src={step02} alt="step02" />
                <p>본인인증 하기</p>
              </div>
            </li>
            <img src={Right} alt="right" className="right" />
            <li>
              <div className="box">
                <img src={step03} alt="step03" />
                <p>정보입력 하기</p>
              </div>
            </li>
            <img src={Right} alt="right" className="right" />
            <li>
              <div className="box">
                <img src={step04} alt="step04" />
                <p>회원가입 완료</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="box_tip">
          <dl>
            <dt>이미 회원가입이 되어 있습니다.</dt>
            <dd>
              아이디 찾기 또는 비밀번호 찾기를 이용하여 로그인 후 이용해주세요.
            </dd>
          </dl>
        </div>
        <div className="buttons">
          <button type="button" className="find_id" onClick={goHome}>
            아이디 찾기
          </button>
          <button type="button" className="find_password" onClick={goHome}>
            비밀번호 찾기
          </button>
          <button type="button" className="retry" onClick={goJoinWay}>
            다시시도 하기
          </button>
          <button type="button" className="go_home" onClick={goHome}>
            홈으로 이동
          </button>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default JoinComplete;
