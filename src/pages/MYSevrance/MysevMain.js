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
    background: url(../img/mybg-pattern.png) no-repeat center top;
    overflow: hidden;
  }
  .pageCont {
    overflow: hidden;
    padding: 40px 0 0;
  }

  //그리드
  .gridItem {
    float: left;
    width: calc(33% - 9px);
    height: 340px;
    border: 1px solid #e6e6e6;
    margin-bottom: 20px;
    margin-right: 12px;
    background-color: #fff;
    padding: 26px 30px 30px;
    box-sizing: border-box;
    &:first-child {
      background-color: #eef7fc;
    }
    &:nth-child(-n + 3) {
      /* background-color: red; */
      height: 155px;
      border: none;
    }
    &:nth-child(3) {
      background-color: transparent;
      ::after {
        clear: both;
      }
    }
  }

  .titleWrap {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    color: #333;

    span {
      font-size: 24px;
      font-family: 'NanumSquare', 'malgungothic', 'Helvetica Neue', Arial,
        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      line-height: 38px;
      font-weight: bold;
    }
  }
  //개인정보 개인정보수정,비밀번호변경 버튼
  .btnCont {
    margin-top: 5px;
    .btn {
      &:nth-child(2) {
        margin-left: 8px;
      }
      color: #333;
      border: 1px solid #959595;
      background-color: #fff;
      min-width: 65px;
      height: 30px;
      padding: 0 10px;
      font-size: 14px;
      border-radius: 3px;
      box-sizing: border-box;
      align-items: center;
      overflow: hidden;
    }
  }
  //폼,설정버튼
  .inputGroup {
    display: flex;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'NanumGothic',
      'malgungothic', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

    .inputAddon {
      padding-left: 10px;
      vertical-align: middle;
      .editBtn {
        color: #fff;
        background-color: #666;
        width: 104.09px;
        height: 45px;
        padding: 0 24px;
        font-size: 16px;
        border: none;
        border-radius: 3px;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        .icoMypageEdit {
          width: 19px;
          height: 19px;
          line-height: 19px;
          background: url(../img/ico-mypage-edit@2x.png);
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          vertical-align: middle;
          overflow: hidden;
          text-indent: -9999px;
          margin-right: 5px;
        }
      }
    }
    //진료예약, 검진예약
    p {
      margin: 4px 0;
    }
  }
`;

const MysevMain = memo(() => {
  return (
    <Div>
      <MyPageHeader />
      <div className="content">
        <div className="pageCont">
          {/* 개인정보 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>주혜지님</span>
              <div className="btnCont">
                <button type="button" className="btn">
                  개인정보수정
                </button>
                <button type="button" className="btn">
                  비밀번호변경
                </button>
              </div>
            </div>
            <div className="inputGroup">
              <select className="formControl" title="병원등록번호">
                <option value="3840864" defaultValue>
                  세브란스병원: 3840864
                </option>
              </select>
              <span className="inputAddon">
                <button type="button" className="editBtn">
                  <i className="icoMypageEdit"></i>설정
                </button>
              </span>
            </div>
          </div>
          {/* 진료예약 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>진료예약</span>
            </div>
            <div className="inputGroup">
              <p>예약된 진료가 없습니다.</p>
            </div>
          </div>
          {/* 검진예약 */}
          <div className="gridItem">
            <div className="titleWrap">
              <span>검진예약</span>
            </div>
            <div className="inputGroup">
              <p>예약된 검사가 없습니다.</p>
            </div>
          </div>
          {/* 나의 건강체크 */}
          <div className="gridItem">
          <div className="titleWrap">
              <span>나의 건강체크</span>
              <div className="btnCont">
                <button type="button" className="btn">
                  Today 등록
                </button>
              </div>
            </div>
          </div>
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
