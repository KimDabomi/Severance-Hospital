/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-28 15:1:00
 * @ Description: 의약품 검색 약정보로찾기 탭
 */

import React, { memo, useCallback } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
const DrugCont = styled.div`

`;

const TabInfo = memo(() => {
  /** 닫기버튼 눌렸을 때 */
  const closeClick = useCallback((e) =>{
    document.querySelector('.popUpCont').style.display='none';
  })

  return (
    <DrugCont>
      <form>
        <fieldset>
          <div>
            <div className="searchBox">
              <input
                type="text"
                name="itemName"
                placeholder="제품명 및 성분을 입력하세요."
                className="formControl"
              />
              <span>
                <button type="submit" className="btnSearch">
                  <i></i>
                </button>
              </span>
            </div>
          </div>
        </fieldset>
      </form>
      {/* 검색결과없을 때 */}
      <div className="nodata">
        <i className="nodataIcon"></i>
        <p>선택한 조건에 맞는 의약품 검색결과가 없습니다.</p>
      </div>

      {/* 검색 결과 표시 (최대12개)*/}
      <div>
        <ul className="drugListCont">
          <li className="drugList">
            <Link className="viewLink">
              검색결과 약 이름
            </Link>
          </li>
          <li className="drugList">
            <Link className="viewLink">
              검색결과 약 이름
            </Link>
          </li>
        </ul>

        {/* 페이지가 2페이지 이상일 경우 */}
        <div className="buttonContColumn">
          <Link className="btnMore">더보기</Link>
        </div>
      </div>

      {/* 유효성검사 알람 팝업창 */}
      <div className="popUpCont">
        <div className="dimed"></div>
        <div className="popUp">
          <div className='alert'></div>
          <div className='closeBtnCont'>
            <button type="button" className='closeBtn' onClick={closeClick}>닫기</button>
          </div>
        </div>
      </div>
    </DrugCont>
  );
});

export default TabInfo;
