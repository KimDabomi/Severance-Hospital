/**
 * @ File Name: SiteMap.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-06 15:02:00
 * @ Description: 사이트맵 표시
 */

import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import BgAllmenu from "../../assets/img/bg-allmenu.png";

/** 사이트맵 스타일 */
const AllMenu = styled.div`
  width: 100%;
  height: 100vh;
`;

/** 사이트맵 배경 스타일 */
const BackgroundDiv = styled.div`
  height: 100vh;
  margin: 0 auto;
  ${`backGround: #0070e4 url(${BgAllmenu}) no-repeat center;`}
  background-position-y: -180px;

  a {
    color: white;
  }
`;

/** 메뉴 카테고리 박스 스타일 */
const SiteMapUl = styled.ul`
  width: 1310px;
  margin: 0 auto;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

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
`;

/** 메뉴 박스 스타일 */
const MenuUl = styled.ul`
  .menuTitle {
    a {
      font-size: 24px;
      line-height: 24px;
    }
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

const SiteMap = memo(() => {
  return (
    <AllMenu>
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
    </AllMenu>
  );
});

export default SiteMap;
