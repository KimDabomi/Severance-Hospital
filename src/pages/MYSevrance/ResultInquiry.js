/**
 * @ File Name: ResultInquiry.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-12 18:05
 * @ Description: 결과조회 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";

const Container = styled.div`
  width: 1280px;
  margin: auto;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  h4 {
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom: 20px !important;
  }
  .boxGuide {
    max-width: 1280px;
    margin: auto;
    ul {
      li {
        margin-top: 5px;
        font-size: 16px;
        &:before {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: rgb(0,148,251);
          float: left;
          margin: 10px 5px 0 0;
        }
        &:first-child {
          color: rgb(0,148,251);
        }
      }
    }
  }
  .goMain {
    padding: 0 30px;
    font-size: 17px;
    width: 130px;
    margin: 30px 50% 0 50%;
    transform: translate(-50%);
  }
`;

const DetailsEdit = memo(() => {
  const navigate = useNavigate();
  
  const goMain = e => {
    navigate('/mysevrance');
  };

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>비밀번호변경</h1>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default DetailsEdit;
