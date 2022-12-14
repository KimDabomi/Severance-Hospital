/**
 * @ File Name: Withdraw.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-14
 * @ Description: 회원탈퇴 페이지
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
          background-color: #aaa;
          float: left;
          margin: 10px 5px 0 0;
        }
      }
    }
  }
  
  // 하단 버튼
  .buttons {
    width: 400px;
    margin: auto;
    .goMain,.withdraw {
        padding: 0 30px;
        font-size: 17px;
        width: 130px;
    }
    .goMain {
        margin-left: 10px;
    }
  }
  

  // 테이블
  .info {
    margin: 60px auto;
  }
  table {
    width: 1280px;
    margin: auto;
    letter-spacing: 0.02em;
    line-height: 1.625;
    font-size: 16px;
    color: #333;
    border-top: 1px solid #ccc;
    width: 1280px;
    text-align: left;
    margin: auto;
    tr {
      border-bottom: 1px solid #e6e6e6;
      padding: 13px 20px;
      th {
        background-color: #f9f9f9;
        padding: 15px 15px;
        font-weight: bold;
        vertical-align: middle;
        width: 180px;
      }
      td {
        padding: 13px 20px;
      }
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      .require {
        color: #f76117;
        font-weight: bold;
      }
    }
    ul {
      li {
        color: #f76117;
        font-size: 14px;
      }
    }
  }
`;

const ChangePassward = memo(() => {
  const navigate = useNavigate();

  const goMain = (e) => {
    navigate("/mysevrance");
  };

  return (
    <Container>
      <MyPageHeader />
      <div className="bgAll">
        <h1>회원탈퇴</h1>
        <div className="boxGuide">
          <img src={boxGuideDecor} alt="boxGuideDecor" />
          <ul>
            <li>
              회원정보삭제 : 연세대학교 의료원 패밀리사이트에서 회원탈퇴가 되어
              회원정보가 삭제됩니다.
            </li>
            <li>
              진료결과조회 및 증명서 발급 등 병원서비스를 이용하실 수 없습니다.
            </li>
          </ul>
        </div>
        <table className="info">
          <tbody>
            {/* 성명 */}
            <tr>
              <th>성명</th>
              <td>김다보미 (1995.08.30 여)</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="withdraw buttonWhite">회원탈퇴</button>
          <button className="goMain buttonBlue" onClick={goMain}>
            메인으로
          </button>
        </div>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default ChangePassward;
