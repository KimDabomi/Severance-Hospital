/**
 * @ File Name: NewsView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-01 15:1:00
 * @ Description: 뉴스 하위페이지 언론보도 페이지
 */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';

const NewsView = memo(() => {
  return (
    <div>
      <Header />
      <div className='bgAll'>
      <div className="pageCont">
        <h1 className="pageTitle">언론보도</h1>
        {/* 검색form */}
        <form>
          <div>
            <div className="searchBox">
              <input
                type="text"
                name="itemName"
                placeholder="검색어를 입력해 주세요"
                className="formControl"
              />
              <span>
                <button type="submit" className="btnSearch">
                  <i></i>
                </button>
              </span>
            </div>
          </div>
        </form>

        {/* 검색결과 */}
        <div className="bbsList">
          <div className="bbsItem">
            <Link className="inner">
              <div className="bbssubjectArea">
                <strong>title</strong>
              </div>
              <div className="infoArea">
                <span className="date">2022-11-30</span>
              </div>
            </Link>
          </div>
        </div>

				{/* 더보기버튼 */}
				<div className="buttonContColumn">
          <Link className="btnMore">더보기</Link>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
});

export default NewsView;
