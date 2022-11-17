import React from 'react';
import styled from 'styled-components';

import sevLogo from '../assets/img/sev_logo@2x.png';

// header 스타일 블럭
const HeaderContainer = styled.header`
  width: 1280px;
  margin: 0 auto;

`;

// util 스타일 블럭
const UtilContainer = styled.div`
  height: 41px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
  }
`;

// gnb 스타일 블럭
const GnbContainer = styled.div`
  height: 84px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;

  img {
    width: 231px;
    height: 40px;
  }

  ul {
    display: flex;

    li {
      height: 84px;

      a {
        text-align: center;
        line-height: 84px;
        font-size: 26px;
      }
    }
  }
`;

const header = () => {
  return (
    <HeaderContainer>
    <UtilContainer>
      <ul>
        <li>
          <a>login icon</a>
        </li>
        <li>
          <a>join icon</a>
        </li>
      </ul>
    </UtilContainer>
    <GnbContainer>
      <h1><img src={sevLogo} alt="header_logo" /></h1>
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
          <a>all menu</a>
        </li>
        <li>
          <a>search</a>
        </li>
      </ul>
    </GnbContainer>
    </HeaderContainer>
  )
}

export default header
