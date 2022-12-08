/**
 * @ File Name: UtilArea.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-08 18:1:00
 * @ Description: utilArea 헤더 위에 파란색 컴포넌트
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import logoutimg from '../assets/img/ico-logout-white.png';

const Div = styled.div`
  height: 40px;
  position: relative;
  background-color: #0054d1;
  color: #fff;
  font-size: 15px;
  .utilArea{
    max-width: 1280px;
    margin: auto;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    span{line-height:40px;}
    a{
      display: inline-block;
      color: #fff;
      font-size: 15px;
      line-height:40px;
    }
    #pad{
      padding: 0 10px;
    }
    .icoLogout{
      line-height:40px !important;
      margin-top:7px; 
      margin-right: 7px;
    }
  }
`;

const UtilArea = memo(() => {
    return (
        <Div>
            <div className='utilArea'>
              <span><strong>userid</strong>님 반갑습니다.</span>
              <span id='pad'>&nbsp;|&nbsp;</span>
              <i className='icoLogout'></i>
              <Link to=''>
                로그아웃
              </Link>
            </div>
        </Div>
    );
});

export default UtilArea;