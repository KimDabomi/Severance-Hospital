/**
 * @ File Name: MainPageHeader.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: 메인 페이지 header
 */

/** import */
import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/** components */
import SiteMap from "./SiteMap";

/** 이미지 참조 */
// 로고, 아이콘, 이미지
import sevLogo from "../assets/img/sev_logo@2x.png";
import loginIcon from "../assets/img/ico-top-login@2x.png";
import joinIcon from "../assets/img/ico-top-join@2x.png";
import allMenuIcon from "../assets/img/ico-allmenu.png";
import searchIcon from "../assets/img/ico-search.png";
import chevronIcon from "../assets/img/ico-chevron-down-xs-bold@2x.png";
// 검색 모달 -> 검색탭 버튼 아이콘
import totalSearch from "../assets/img/ico-totalsearch-index.png";
// 검색 모달 -> 닫기 버튼 아이콘
import closeWhite from "../assets/img/ico-close-white@2x.png";
// 검색 모달 -> 라디오 버튼 체크 아이콘
import checkboxCheckedBlack from "../assets/img/ico-checkbox-checked-black.png";
import checkboxCheckedWhite from "../assets/img/ico-checkbox-checked-white.png";

/** 검색 모달 스타일 */
const SearchModalDiv = styled.div`
  opacity: 1;
  display: none;
  transition-duration: 0.3s;
  overflow-y: hidden;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;

  background-color: rgba(0, 0, 0, 0.7);

  /* 팝업 배경 */
  .popupBg {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1100;

    background-color: rgba(0, 84, 209, 0.8);

    /* 팝업 콘텐츠 */
    .popup {
      width: 1000px;
      margin: 0 auto;
      color: #fff;
      padding: 150px 0 90px;

      /* 팝업 닫기 버튼 */
      .modalCloseButton {
        width: 40px;
        height: 40px;

        position: absolute;
        right: 40px;
        top: 40px;

        background: url(${closeWhite}) no-repeat center / cover;
        background-size: 40px 40px;

        border: none;
      }

      /* 라디오탭 */
      .radio {
        display: flex;
        justify-content: space-around;
        position: relative;

        span {
          input {
            &[type="radio"] {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              border: 0;
            }

            &[type="radio"] + label {
              display: inline-block;
              position: relative;

              padding-left: 36px;
              font-size: 24px;
              cursor: pointer;
            }

            &[type="radio"] + label:before {
              content: "";
              width: 26px;
              height: 26px;

              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(0, -50%);

              background: #959595 url(${checkboxCheckedWhite}) no-repeat center;
              background-size: 13px 10px;
              box-shadow: none;

              border: none;
              border-radius: 50%;
            }

            &[type="radio"]:checked + label:before {
              background: #ffd553 url(${checkboxCheckedBlack}) no-repeat center;
              background-size: 13px 10px;
            }
          }
        }
      }

      /* 검색탭 */
      .search {
        position: relative;
        margin-top: 75px !important;
        box-sizing: border-box;
        color: #fff;

        input {
          width: 100%;
          height: auto;
          font-size: 40px;
          font-weight: bold;

          vertical-align: middle;

          background-color: transparent;
          color: #fff;

          border: none;
          border-bottom: 2px solid #fff;
          box-sizing: border-box;

          padding: 15px 70px 15px 15px;

          &::placeholder {
            text-align: center;
            color: white;
          }

          &:focus {
            outline: none;
          }
        }

        /* 검색 버튼 아이콘 */
        button {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translate(0, -20px);

          background: inherit;
          border: none;
          box-shadow: none;
          overflow: visible;
          cursor: pointer;

          i {
            width: 41px;
            height: 40px;
            line-height: 40px;
            display: block;

            background: url(${totalSearch}) no-repeat center / cover;
            white-space: nowrap;
          }
        }
      }

      /* 해시태그탭 */
      .hashTag {
        text-align: center;
        margin-top: 50px;
        color: #fff;

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          li {
            height: 50px;
            font-size: 24px;

            border: 2px solid rgba(255, 255, 255, 0.6);
            border-radius: 25px;

            padding: 0 25px;
            margin: 10px 5px;
            box-sizing: border-box;

            a {
              line-height: 50px;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

/** 헤더 스타일 */
const HeaderContainer = styled.header`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/** 사용자, 회원가입 아이콘 스타일 */
const UtilContainer = styled.div`
  width: 1280px;
  height: 41px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 16px;
  box-sizing: border-box;

  ul {
    display: flex;

    li {
      margin-right: 20px;

      img {
        width: 22px;
      }
    }
  }

  div {
    width: 60px;
    height: 26px;
    border-bottom: 1px solid black;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: bold;
    }

    img {
      width: 10px;
      height: 6px;
      cursor: pointer;
    }
  }
`;

/** 메인 네비게이션 스타일 */
const GnbContainer = styled.div`
  width: 1280px;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

      img {
        cursor: pointer;
      }

      a {
        position: relative;
        font-weight: bold;

        &:hover {
          color: #0054d1;
        }

        &::after {
          content: "";
          width: 8px;
          height: 8px;

          position: absolute;
          top: 24px;

          display: inline-block;
          margin-left: 7px;

          background-color: #ffd553;
          border-radius: 50%;

          opacity: 0;
          visibility: hidden;

          transform: translateY(20px);
          transition-duration: 0.3s;
        }

        &:hover::after {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .allMenuIcon {
          height: 20px;
        }

        .searchIcon {
          height: 24px;
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
`;

/** 메인 네비게이션 텍스트 스타일 */
const MenuArticle = styled(Link)`
  text-align: center;
  font-size: 26px;
  padding: 0 33px;
  line-height: 84px;
`;

const Header = () => {
  // 사이트맵
  const siteMap = useRef();

  // 검색 모달
  const searchModal = useRef();

  // 사이트맵 열기
  const showSiteMap = useCallback((e) => {
    siteMap.current.style.display = "block";
    // document.querySelector("body").style.overflow = "hidden";
  }, []);

  // 검색 모달 열기
  const showModal = useCallback((e) => {
    searchModal.current.style.display = "block";
  }, []);

  // 검색 모달 닫기
  const closeModal = useCallback((e) => {
    searchModal.current.style.display = "none";
  }, []);

  return (
    <>
      <SiteMap ref={siteMap} />

      <SearchModalDiv ref={searchModal}>
        <div className="popupBg">
          <div className="popup">
            <button type="button" className="modalCloseButton" onClick={closeModal}></button>

            <div className="radio">
              <span>
                <input type="radio" name="radio" id="radio1" defaultChecked="checked" />
                <label htmlFor="radio1">통합검색</label>
              </span>
              <span>
                <input type="radio" name="radio" id="radio2" />
                <label htmlFor="radio2">의료진 검색</label>
              </span>
              <span>
                <input type="radio" name="radio" id="radio3" />
                <label htmlFor="radio3">진료과 탐색</label>
              </span>
            </div>

            <div className="search">
              <input type="text" placeholder="검색어를 입력해주세요" title="검색어 입력"></input>
              <button>
                <i />
              </button>
            </div>

            <div className="hashTag">
              <ul>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #코로나
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #면회제한
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #오시는 길
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #비급여진료비
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #증명서발급
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #제중원
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #건강검진
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #입찰
                  </a>
                </li>
                <li>
                  <a href="/search/result?keyword=%EC%BD%94%EB%A1%9C%EB%82%98&m_site_cd=sev&language=ko" target="_black" rel="noopener noreferrer">
                    #채용
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SearchModalDiv>

      <HeaderContainer>
        <UtilContainer>
          <ul>
            <li>
              <Link to="/login">
                <img src={loginIcon} alt="login_icon" />
              </Link>
            </li>
            <li>
              <Link to="/join_way">
                <img src={joinIcon} alt="join_icon" />
              </Link>
            </li>
          </ul>
          <div>
            <span>KO</span>
            <img src={chevronIcon} />
          </div>
        </UtilContainer>

        <GnbContainer>
          <h1>
            <Link to="/">
              <img src={sevLogo} alt="header_logo" className="sevLogo" />
            </Link>
          </h1>
          <ul>
            <li>
              <MenuArticle to="/appointment_main">환자/보호자</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/cooperation/hospital.do">의료인</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/customer.do">공감 Story</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/drug.do">건강정보</MenuArticle>
            </li>
            <li>
              <img src={allMenuIcon} alt="all_menu_icon" className="allMenuIcon" onClick={showSiteMap} />
            </li>
            <li>
              <img src={searchIcon} alt="search_icon" className="searchIcon" onClick={showModal} />
            </li>
          </ul>
        </GnbContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
