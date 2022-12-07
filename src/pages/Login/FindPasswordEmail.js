/**
 * @ File Name: FindPasswordEmail.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-07 17:30
 * @ Description: 비밀번호 찾기 이메일 인증 페이지
 */

 import React, { memo } from "react";
 import { useNavigate } from "react-router-dom";
 import styled from "styled-components";
 import LoginHeader from "../../components/LoginHeader";
 import LoginFooter from "../../components/LoginFooter";
 import bg from "../../assets/img/bg-pattern.png";
import dropdown from "../../assets/img/ico-chevron-down@2x.png";
 
 const Container = styled.div`
   position: relative;
   .content {
     background: url(${bg}) no-repeat center / cover;
     height: 700px;
     hr {
       border: 0;
       border-bottom: 1px solid #e6e6e6;
       width: 1050px;
       margin: auto;
     }
   }
   h1 {
     text-align: center;
     padding: 70px 0;
     font-size: 40px;
     font-weight: bold;
   }
 `;
 
 const FindId = memo(() => {
   const navigate = useNavigate();
 
   return (
     <Container>
       <LoginHeader />
       <div className="content">
         <h1>비밀번호 찾기</h1>
         
       </div>
       <LoginFooter />
     </Container>
   );
 });
 
 export default FindId;
 