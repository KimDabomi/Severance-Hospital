/**
 * @ File Name: TopBanner.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: 메인 페이지 top banner
 */

import React, { memo } from "react";
import styled from "styled-components";

/** material ui */
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// 체크박스
import CheckBox from "./CheckBox";

/** 상단 배너 스타일 */
const TopBannerSection = styled.section`
  width: 100%;
  height: 90px;
  background-color: #0054d1;
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  white-space: nowrap;

  .topBannerContent {
    width: 1280px;
    height: 100%;
    padding: 16px 0 19px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;

    span {
      font-size: 16px;
      color: white;
      font-weight: 700;
      line-height: 55px;
    }

    .firstItem {
      display: flex;
      align-items: center;

      .telYellow {
        display: block;
        width: 52px;
        height: 52px;
        margin-right: 15px;
        background: url(./img/ico-tel-yellow@2x.png) no-repeat center / cover;
      }

      .title {
        font-size: 24px;
      }

      .tel {
        font-size: 40px;
        margin: 0 5px;
      }

      .telOverseas {
        font-weight: normal;
      }
    }

    hr {
      width: 55px;
      height: 1px;
      margin: 26px 0;
      background-color: #e6e6e6;
      border: none;
      rotate: 90deg;
    }

    .secondItem {
      display: flex;
      align-items: center;

      .telPrimary {
        display: block;
        width: 52px;
        height: 52px;
        margin-right: 15px;
        background: url(./img/ico-tel-primary@2x.png) no-repeat center / cover;
      }

      .title {
        font-size: 24px;
      }

      .tel {
        font-size: 40px;
        margin: 0 5px;
      }

      .telOverseas {
        font-weight: normal;
      }
    }

    .closeBox {
      display: flex;
      align-items: center;
      margin-left: auto;
/* 
      .topBannerCloseCheckbox[type="checkbox"] {
        display: none;
      }

      .topBannerCloseCheckbox[type="checkbox"] + label::before {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #aaa;
        box-sizing: border-box;
        background-color: white;
        content: "";
      }

      .topBannerCloseCheckbox[id="close"]:checked + label::before {
        background: white url(./img/ico-checkbox-checked.png) no-repeat 45% center;
        background-size: 13px 10px;
      } */

      .closeText {
        font-size: 16px;
        font-weight: normal;
        line-height: 20px;
        margin: 0 5px;
      }

      button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        cursor: pointer;

        .topBannerCloseIcon {
          display: block;
          width: 26px;
          height: 26px;
          background: url(./img/ico-close-circle@2x.png) no-repeat center / cover;
        }
      }
    }
  }
`;

const TopBanner = memo(() => {
  return (
    <TopBannerSection>
      <div className="topBannerContent">
        <article className="firstItem">
          <i className="telYellow" />
          <span className="title">진료예약</span>
          <a href="/">
            <span className="tel">1599-1004</span>
          </a>
          <span className="telOverseas">해외 수신번호(+82-2-2228-1004)</span>
        </article>

        <hr />

        <article className="secondItem">
          <i className="telPrimary" />
          <span className="title">건강검진예약</span>
          <a href="/">
            <span className="tel">1588-7757</span>
          </a>
        </article>

        <div className="closeBox">
          {/* <input type="checkbox" id="close" className="topBannerCloseCheckbox" />
          <label htmlFor="close"></label>
          <span className="closeText">오늘하루 열지않기</span> */}
          <FormGroup>
            <FormControlLabel control={<CheckBox />} label="오늘하루 열지않기" />
          </FormGroup>
          <button type="button">
            <i className="topBannerCloseIcon" />
          </button>
        </div>
      </div>
    </TopBannerSection>
  );
});

export default TopBanner;
