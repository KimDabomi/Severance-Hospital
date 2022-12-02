/**
 * @ File Name: LoginFooter.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-02 17:20
 * @ Description: 로그인 페이지 푸터
 */

import React from "react";
import styled from "styled-components";

/** 이미지 참조 */
import npImg from "../assets/img/ico-sns-gray-np@2x.png";
import nbImg from "../assets/img/ico-sns-gray-nb@2x.png";
import ytImg from "../assets/img/ico-sns-yt@2x.png";
import igImg from "../assets/img/ico-sns-gray-ig@2x.png";
import fbImg from "../assets/img/ico-sns-gray-fb@2x.png";
import ttImg from "../assets/img/ico-sns-tt@2x.png";

/** 푸터 스타일 블록 */
const FooterContainer = styled.footer`
  width: 100%;
  height: 214px;
  padding-bottom: 30px;
  box-sizing: border-box;
  float: left;
  margin-top: 100px;

  /* 사이트 바로가기 스타일 */
  .familySite {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 2%;
    .snsLink {
      width: 1280px;
      margin: 0 auto;

      .snsImg {
        width: 300px;
        height: 50px;
        display: flex;

        li {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;

          img {
            width: 30px;
            height: 30px;
            filter: grayscale(1);
            cursor: pointer;
          }
        }
      }
    }
  }

  /* 사이트 정보 스타일 */
  .siteInfo {
    padding-left: 2%;
    width: 1280px;
    height: 130px;
    margin: 0 auto;

    .shortcut {
      display: flex;
      margin: 35px 0 24px;

      li {
        margin-right: 30px;

        a {
          font-size: 15px;
          line-height: 24px;
          color: #333333;
        }

        &:nth-child(2) {
          font-weight: bold;
        }

        &:nth-child(4) {
          color: #0094fb;
        }
      }
    }

    address,
    p {
      font-size: 14px;
      line-height: 23px;
      color: #666666;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="familySite">
        <div className="snsLink">
          <ul className="snsImg">
            <li>
              <img src={npImg} alt="naver_post_image" />
            </li>
            <li>
              <img src={nbImg} alt="naver_blog_image" />
            </li>
            <li>
              <img src={ytImg} alt="youtube_image" />
            </li>
            <li>
              <img src={igImg} alt="instagram_image" />
            </li>
            <li>
              <img src={fbImg} alt="facebook_image" />
            </li>
            <li>
              <img src={ttImg} alt="twitter_image" />
            </li>
          </ul>
        </div>
      </div>
      <div className="siteInfo">
        <ul className="shortcut">
          <li>
            <a>이용약관</a>
          </li>
          <li>
            <a>개인정보처리방침</a>
          </li>
          <li>
            <a>고객의 소리</a>
          </li>
          <li>
            <a>병원소개</a>
          </li>
        </ul>
        <address>03722 서울특별시 서대문구 연세로 50-1</address>
        <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
