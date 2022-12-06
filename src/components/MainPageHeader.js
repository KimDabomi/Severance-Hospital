/**
 * @ File Name: MainPageHeader.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: 메인 페이지 header
 */

import React, { useCallback, useState } from "react";
import styled from "styled-components";

/** 링크 */
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

/** 컴포넌트 참조 */
import SiteMap from "./SiteMap";

/** 로고, 아이콘, 이미지 참조 */
import sevLogo from "../assets/img/sev_logo@2x.png";
import loginIcon from "../assets/img/ico-top-login@2x.png";
import joinIcon from "../assets/img/ico-top-join@2x.png";
import allMenuIcon from "../assets/img/ico-allmenu.png";
import searchIcon from "../assets/img/ico-search.png";
import chevronIcon from "../assets/img/ico-chevron-down-xs-bold@2x.png";

// 사이트맵 이미지 참조
import BgAllmenu from "../assets/img/bg-allmenu.png";

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
      a {
        font-weight: bold;
        img {
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

/** 사이트맵 스타일 */
/** 사이트맵 배경 스타일 */
const BackgroundDiv = styled.div`
  min-width: 1280px;
  height: 100vh;
  ${`backGround: orange url(${BgAllmenu}) no-repeat center;`}
  // #0070e4

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2000;
  overflow: hidden !important;

  a {
    color: white;
  }
`;

/** 메뉴 카테고리 박스 스타일 */
const SiteMapUl = styled.ul`
  width: 1310px;
  margin: 0 auto;
  background-color: blue;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

/** 메뉴 카테고리 박스 스타일 */
const MenuCategoryLi = styled.li`
  width: 25%;

  margin-top: 30px;
  padding: 30px 0 0 30px;
  box-sizing: border-box;
  text-align: center;
`;

/** 메뉴 박스 스타일 */
const MenuUl = styled.ul`
  .menuTitle {
    font-size: 24px;
    line-height: 24px;
  }

  a {
    font-size: 22px;
    line-height: 36px;
  }
`;

/** 메뉴 타이틀, 하위 메뉴 스타일 */
const MenuLi = styled.li`
  font-size: 16px;
  line-height: 22px;
`;

const Header = () => {
  const [ onAllMenu, setOnAllMenu ]= useState(false);

  console.log(onAllMenu);

  const onAllMenuClick = (props) => {
    console.log(props);
    setOnAllMenu(props);
  };

  return (
    <>
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
              <MenuArticle to="/">환자/보호자</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/">의료인</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/customer.do">공감 Story</MenuArticle>
            </li>
            <li>
              <MenuArticle to="/drug.do">건강정보</MenuArticle>
            </li>
            <li>
              <a
                onClick={() => {
                  onAllMenuClick(true);
                }}
              >
                <img src={allMenuIcon} alt="all_menu_icon" className="allMenuIcon" />
              </a>
            </li>
            <li>
              <a>
                <img src={searchIcon} alt="search_icon" className="searchIcon" />
              </a>
            </li>
          </ul>
        </GnbContainer>
      </HeaderContainer>

      {onAllMenu ? (
        <BackgroundDiv>
          <SiteMapUl>
            {/* 1 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">의료진 찾기</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 2 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">진료과 찾기</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">진료과</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 3 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">환자/보호자</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">예약</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">결과</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">증명서 및 의무기록</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">이용안내</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">오시는 길</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 4 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">의료인</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">진료의뢰</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 5 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">공감 Story</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">환자 이야기</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">의료진 이야기</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">고객의 소리</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 6 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">건강정보</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 7 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">병원소개</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">병원개요</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">병원장 인사말</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">오시는 길</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>

            {/* 8 */}
            <MenuCategoryLi>
              <MenuUl>
                <MenuLi className="menuTitle">
                  <Link to="/">뉴스</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">뉴스 홈</Link>
                </MenuLi>
                <MenuLi>
                  <Link to="/">공지/소식</Link>
                </MenuLi>
              </MenuUl>
            </MenuCategoryLi>
          </SiteMapUl>
        </BackgroundDiv>
      ) : null}
    </>
  );
};

export default Header;
