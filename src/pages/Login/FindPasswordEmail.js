/**
 * @ File Name: FindPasswordEmail.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-20 18:00
 * @ Description: 비밀번호 찾기 이메일 인증 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import LoginFooter from "../../components/LoginFooter";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";

const Container = styled.div`
  position: relative;
  .bgAll {
    hr {
      border: 0;
      border-bottom: 1px solid #e6e6e6;
      width: 800px;
      margin: 20px auto 0;
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h3 {
    width: 800px;
    margin: auto;
    font-size: 16px;
  }
  .content {
    width: 800px;
    margin: 20px auto;

    // 인풋박스
    input {
      width: 580px;
      display: block;
      margin: 10px auto;
      height: 40px;
      border: 1px solid #dadada;
      padding: 8px 15px;
      box-sizing: border-box;
      text-align: left;
      font-size: 16px;
      vertical-align: middle;
      &:focus {
        outline: 1px solid rgb(0, 148, 251);
      }
    }
    // 주의사항
    ul {
      width: 580px;
      margin: 0 auto 20px;
      li {
        margin-left: 20px;
        letter-spacing: 0.02em;
        line-height: 1.625;
        color: #f76117;
        font-size: 14px;
      }
    }
    // 확인버튼
    .button_box {
      width: 250px;
      margin: 40px auto;
      .submit {
        width: 100%;
      }
    }
    
  }
`;

const FindPasswordEmail = memo(() => {
  const navigate = useNavigate();

  const submit = e => {
    navigate('/');
  };

  return (
    <Container>
      <LoginHeader />
      <div className="bgAll">
        <h1>비밀번호 찾기</h1>
        <h3>새로 사용할 비밀번호를 입력해 주세요.</h3>
        <hr />
        <div className="content">
          <input
            type="text"
            className="new_password"
            placeholder="새로운 비밀번호를 입력해 주세요."
          />
          <ul>
            <li>※ 8자 이상 ~ 20자 이내로 설정해주세요.</li>
            <li>※ 영문, 숫자, 특수문자를 모두 포함해주세요.</li>
            <li>※ 비밀번호 예시: password121!</li>
            <li>
              ※ 문자열이 3자리 이상 연속되거나 동일하지 않게 해주세요. (ex. 111,
              123, 321, aaa, abc 등)
            </li>
          </ul>
          <input
            type="text"
            className="new_password_check"
            placeholder="비밀번호를 한번 더 입력해 주세요."
          />
          <div className='button_box'>
            <button className="submit buttonBlue" onClick={submit}>확인</button>
          </div>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default FindPasswordEmail;
