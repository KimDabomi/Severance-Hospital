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
import radiocheck from "../../assets/img/ico-radio-checked.png";

/** 임시 cont */
const Cnt = styled.div`
  display: flex;
`;
/** 회원 예약 박스 스타일 */
const ReserveLogin = styled.div`
  width: 305px;
  height: 803px;

  position: relative;
  margin: 0 10px;

  font-size: 14px;
  text-align: center;

  display: block;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border: 1px solid #e6e6e6;
  } */

  .title {
    font-size: 20px;
    font-weight: 700;
    padding: 24px 0;
  }

  .username {
    font-size: 18px;
    font-weight: 700;
    line-height: 285px;
    background-color: #f9f9f9;
  }

  .btns {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: 0 20px;
    box-sizing: border-box;

    a {
      button {
        width: 100%;
        height: 50px;
        margin-top: 20px;

        font-size: 18px;

        border: 2px solid transparent;
        border-color: #959595;
        border-radius: 25px;
        background-color: #fff;
        box-sizing: border-box;

        color: #0094fb;
        border-color: #0094fb;
        background-color: #fff;
      }

      &:first-child button {
        color: #333;
        border-color: #959595;
        background-color: #fff;
      }
    }
  }
`;

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

/** 회원 예약 양식 */
const ReserveBox = styled.div`
  width: 305px;
  height: 803px;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: #fff;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;

  display: none;
  font-size: 14px;
  text-align: center;

  .title {
    font-size: 20px;
    font-weight: 700;
    padding: 24px 0;
  }

  .form {
    text-align: left;
    .radios {
      background-color: #f9f9f9;
      padding: 17px 20px 20px;
      margin-bottom: 14px;
      box-sizing: border-box;

      span {
        line-height: 20px;
        vertical-align: middle;
      }
    }

    .agree {
      margin: 0 20px;
      font-size: 16px;
      font-weight: bold;
    }

    .agreeBox {
      background-color: #f9f9f9;
      padding: 15px 20px;

      p:first-child {
        font-weight: bold;
        padding-bottom: 15px;
      }
      p:last-child {
        font-size: 14px;
      }

      //동의체크박스
      .agreeSelect {
        padding-top: 40px;

        span:last-child {
          padding-left: 15px;
        }

        label {
          font-size: 13px;
        }

        input[type="radio"] {
          width: 1.25em;
          height: 1.25em;

          vertical-align: middle;
          appearance: none;

          border: 1px solid gray;
          background-color: white;
          border-radius: 50%;

          margin: -3px 5px 0 0;
        }

        input[type="radio"]:checked {
          border: 1px solid black;
          background: #fff url(${radiocheck}) no-repeat center center;
          background-size: 11px 11px;
        }
      }
    }
  }

  .btns {
    position: absolute;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: 0 20px;

    button {
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;

      color: #333;
      background-color: #fff;
      border: 2px solid #959595;
      border-radius: 25px;

      &:last-child {
        margin-left: 6px;
        color: #fff;
        background-color: #0094fb;
        border: 2px solid transparent;
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
  const agreePopup = useRef();
  const reserve = useRef();
  const member = useRef();

  /** Login태그의 display를 변경한다. */
  const switchDisplay = useCallback((e) => {
    e.target.dataset.intro === "member" ? (reserve.current.style.display = "block") : (reserve.current.style.display = "none");
  }, []);

  /** 팝업 */
  // 팝업 열기
  const openPopup = useCallback((e) => {
    agreePopup.current.style.visibility = "visible";
  }, []);

  // 팝업 닫기
  const closePopup = useCallback((e) => {
    agreePopup.current.style.visibility = "hidden";
  }, []);

  // URL 경로 이동 시, 팝업을 닫는다.
  useEffect(() => {
    agreePopup.current.style.visibility = "hidden";
  }, [location.pathname]);

  return (
    <Cnt>
      {/* 회원 정보 */}
      <ReserveLogin>
        <p className="title">회원 정보</p>
        <p className="username">
          <span>박다윗</span> 님
        </p>
        <div className="btns">
          <Link to="/">
            <button type="button">로그아웃</button>
          </Link>
          <Link to="/mysevrance">
            <button type="button">MY세브란스</button>
          </Link>
          <Link to="/reserve-status">
            <button type="button">예약 현황 조회</button>
          </Link>
          <Link to="/user_info/resultinquiry">
            <button type="button">과거 진료이력 확인</button>
          </Link>
        </div>
      </ReserveLogin>

      {/* 회원 예약 */}
      <Member ref={member}>
        <a href="#reserve" data-intro="member" onClick={switchDisplay}>
          <div className="iconCont">
            <i />
            <span>회원 예약</span>
          </div>
        </a>

        {/* 회원 예약 로그인, 회원가입 */}
        <ReserveBox ref={reserve}>
          <p className="title">회원 예약</p>
          <div className="form">
            <div className="radios">
              <span>
                <input type="radio" name="radio" id="radio1" />
                <label htmlFor="radio1">본인 예약</label>
              </span>

              <span>
                <input type="radio" name="radio" id="radio2" />
                <label htmlFor="radio2">대리 예약</label>
              </span>
            </div>

            <p className="agree">1. 본인 정보 입력</p>

            <dl>
              <dt>
                <label>성명</label>
              </dt>
              <dd>
                <input type="text" name="certForm_rsvctmNm" id="u_name" data-error-message="성명을 입력해주세요." defaultValue="박다윗" />
              </dd>

              <dt>
                <label>연락처</label>
              </dt>
              <dd></dd>
            </dl>

            <div className="agreeBox">
              <p>개인정보 수집·이용 동의</p>
              <p>개인정보는 병원정보 조회를 위해서만 사용합니다. 개인정보 이용에 동의합니다.</p>

              <form className="agreeSelect">
                <span className="radioItem">
                  <label>
                    <input type="radio" id="mdAgree1" name="agree" />
                    동의합니다.
                  </label>
                </span>
                <span className="radioItem">
                  <label>
                    <input type="radio" id="mdAgree2" name="agree" />
                    동의하지 않습니다.
                  </label>
                </span>
              </form>
            </div>
          </div>

          <div className="btns">
            <button type="button" data-intro="loginPopup" onClick={switchDisplay}>
              이전
            </button>
            <button type="button" data-intro="joinPopup" onClick={openPopup}>
              다음
            </button>
          </div>
        </ReserveBox>
      </Member>

      {/* 로그인 팝업
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
      </Popup> */}

      {/* 회원가입 팝업 */}
      <Popup ref={agreePopup}>
        <div className="popupCont">
          <p>개인정보 수집·이용 조회 제공에 동의해야 예약이 가능합니다.</p>
          <footer>
            <button type="button" onClick={closePopup}>
              닫기
            </button>
          </footer>
        </div>
      </Popup>
    </Cnt>
  );
});

export default Reserve1;
