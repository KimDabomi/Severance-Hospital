import React from "react";
import styled from "styled-components";

/** 로고, 아이콘, 이미지 참조 */
import sevLogo from "../assets/img/sev_logo@2x.png";
import loginIcon from "../assets/img/ico-top-login@2x.png";
import joinIcon from "../assets/img/ico-top-join@2x.png";
import allMenuIcon from "../assets/img/ico-allmenu.png";
import searchIcon from "../assets/img/ico-search.png";

/** 헤더 스타일 블럭 */
const HeaderContainer = styled.header`
  width: 1280px;
  height: 125px;
  margin: 0 auto;
`;

/** 사용자, 회원가입 아이콘 스타일 블럭 */
const UtilContainer = styled.div`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  box-sizing: border-box;

  ul {
    display: flex;

    li {
      img {
        width: 26px;
        padding-right: 20px;
      }
    }
  }
`;

/** 메인 네비게이션 스타일 블럭 */
const GnbContainer = styled.div`
  width: 100%;
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
        text-align: center;
        font-size: 26px;
        padding: 0 33px;
        line-height: 84px;

        img {
        }
        .allMenuIcon {
          height: 20px;
        }
        .searchIcon {
          height: 24px;
        }
      }
      &:nth-child(6) {
        margin-left: 20px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <UtilContainer>
        <ul>
          <li>
            <img src={loginIcon} alt="login_icon" />
          </li>
          <li>
            <img src={joinIcon} alt="join_icon" />
          </li>
        </ul>
      </UtilContainer>

      <GnbContainer>
        <h1>
          <img src={sevLogo} alt="header_logo" className="sevLogo" />
        </h1>
        <ul>
          <li>
            <a>환자/보호자</a>
          </li>
          <li>
            <a>의료인</a>
          </li>
          <li>
            <a>공감 Story</a>
          </li>
          <li>
            <a>건강정보</a>
          </li>
          <li>
            <img src={allMenuIcon} alt="all_menu_icon" className="allMenuIcon" />
          </li>
          <li>
            <img src={searchIcon} alt="search_icon" className="searchIcon" />
          </li>
        </ul>
      </GnbContainer>
    </HeaderContainer>
  );
};

export default Header;
