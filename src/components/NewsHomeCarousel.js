/**
 * @ File Name: NewsHomeCarousel.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-08
 * @ Description: 뉴스 메인 페이지 슬라이드 컴포넌트
 */

/** import */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/** 슬라이드 전체 박스 스타일 */
// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    justify-content: space-between;
    margin: 0;
   
  }
  .slick-slide {
    /* float: left; */
    height: 100%;
    width: 407px !important;
    min-height: 1px;
  }
  .slick-dots {
    width: 100%;
    display: flex !important;
    justify-content: center;
    margin: -3.5px;
    /* padding-top: 30px; */

    li{
      display: list-item;
      text-align: center;
      margin: 0;
    }

    //비활성화된 도트
    button {
      margin: 0;
      padding: 3px 3.5px;
      margin-top: 30px;
      display: block;
      width: 11px;
      height: 11px;
      background-color: #c2c2c2;
      border-radius: 6px;
      &::before {
        display: none;
      }
    }
    //활성화된 도트
    .slick-active{
      margin-right: 15px;
      button{
        margin: 0;
        margin-top: 30px;
        width: 30px;
        background-color: #0094fb;
      }
    }
  }

  .newsBox {
    border: 1px solid #e6e6e6;
    width: 407px !important;
    height: 204px !important;
    margin-top: 20px;

    &:hover {
      border-color: #0094fb;
    }
  }

  .newsCategory {
    background-color: #0094fb !important;
  }

`;

function NewsHomeCarousel() {
  // 슬라이드 설정
  const settings = {
    dots: true /* 아래점 */,
    // rows: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    slidesPerRow: 2, //보여질 행의 수
  };

  return (
    <div>
    <StyledSlider {...settings} className='slick-slider'>
      {/* 언론보도 */}
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">언론보도</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
    </StyledSlider>
    <Link className="btnMoreLink media" to="/news/media.do">더보기</Link>
    </div>
  );
}

export default NewsHomeCarousel;
