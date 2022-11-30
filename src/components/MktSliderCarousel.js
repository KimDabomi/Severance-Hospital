/**
 * @ File Name: MktSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-30 15:02:00
 * @ Description: Mkt Banner Slick 슬라이드
 */

/** import */
import React from "react";
import styled from "styled-components";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 이미지 참조 */
// Mkt banner 슬라이드
import first from "../assets/img/img_main_banner01.png";
import second from "../assets/img/img_main_banner02.png";

// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 1006px;
  height: 417px;
  margin: 0 auto;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }

  .slick-dots {
    position: absolute;
    bottom: 20px;
  }

  /* 비활성화된 동그라미 */
  .slick-dots li button::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slick-dots li button::before,
  .slick-dots li.slick-active button::before {
    display: none;
  }

  /* 동그라미 버튼 */
  .slick-dots li button {
    width: 12px;
    height: 12px;
    margin: 0;
  }

  /* 동그라미 리스트 박스 */
  .slick-dots li {
    width: 12px;
    height: 12px;
  }

  /* 활성화된 동그라미 리스트 박스 */
  .slick-dots li.slick-active {
    width: 30px;
    height: 12px;
    border-radius: 6px;
  }

  /* 활성화된 동그라미 */
  .slick-dots li.slick-active button::after {
    content: "";
    display: block;
    width: 30px;
    height: 12px;
    border-radius: 6px;
    background-color: #ffd553;
  }

  .mktBannerGroup {
    width: 100%;
    height: 100%;
    display: flex;
    
    .mktBannerList {
      width: 229px;
      height: 100%;

      .mktBannerLink {
        display: block;
        width: 100%;
        height: 100%;
        img {
          display: block;
          width: 229px;
          height: 417px;
        }
      }
    }
  }
`;

function InfoSliderCarousel() {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    fade: true,
    speed: 1000,
    slideToShow: 4,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true
  };

  return (
    <StyledSlider {...settings}>
      <ul className="mktBannerGroup">
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={first} />
          </a>
        </li>
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={second} />
          </a>
        </li>
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={second} />
          </a>
        </li>
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={second} />
          </a>
        </li>
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={second} />
          </a>
        </li>
        <li className="mktBannerList">
          <a className="mktBannerLink">
            <img src={second} />
          </a>
        </li>
      </ul>
    </StyledSlider>
  );
}

export default InfoSliderCarousel;
