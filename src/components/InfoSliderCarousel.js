/**
 * @ File Name: InfoSliderCarousel.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-26 15:02:00
 * @ Description: Slick 슬라이드
 */

/** import */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 이미지 참조 */
// 더보기 버튼 이미지
import Plus from "../assets/img/ico-plus-sm-lightgray@2x.png";

/** 슬라이드 전체 박스 스타일 */
const SlideContainer = styled.div`
  width: 260px;
  height: 173px;
  background-color: white;
  margin-bottom: 18.5px;
  position: relative;
`;

// 슬라이드 영역 스타일
const StyledSlider = styled(Slider)`
  width: 260px;
  height: 173px;
  position: relative;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  /* .slick-slide div {
    cursor: pointer;
  } */

  // 슬라이드 컨텐츠 박스
  .postBox {
    width: 260px;
    height: 173px;
    a {
      display: block;
      width: 260px;
      height: auto;
      padding: 20px 15px 20px 20px;
      box-sizing: border-box;

      .category {
        font-size: 14px;
        color: #0094fb;
      }

      .content {
        font-size: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
        max-height: 81px;
        line-height: 24px;
        text-overflow: ellipsis;
        overflow: hidden;

        margin-top: 3px;
        font-weight: bold;
      }
    }
  }
`;

// 앞으로가기 버튼 스타일
// const NextButton = styled.div`
//   width: 28px;
//   height: 28px;

//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translate(-50%);
//   z-index: 100;

//   background: #fff url(./img/ico-chevron-right-sm-lightgray@2x.png) no-repeat center / cover;
//   background-size: 8px 15px;

//   border: 1px solid #eee;
//   box-sizing: border-box;

//   overflow: hidden;

//   cursor: pointer;
// `;

// // 뒤로가기 버튼 스타일
// const PrevButton = styled.div`
//   width: 28px;
//   height: 28px;

//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translate(-150%);
//   z-index: 100;

//   background: #fff url(./img/ico-chevron-left-sm-lightgray@2x.png) no-repeat center / cover;
//   background-size: 8px 15px;

//   box-sizing: border-box;
//   border: 1px solid #eee;

//   overflow: hidden;

//   cursor: pointer;
// `;

// 더보기 버튼 스타일
const PlusButton = styled.div`
  width: 28px;
  height: 28px;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(50%);
  z-index: 100;

  ${`backGround: #fff url(${Plus}) no-repeat center /cover;`}
  background-size: 15px 15px;

  box-sizing: border-box;
  border: 1px solid #eee;

  overflow: hidden;

  cursor: pointer;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// 앞으로가기 버튼 스타일
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "28px",
        height: "28px",

        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -48px)",
        zIndex: "100",

        background: "#fff url(./img/ico-chevron-right-sm-lightgray@2x.png) no-repeat center / cover",
        backgroundSize: "8px 15px",

        border: "1px solid #eee",
        boxSizing: "border-box",

        overflow: "hidden",

        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}

// 뒤로가기 버튼 스타일
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "28px",
        height: "28px",

        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-150%, -48px)",
        zIndex: "100",

        background: "#fff url(./img/ico-chevron-left-sm-lightgray@2x.png) no-repeat center / cover",
        backgroundSize: "8px 15px",

        border: "1px solid #eee",
        boxSizing: "border-box",

        overflow: "hidden",

        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}

function InfoSliderCarousel({ category, title, text }) {
  // 슬라이드 설정
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <SlideContainer>
      <StyledSlider {...settings}>
        <div className="postBox">
          <Link to="/test">
            <span className="category">{category}</span>
            <span className="content">test post1</span>
          </Link>
        </div>
        <div className="postBox">
          <Link to="/test">
            <span className="category">{category}</span>
            <span className="content">test post2</span>
          </Link>
        </div>
        <div className="postBox">
          <Link to="/test">
            <span className="category">{category}</span>
            <span className="content">test post3</span>
          </Link>
        </div>
      </StyledSlider>

      <PlusButton>
        <a href="https://sev.severance.healthcare/sev/story/doctor.do" target="_black" rel="noopener noreferrer" />
      </PlusButton>
    </SlideContainer>
  );
}

export default InfoSliderCarousel;
