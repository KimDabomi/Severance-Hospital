/**
 * @ File Name: NewsHomeCarousel.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-03
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
    position: relative;
    left: 0;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-slide{
    width: 407px;
    margin: 0 15px;
    display: block;
    float: left;
    height: 100%;
    min-height: 1px;
    background-color: pink;
  }

  .slick-dots {
    bottom: 20px;
    button {
      width: 10px;
      height: 10px;
      border: 2px solid $pt;
      border-radius: 50%;
      box-shadow: 1px 1px 3px rgba($bk, 0.6);
      &::before {
        display: none;
      }
    }

    .slick-active {
            button {
                background: $pt;
            }
        }
  }
`;

function NewsHomeNoticeCarousel() {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    dots: true,
  };

  return (
    <StyledSlider {...settings}>
      {/* 언론보도 */}
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>
      <article className="newsBox">
        <span className="newsCategory">카테고리</span>
        <strong className="newsContentTitle">뉴스제목</strong>
        <span className="newsDate">2022-22-22</span>
      </article>

      {/* <ul className='slick-dots'>
        <li className='slick-active'>
          <button type='button'></button>
        </li>
        <li className='slick-active'>
          <button type='button'></button>
        </li>
        <li className='slick-active'>
          <button type='button'></button>
        </li>
        <li className='slick-active'>
          <button type='button'></button>
        </li>
      </ul> */}
    </StyledSlider>
  );
}

export default NewsHomeNoticeCarousel;
