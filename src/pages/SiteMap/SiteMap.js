/**
 * @ File Name: SiteMap.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-06 15:02:00
 * @ Description: 사이트맵 표시
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** 이미지 참조 */
import BgAllmenu from "../../assets/img/bg-allmenu.png";
import CloseWhite from "../../assets/img/ico-close-white@2x.png";

/** 사이트맵 스타일 */
const AllMenu = styled.div`
  width: 100%;
`;

/** 사이트맵 배경 스타일 */
const BackgroundDiv = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #0070e4 url(${BgAllmenu}) no-repeat center;
  background-position-y: -180px;

  position: static;
  top: 0;

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
    padding-bottom: 20px;
    line-height: 1;
    border-bottom: 1px solid #127eef;
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
  padding-top: 20px;
`;

/** 뒤로가기 버튼 스타일 */
const Back = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 30px;
  right: 0;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SiteMap = memo(() => {
  const navigate = useNavigate();

  return (
    <AllMenu>
      <BackgroundDiv>
        <SiteMapUl>
          {/* 1 */}
          <MenuCategoryLi>
            <MenuUl>
              <MenuLi className="menuTitle">
                <Link to="/staff">의료진 찾기</Link>
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
                <ul>
                  <li>진료예약</li>
                  <li>예약현황</li>
                </ul>
              </MenuLi>
              <MenuLi>
                <Link to="/">결과</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/">이용안내</Link>
                <ul>
                  <li>병원시설 안내</li>
                  <li>진료안내</li>
                  <li>병원생활 안내</li>
                </ul>
              </MenuLi>
              <MenuLi>
                <Link to="/">오시는 길</Link>
                <ul>
                  <li>위치 및 오시는 방법</li>
                  <li>주차안내</li>
                </ul>
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
                <ul>
                  <li>협력병원 현황</li>
                  <li>협진병, 의원 현황</li>
                </ul>
              </MenuLi>
            </MenuUl>
            <Back onClick={() => navigate(-1)}>
              <img src={CloseWhite} />
            </Back>
          </MenuCategoryLi>

          {/* 5 */}
          <MenuCategoryLi>
            <MenuUl>
              <MenuLi className="menuTitle">
                <Link to="/customer.do">고객의 소리</Link>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>

          {/* 6 */}
          <MenuCategoryLi>
            <MenuUl>
              <MenuLi className="menuTitle">
                <Link to="/drug.do">건강정보</Link>
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
                <Link to="/">오시는 길</Link>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>

          {/* 8 */}
          <MenuCategoryLi>
            <MenuUl>
              <MenuLi className="menuTitle">
                <Link to="/news">뉴스</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/news">뉴스 홈</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/news/notice.do">공지/소식</Link>
                <ul>
                  <li>공지사항</li>
                  <li>언론보도</li>
                </ul>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>
        </SiteMapUl>
      </BackgroundDiv>
    </AllMenu>
  );
});

export default SiteMap;
