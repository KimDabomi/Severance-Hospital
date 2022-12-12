/**
 * @ File Name: ChangePassward.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-12 
 * @ Description: 비밀번호변경 페이지
 */

import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import MyPageHeader from "../../components/MyPageHeader";
import LoginFooter from "../../components/LoginFooter";
import styled from "styled-components";


const Container = styled.div`
  width: 1280px;
  margin: auto;
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }

`;

const DetailsEdit = memo(() => {
  const navigate = useNavigate();

  return (
    <Container>
      <MyPageHeader />
      <div className='bgAll'>
        <h1>비밀번호변경</h1>
      </div>
      <LoginFooter />
    </Container>
  );
});

export default DetailsEdit;