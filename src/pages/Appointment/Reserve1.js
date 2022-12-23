/**
 * @ File Name: Reserve1.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-23 17:33:33
 * @ Description: 예약 페이지의 임시 컴포넌트
 */

/** import */
import React, { memo, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

/** 이미지 */
// 회원 예약 이미지
import bgBox02 from "../../assets/img/bg-box-02.png";
import box02 from "../../assets/img/ico-box-02.png";

/** 회원 예약 박스 스타일 */
const Member = styled.div`
  width: 305px;
  height: 803px;
  position: relative;
  margin: 0 10px;

  background: #f9f9f9 url(${bgBox02}) no-repeat right 34px;
  display: block;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }

  a {
    display: block;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    font-size: 20px;
    font-weight: 700;

    .iconCont {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      i {
        width: 80px;
        height: 80px;
        display: block;

        margin: 0 auto 30px;
        background: #f9f9f9 url(${box02}) no-repeat center / cover;
      }

      span {
        height: 50px;
        display: inline-block;

        text-align: center;
        line-height: 1.25;
      }
    }
  }
`;

/** 팝업 스타일 */
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;

  visibility: hidden;

  .popupCont {
    width: 360px;

    position: relative;
    top: 50%;
    left: 50%;
    z-index: 1100;
    transform: translate(-50%, -50%);

    background-color: #fff;

    p {
      max-height: 570px;
      display: block;
      padding: 30px;
      text-align: center;
    }

    footer {
      text-align: center;

      margin-top: -30px;
      padding: 30px;
      box-sizing: border-box;

      button {
        min-width: 80px;
        height: 40px;

        background-color: #0094fb !important;
        font-size: 16px;
        color: #fff;

        border: 1px solid transparent;
        border-radius: 3px;
        padding: 0 19px;
      }

      .cancelBtn {
        margin-left: 6px;
        background-color: #666 !important;
      }
    }
  }
`;

const Reserve1 = memo(() => {
  // 경로 변경 시, useEffect 동작을 위한 location
  const location = useLocation();

  /** ref */
  const loginPopup = useRef();
  const joinPopup = useRef();
  const login = useRef();
  const member = useRef();

  /** Login태그의 display를 변경한다. */
  const switchDisplay = useCallback((e) => {
    e.target.dataset.intro === "member" ? (login.current.style.display = "block") : (login.current.style.display = "none");
  }, []);

  /** 팝업 */
  // 팝업 열기
  const openPopup = useCallback((e) => {
    e.target.dataset.intro === "loginPopup" ? (loginPopup.current.style.visibility = "visible") : (joinPopup.current.style.visibility = "visible");
  }, []);

  // 팝업 닫기
  const closePopup = useCallback((e) => {
    loginPopup.current.style.visibility = "hidden";
    joinPopup.current.style.visibility = "hidden";
  }, []);

  // URL 경로 이동 시, 팝업을 닫는다.
  useEffect(() => {
    loginPopup.current.style.visibility = "hidden";
    joinPopup.current.style.visibility = "hidden";
  }, [location.pathname]);

  return (
    <>
      {/* 회원 예약 */}
      <Member ref={member}>
        <a href="#login" data-intro="member" onClick={switchDisplay}>
          <div className="iconCont">
            <i />
            <span>회원 예약</span>
          </div>
        </a>

        {/* 회원 예약 로그인, 회원가입 */}
        <Login ref={login}>
          <p>회원 예약</p>
          <div className="btns">
            <button type="button" data-intro="loginPopup" onClick={openPopup}>
              로그인
            </button>
            <button type="button" data-intro="joinPopup" onClick={openPopup}>
              회원가입
            </button>
          </div>

          <ul>
            <li>회원예약은 세브란스병원 로그인 후 이용하실 수 있습니다.</li>
            <li>회원이 아닌 분은 회원가입 후 이용 또는 비회원 예약을 이용하시기 바랍니다.</li>
          </ul>

          <button type="button" className="backBtn" onClick={switchDisplay}>
            이전
          </button>
        </Login>
      </Member>

      {/* 로그인 팝업 */}
      <Popup ref={loginPopup}>
        <div className="popupCont">
          <p>로그인 페이지로 이동하시겠습니까?</p>
          <footer>
            <Link to="/login">
              <button type="button">확인</button>
            </Link>
            <button type="button" className="cancelBtn" onClick={closePopup}>
              취소
            </button>
          </footer>
        </div>
      </Popup>

      {/* 회원가입 팝업 */}
      <Popup ref={joinPopup}>
        <div className="popupCont">
          <p>세브란스 회원가입 페이지로 이동하시겠습니까?</p>
          <footer>
            <Link to="/join_way">
              <button type="button">확인</button>
            </Link>
            <button type="button" className="cancelBtn" onClick={closePopup}>
              취소
            </button>
          </footer>
        </div>
      </Popup>
    </>
  );
});

export default Reserve1;
