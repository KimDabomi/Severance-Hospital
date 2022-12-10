/**
 * @ File Name: MainPage.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-25 15:02:00
 * @ Description: 메인 페이지
 */

/** import */
import React, { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import moment from "moment";

// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../slices/CustomerBoardSlice";

/** 컴포넌트 참조 */
// 헤더, 푸터
import MainPageHeader from "../../components/MainPageHeader";
import Footer from "../../components/Footer";
// 상단 배너
import TopBanner from "../../components/TopBanner";
// 인포슬라이더캐러셀
import InfoSliderCarousel from "../../components/InfoSliderCarousel";
// 메인슬라이더캐러셀
import MainSliderCarousel from "../../components/MainSliderCarousel";
// 뉴스스라이더캐러셀
import NewsSliderCarousel from "../../components/NewsSliderCarousel";
// 하단 배너 슬라이더캐러셀
import MktSliderCarousel from "../../components/MktSliderCarousel";

/** 이미지 참조 */
// 전화 및 닫기버튼 이미지
import TelYellow from "../../assets/img/ico-tel-yellow@2x.png";
import TelPrimary from "../../assets/img/ico-tel-primary@2x.png";
import CheckboxChecked from "../../assets/img/ico-checkbox-checked.png";
import CloseCircle from "../../assets/img/ico-close-circle@2x.png";
// 메인 슬라이드
// import MainImage from "../../assets/img/img-visual-patient1.jpg";
// 병원 바로가기 아이콘
import ExternalLink from "../../assets/img/ico-external-link-white@2x.png";
// 바로가기 메뉴 아이콘
import ShortcutExpert from "../../assets/img/ico-shortcut-expert@2x.png";
import ShortcutDepartment from "../../assets/img/ico-shortcut-department@2x.png";
import ShortcutCalendar from "../../assets/img/ico-shortcut-calendar@2x.png";
import ShortcutRecervation from "../../assets/img/ico-shortcut-reservation@2x.png";
// 힘내요, 세브란스, 전공의 모집
import Cheerup from "../../assets/img/main-cheerup.jpg";
import Recruitment from "../../assets/img/img-recruitment.png";
// 메인 페이지 HospitalSection 배경 이미지
import BgMainPattern from "../../assets/img/bg-main-pattern.png";
// 뉴스 페이지 더보기 버튼 이미지
import BtnMorePlus from "../../assets/img/btn-more-plus.jpg";
// mkt banner 배경 이미지
import BgMktBanner from "../../assets/img/bg-mkt-banner.jpg";

/** 상단 배너 스타일 */
const TopBannerSection = styled.section`
  width: 100%;
  height: 90px;
  background-color: #0054d1;
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  white-space: nowrap;
  transition: 0.3s ease;

  &.close {
    margin-top: -90px;
  }

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
        ${`backGround: url(${TelYellow}) no-repeat center /cover;`}
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
        ${`backGround: url(${TelPrimary}) no-repeat center /cover;`}
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
      margin-left: auto;

      .topBannerCloseCheckbox[type="checkbox"] {
        display: none;
      }

      .topBannerCloseCheckbox[type="checkbox"] + label::before {
        display: inline-block;
        width: 17px;
        height: 17px;
        border: 1px solid #aaa;
        box-sizing: border-box;
        background-color: white;
        content: "";
      }

      .topBannerCloseCheckbox[id="close"]:checked + label::before {
        ${`backGround: white url(${CheckboxChecked}) no-repeat 45% center;`}
        background-size: 13px 10px;
      }

      label {
        display: flex;
        align-items: center;

        .closeText {
          font-size: 16px;
          font-weight: normal;
          line-height: normal;
          margin: 0 5px;
        }
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
          ${`backGround: url(${CloseCircle}) no-repeat center /cover;`}
        }
      }
    }
  }
`;

/** 메인 스타일 */
const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
`;

/** 이미지 슬라이드 스타일 */
// const SlideSection = styled.section`
//   width: 100%;
//   position: relative;

//   img {
//     display: block;
//     max-width: 1920px;
//     height: auto;
//     margin: 0 auto;
//   }

//   article {
//     position: absolute;
//     top: 50%;
//     left: 320px;
//     transform: translate(0, -50%);

//     .slide_title {
//       font-size: 66px;
//       line-height: 72px;
//       font-family: "NanumSquare";
//       color: white;
//     }

//     .slide_text {
//       font-size: 24px;
//       line-height: 32px;
//       font-family: "NanumSquare";
//       color: white;
//       display: block;
//       margin-top: 15px;
//     }
//   }
// `;

/** 카테고리별 병원 바로가기 스타일 */
const HospitalSection = styled.section`
  width: 1920px;
  padding-bottom: 60px;
  background: url(${BgMainPattern}) no-repeat center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;

  // 연세암병원, 심장혈관병원, ...
  .exteralLinks {
    width: 1280px;
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
            font-weight: bold;
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

  // 의료진 찾기, 진료과 찾기, ...
  .shortcutSlider {
    width: 1280px;
    height: 194px;
    padding: 58px 0;
    box-sizing: border-box;

    ul {
      width: 100%;
      height: 100%;
      display: flex;

      li {
        width: 25%;
        height: 100%;

        a {
          width: 100%;
          height: 100%;
          display: flex;

          img {
            width: 60px;
            height: 60px;
            padding: 8px 22.5px;
          }

          .textBox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            strong {
              font-size: 24px;
              line-height: 24px;
            }

            span {
              font-size: 16px;
              line-height: 22px;
              color: #333333;
            }
          }
        }
      }
    }
  }

  // 공감story, 건강정보, ...
  .infoSlider {
    width: 1280px;
    display: flex;
    justify-content: space-between;

    dl {
      width: 297px;
      height: 360px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      dt {
        font-size: 30px;
        font-weight: bold;
        color: white;
        margin-top: 80px;

        ::after {
          content: "";
          display: block;
          margin: 20px auto 0;
          width: 40px;
          height: 1px;
          display: flex;
          background-color: white;
        }
      }

      dd {
        width: 260px;
        height: 173px;
        background-color: white;
        margin-bottom: 18.5px;
      }
    }

    .infoSliderShortcut {
      width: 297px;
      height: 360px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

/** NEWS 스타일 */
const NewsSection = styled.section`
  width: 100%;
  height: 390px;
  padding: 80px 0;
  box-sizing: border-box;
  background-color: #003d7d;

  .newsArticleBox {
    width: 1280px;
    height: 230px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    position: relative;

    .news {
      width: 214px;
      height: 211px;
      display: flex;
      flex-direction: column;
      margin-right: 114px;

      h3 {
        font-size: 48px;
        line-height: 48px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        a {
          display: block;
          width: 27px;
          height: 27px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 26px;
        color: white;
      }

      /* .btns {
        margin-top: 15px;
        .left_btn {
          display: block;
          width: 60px;
          height: 60px;
          background: url(./img/btn-left-white.png) no-repeat center / cover;
          border: none;
          float: left;
        }
        .right_btn {
          display: block;
          float: left;
          width: 60px;
          height: 60px;
          margin-left: 20px;
          background: url(./img/btn-right-white.png) no-repeat center / cover;
          border: none;

          &::after {
            content: "";
            float: none;
            display: block;
            clear: both;
          }
        }
      } */
    }
  }
`;
// 뉴스 슬라이드 오른쪽 넘치는 부분 가리는 박스
const HiddenBox = styled.div`
  width: 30px;
  height: 230px;
  background-color: #003d7d;
  position: absolute;
  right: -30px;
`;

/** 하단 배너 스타일 */
const BannerSection = styled.section`
  width: 100%;
  height: 614px;
  padding: 65px 0 80px;
  box-sizing: border-box;
  background: url(${BgMktBanner}) no-repeat center / cover;
`;

const MainPage = memo(() => {
  const COOKIE_KEY = "HideTopBanner";
  const [cookies, setCookie] = useCookies([COOKIE_KEY]);
  const [topBanner, setTopBanner] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const hideTopBanner = useCallback(() => {
    if (!isChecked) {
      return;
    }
    const decade = moment();
    decade.add(1, "d");
    setCookie(COOKIE_KEY, "true", {
      path: "/",
      expires: decade.toDate()
    });
  });

  const checkHandler = useCallback(() => {
    setIsChecked(!isChecked);
  });

  // 새로고침시 최상단 이동
  const up = useCallback(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  });

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CustomerBoardSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <>
      <TopBannerSection className={cookies[COOKIE_KEY] || !topBanner ? "close" : null} onLoad={up()}>
        <div className="topBannerContent">
          <article className="firstItem">
            <i className="telYellow" />
            <span className="title">진료예약</span>
            <a href="tel:1599-1004">
              <span className="tel">1599-1004</span>
            </a>
            <span className="telOverseas">해외 수신번호(+82-2-2228-1004)</span>
          </article>

          <hr />

          <article className="secondItem">
            <i className="telPrimary" />
            <span className="title">건강검진예약</span>
            <a href="tel:1588-7757">
              <span className="tel">1588-7757</span>
            </a>
          </article>

          <div className="closeBox">
            <input type="checkbox" defaultChecked="checked" id="close" className="topBannerCloseCheckbox" onChange={checkHandler} />
            <label htmlFor="close">
              <span className="closeText">오늘하루 열지않기</span>
            </label>
            <button
              type="button"
              onClick={() => {
                setTopBanner(false);
                hideTopBanner();
              }}
            >
              <i className="topBannerCloseIcon" />
            </button>
          </div>
        </div>
      </TopBannerSection>

      <MainPageHeader />

      <Main>
        {/* <SlideSection>
          <img src={MainImage} alt="main_img" />
          <article>
            <span className="slide_title">
              <strong>공감,</strong> 또 하나의 치료
            </span>
            <span className="slide_text">질병 치료를 넘어 환자의 마음까지 치유하겠습니다.</span>
          </article>
        </SlideSection> */}
        <MainSliderCarousel />

        <HospitalSection>
          <div className="exteralLinks">
            <ul>
              <li>
                <a href="https://cancer.severance.healthcare/cancer/index.do" target="_black" rel="noopener noreferrer">
                  <span>연세암병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-heart.severance.healthcare/sev-heart/index.do" target="_black" rel="noopener noreferrer">
                  <span>심장혈관병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-children.severance.healthcare/sev-children/index.do" target="_black" rel="noopener noreferrer">
                  <span>어린이병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-eye.severance.healthcare/sev-eye/index.do" target="_black" rel="noopener noreferrer">
                  <span>안과병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
              <li>
                <a href="https://sev-rehabil.severance.healthcare/sev-rehabil/index.do" target="_black" rel="noopener noreferrer">
                  <span>재활병원</span>
                  <img src={ExternalLink} />
                </a>
              </li>
            </ul>
          </div>
          <div className="shortcutSlider">
            <ul>
              <li>
                <Link to="/staff">
                  <img src={ShortcutExpert} />
                  <div className="textBox">
                    <strong>의료진 찾기</strong>
                    <span>
                      전문 의료진을 빠르게
                      <br />
                      찾을 수 있습니다.
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={ShortcutDepartment} />
                  <div className="textBox">
                    <strong>진료과 찾기</strong>
                    <span>
                      진료 전 진료과를
                      <br />
                      안내해 드립니다.
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/appointment_main">
                  <img src={ShortcutCalendar} />
                  <div className="textBox">
                    <strong>진료 예약</strong>
                    <span>
                      회원/비회원 편리하게
                      <br />
                      예약할 수 있습니다.
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={ShortcutRecervation} />
                  <div className="textBox">
                    <strong>예약현황</strong>
                    <span>
                      회원 및 비회원 예약
                      <br />
                      내역을 볼 수 있습니다.
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="infoSlider">
            <dl style={{ backgroundImage: "url(./img/bg-sympathy-story.jpg)" }}>
              <dt>고객의 소리</dt>
              <dd>
                <InfoSliderCarousel post={data} />
              </dd>
            </dl>
            <dl style={{ backgroundImage: "url(./img/bg-health-info.jpg)" }}>
              <dt>건강정보</dt>
              <dd>
                <InfoSliderCarousel post={data} />
              </dd>
            </dl>
            <a href="https://yuhs.severance.healthcare/yuhs/history/museum/cheerupsev.do" className="infoSliderShortcut">
              <img src={Cheerup} alt="박기호 사진전 힘내요, 세브란스 세브란스 코로나 병동의 기록" />
            </a>
            <a href="https://recruit.severance.healthcare/recruit/recruit.do" className="infoSliderShortcut">
              <img src={Recruitment} alt="2023년 세브란스병원 전공의 (인턴 및 레지던트 1년차) 모집" />
            </a>
          </div>
        </HospitalSection>

        <NewsSection>
          <div className="newsArticleBox">
            <article className="news">
              <h3>
                <strong>NEWS</strong>
                <Link to="/news">
                  <img src={BtnMorePlus} />
                </Link>
              </h3>
              <p>고객여러분께 가장 빠른 소식을 제공해 드리겠습니다.</p>

              {/* <div className="btns">
                <button type="button" className="left_btn" />
                <button type="button" className="right_btn" />
              </div> */}
            </article>

            <NewsSliderCarousel />

            <HiddenBox />
          </div>
        </NewsSection>

        <BannerSection>
          <MktSliderCarousel />
        </BannerSection>
      </Main>

      <Footer />
    </>
  );
});

export default MainPage;
