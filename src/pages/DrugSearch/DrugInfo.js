/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-28 15:1:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';

const DrugInfo = memo(() => {
  return (
    <div>
      <Header />
      <div className="pageCont">
        <h1 className="pageTitle">의약품 정보</h1>
        <hr />
        <div className="subjectArea">
          <h3 className="subject">가나릴정</h3>
        </div>
        <div className="extendField">
          <dl>
            <dt>제조(수입) 업체명</dt>
            <dd>영풍제약(주)</dd>
          </dl>
        </div>
        {/* 게시물 본문 */}
        <div className="articleBody">
          {/* 이미지 */}
          <div className="drugImageSlider">
            {/* <img className='item'></img> */}
          </div>
          <h4 className="pageSubtitle">효능효과</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
          <h4 className="pageSubtitle">용법용량</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
          <table></table>
          <h4 className="pageSubtitle">사용상 주의사항</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
        </div>

        <div className="buttonCont">
          <Link className="buttonBlue" to="/drug.do">
            목록
          </Link>
          <button className="buttonWhite marginleft" type="button">
            공유
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default DrugInfo;
