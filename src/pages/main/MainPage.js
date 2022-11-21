import React from "react";
import styled from "styled-components";
import { Link, Route, Router } from "react-router-dom";

/** 컴포넌트 참조 */
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/** 이미지 참조 */
import MainImage from "../../assets/img/img-visual-patient1.jpg";
import ExternalLink from "../../assets/img/ico-external-link-white@2x.png";
import ShortcutExpert from "../../assets/img/ico-shortcut-expert@2x.png";

/** 메인 스타일 블럭 */
const Main = styled.main`
  width: 100%;
`;

/** 이미지 슬라이드 스타일 블럭 */
const SlideFigure = styled.figure`
  width: 1920px;
  height: 500px;
  margin: 0 auto;
`;

/** 카테고리별 병원 바로가기 스타일 */
/** 빠른 메뉴 */
const HospitalSection = styled.section`
  width: 1280px;
  margin: 0 auto;

  .exteralLinks {
    width: 100%;
    height: 73px;
    ul {
      width: 100%;
      height: 100%;
      display: flex;

      li {
        flex: 1 1 0;
        height: 100%;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px 0 30px;
          box-sizing: border-box;

          span {
            font-size: 24px;
            color: white;
          }

          img {
            width: 20px;
            height: 20px;
          }
        }
        &:first-child {
          background-color: #2faaff;
        }
        &:nth-child(2) {
          background-color: #0094fb;
        }
        &:nth-child(3) {
          background-color: #007cfb;
        }
        &:nth-child(4) {
          background-color: #0054d1;
        }
        &:last-child {
          background-color: #003d7d;
        }
      }
    }
  }

  .shortcut {
    width: 100%;
    height: 194px;
    ul {
      width: 100%;
      height: 100%;
      padding: 58px 0;
      box-sizing: border-box;
      display: flex;

      li {
        width: 25%;
        height: 100%;

        a {
          width: 100%;
          height: 76px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;


          strong {
            font-size: 24px;
          }

          span {
            width: 215px;
            font-size: 16px;
          }

          img {
            width: 60px;
            height: 60px;
            padding: 8px 22.5px;
          }
        }
      }
    }
  }
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <SlideFigure>
          <img src={MainImage} alt="main_img" />
        </SlideFigure>

        <HospitalSection>
          <div className="exteralLinks">
            <ul>
              <li>
                <a href="https://cancer.severance.healthcare/cancer/index.do">
                  <span>연세암병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-heart.severance.healthcare/sev-heart/index.do">
                  <span>심장혈관병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-children.severance.healthcare/sev-children/index.do">
                  <span>어린이병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-eye.severance.healthcare/sev-eye/index.do">
                  <span>안과병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-rehabil.severance.healthcare/sev-rehabil/index.do">
                  <span>재활병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
            </ul>
          </div>
          <div className="shortcut">
            <ul>
              <li>
                <Link to="/">
                  <img src={ShortcutExpert} />
                  <strong>의료진 찾기</strong>
                  <span>전문 의료진을 빠르게 찾을 수 있습니다.</span>
                </Link>
              </li>
            </ul>
          </div>
        </HospitalSection>
      </Main>

      <Footer />
    </>
  );
};

export default MainPage;
