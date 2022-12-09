/**
 * @ File Name: MysevMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-08 15:1:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import MyPageHeader from '../../components/MyPageHeader';

const Div = styled.article`
  .content {
    min-height: calc(100vh - 345px);
    min-width: 1025px;
    display: block;
    backGround: url(../img/mybg-pattern.png) no-repeat center top ;
    overflow: hidden;
  }
  .pageCont{
    overflow: hidden;
    padding: 40px 0 0;
  }

  .gridItem{
    float: left;
    width: calc(33% - 9px);
    height: 340px;
    border: 1px solid #e6e6e6;
    margin-bottom: 20px;
    margin-right: 12px;
    background-color: #fff;
    padding: 26px 30px 30px;
    box-sizing: border-box;
    &:first-child{
        background-color: #eef7fc;
    }
    &:nth-child(-n+3){
        /* background-color: red; */
        height: 155px;
        border: none;
    }
    &:nth-child(3) {
    background-color: transparent;
    ::after{clear: both;}
    }
  }
`;

const MysevMain = memo(() => {
  return (
    <Div>
      <MyPageHeader />
      <div className="content">
        <div className="pageCont">
            <div className="gridItem">
              <div className='titleWrap'>
                <span>주혜지님</span>
                <div className='btnCont'>
                  <button type='button' className="btn">개인정보수정</button>
                  <button type='button' className="btn">비밀번호변경</button>
                </div>
              </div>
              <div className='inputGroup'>
                <select className='formControl' title='병원등록번호'>
                  <option value='3840864' selected>세브란스병원:3840864</option>
                </select>
                <span className='inputAddon'>
                  <button type='button' className='editBtn'>
                    <i className='icoMypageEdit'></i>설정
                  </button>
                </span>
              </div>
            </div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </div>
      </div>
    </Div>
  );
});

export default MysevMain;
