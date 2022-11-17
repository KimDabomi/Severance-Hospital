import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.footer`
  width: 1280px;
  height: 160px;
  border: 1px solid black;
  margin: 0 auto;

  ul {
    display: flex;
    margin: 35px 0 24px;

    li {
      margin-right: 30px;
    }
  }
`;

const header = () => {
  return (
    <HeaderContainer>
      <ul>
        <li>
          <a>이용약관</a>
        </li>
        <li>
          <a>개인정보처리방침</a>
        </li>
        <li>
          <a>고객의 소리</a>
        </li>
        <li>
          <a>병원소개</a>
        </li>
      </ul>
      <address>03722 서울특별시 서대문구 연세로 50-1</address>
      <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
    </HeaderContainer>
  );
};

export default header;
