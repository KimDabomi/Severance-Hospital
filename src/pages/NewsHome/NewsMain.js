/**
 * @ File Name: NewsMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-03
 * @ Description: 뉴스 메인 페이지
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import corona from '../../assets/img/corona.jpg';

import NewsHomeCarousel from '../../components/NewsHomeCarousel';
import NewsHomeNoticeCarousel from '../../components/NewsHomeNoticeCarousel';

const NewsMain = memo(() => {
  return (
    <div>
      <Header />
      <div className="pageCont">
        <div className="bgWhiteBlue">
          <div className="newsTopSlider">
            <img src={corona} alt="코로나 관련 진료 안내"></img>
            <div className="textArea">
              <h4>코로나 관련 진료 안내</h4>
              <p>
                성인 안심진료소 운영시간평일 : 08:30-11:30, 13:00-15:30 토요일 :
                08:30-11:30 공휴일 휴진 장소 : 본관 3층 출입구 앞(건물 외부)
                소아 안심진료소(18세 미만) 운영시간평일: 9:00-11:30, 13:30-15:30
                토요일 : 9:00-11:30 공휴일 휴진 장소: 어린이병원 1층
                정문(회전문) 예진데스크로 내원
              </p>
              <Link>상세보기 &gt;</Link>
            </div>
          </div>
        </div>

        {/* slick-slide */}
        <div className="wideWrap">
          <NewsHomeNoticeCarousel />
        </div>
        <div className="wideWrap">
          <NewsHomeCarousel />
        </div>
      </div>

      {/* 각 페이지 링크로 이동 */}
      {/* <div className="iconListBox">
        <ul className='iconSlider'>
          <li>
            <Link>
            <i className='icoNews'></i>
            <span className='textIcon'>언론보도</span>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="snsNewsWrap" style={{ backgroundColor: '#F6F6F6' }}>
        <h1 className="pageTitle">SNS소식</h1>
        <div className="tabContentCont pageCont">
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">페이스북</h3>
            <div className="contentBox">{/* 동영상 및 글 */}content</div>
          </div>
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">유튜브</h3>
            <div className="contentBox">{/* 동영상 및 글 */}content</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default NewsMain;
