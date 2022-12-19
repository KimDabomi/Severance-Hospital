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
  height: 100vh;
  position: relative;
`;

/** 사이트맵 배경 스타일 */
const BackgroundDiv = styled.div`
  min-width: 1280px;
  height: 100vh;
  margin: 0 auto;

  background: #0070e4 url(${BgAllmenu}) no-repeat center;
  background-position-y: -180px;

  overflow-y: scroll;

  position: sticky;
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
  left: -15px;
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
  padding-top: 5px;
`;

/** 메뉴 타이틀 스타일 */
const MenuTitleDiv = styled.div`
  padding-bottom: 20px;
  line-height: 1;
  border-bottom: 1px solid #127eef;

  a {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
  }
`;

/** 하위 메뉴 스타일 */
const MenuLi = styled.li`
  margin-top: 20px;

  a {
    font-size: 22px;
    line-height: 36px;
  }
`;

/** 하위 서브 메뉴 스타일 */
const SubMenuUl = styled.ul``;

/** 하위 서브 메뉴 스타일 */
const SubMenuLi = styled.li`
  color: white;
  font-size: 16px;
  line-height: 22px;
  padding: 4px 20px 0;
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
            <MenuTitleDiv>
              <Link to="/staff">의료진 찾기</Link>
            </MenuTitleDiv>
          </MenuCategoryLi>

          {/* 2 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/">진료과 찾기</Link>
            </MenuTitleDiv>
            <MenuUl>
              <MenuLi>
                <Link to="/">진료과</Link>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>

          {/* 3 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/">환자/보호자</Link>
            </MenuTitleDiv>
            <MenuUl>
              <MenuLi>
                <Link to="/appointment_main">예약</Link>
                <SubMenuUl>
                  <SubMenuLi>진료예약</SubMenuLi>
                  <SubMenuLi>예약현황</SubMenuLi>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <Link to="/">결과</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/guide/number.do">이용안내</Link>
                <SubMenuUl>
                  <Link to="/guide/facility.do">
                    <SubMenuLi>병원시설 안내</SubMenuLi>
                  </Link>
                  <SubMenuLi>진료안내</SubMenuLi>
                  <Link to="/guide/outpatient_info">
                    <SubMenuLi>외래이용 안내</SubMenuLi>
                  </Link>
                  <Link to="/guide/hospitalization.do">
                    <SubMenuLi>입원생활 안내</SubMenuLi>
                  </Link>
                  <Link to="/guide/operating-room.do">
                    <SubMenuLi>수술실 이용 안내</SubMenuLi>
                  </Link>
                  <Link to="/guide/unsupported">
                    <SubMenuLi>비급여진료비 안내</SubMenuLi>
                  </Link>
                </SubMenuUl>
              </MenuLi>
              <MenuLi>
                <Link to="/map.do">오시는 길</Link>
                <SubMenuUl>
                  <SubMenuLi>위치 및 오시는 방법</SubMenuLi>
                  <SubMenuLi>주차안내</SubMenuLi>
                </SubMenuUl>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>

          {/* 4 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/cooperation/hospital.do">의료인</Link>
            </MenuTitleDiv>
            <MenuUl>
              <MenuLi>
                <Link to="/cooperation/hospital.do">진료의뢰</Link>
                <SubMenuUl>
                  <Link to="/cooperation/hospital.do">
                    <SubMenuLi>협력병원 현황</SubMenuLi>
                  </Link>
                  <Link to="/cooperation/doctor.do">
                    <SubMenuLi>협진병, 의원 현황</SubMenuLi>
                  </Link>
                </SubMenuUl>
              </MenuLi>
            </MenuUl>
            <Back onClick={() => navigate(-1)}>
              <img src={CloseWhite} alt="닫기 버튼" />
            </Back>
          </MenuCategoryLi>

          {/* 5 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/customer.do">고객의 소리</Link>
            </MenuTitleDiv>
            <MenuUl></MenuUl>
          </MenuCategoryLi>

          {/* 6 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/drug.do">건강정보</Link>
            </MenuTitleDiv>
            <MenuUl></MenuUl>
          </MenuCategoryLi>

          {/* 7 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/about_sev">병원소개</Link>
            </MenuTitleDiv>
            <MenuUl>
              <MenuLi>
                <Link to="/introduction">병원개요</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/map.do">오시는 길</Link>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>

          {/* 8 */}
          <MenuCategoryLi>
            <MenuTitleDiv>
              <Link to="/news">뉴스</Link>
            </MenuTitleDiv>
            <MenuUl>
              <MenuLi>
                <Link to="/news">뉴스 홈</Link>
              </MenuLi>
              <MenuLi>
                <Link to="/news/notice.do">공지/소식</Link>
                <SubMenuUl>
                  <SubMenuLi>공지사항</SubMenuLi>
                  <SubMenuLi>언론보도</SubMenuLi>
                </SubMenuUl>
              </MenuLi>
            </MenuUl>
          </MenuCategoryLi>
        </SiteMapUl>
      </BackgroundDiv>
    </AllMenu>
  );
});

export default SiteMap;
