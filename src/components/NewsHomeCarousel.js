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
const StyledSlider = styled(Slider)``;

function NewsHomeCarousel() {
  // 슬라이드 설정
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <StyledSlider {...settings} className="wideWrap">
      {/* 공지사항 */}
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
    </StyledSlider>
  );
}

export default NewsHomeCarousel;
