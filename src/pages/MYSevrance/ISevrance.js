/**
 * @ File Name: ISevrance.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-09 17:54:00
 * @ Description: 나의 작성글 페이지
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from '../../components/MyPageHeader';
import mypattern from '../../assets/img/mybg-pattern.png'

const Div = styled.article`
  .content {
    min-height: calc(100vh - 345px);
    min-width: 1025px;
    display: block;
    ${`backGround: url(${mypattern}) no-repeat center top;`}
    overflow: hidden;
  }
  .pageCont {
    overflow: hidden;
    padding: 40px 0 0;
    position: relative;
  }
`;

const ISevrance = memo(() => {
  return (
    <Div>
      <MyPageHeader />
      <div className="content">
        <div className="pageCont"></div>
      </div>
    </Div>
  );
});

export default ISevrance;
