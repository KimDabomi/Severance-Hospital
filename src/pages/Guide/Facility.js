/**
 * @ File Name: Facility.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-12 15:02:00
 * @ Description: 시설안내 페이지
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 전체 층별 안내
import floormap from "../../assets/img/img-floormap1_210303.png";
// 1층 ~ 20층
import sev20 from "../../assets/img/sev-20.jpg";
import sev19 from "../../assets/img/sev-19.jpg";
import sev18 from "../../assets/img/sev-18.jpg";
import sev17 from "../../assets/img/sev-17.jpg";
import sev16 from "../../assets/img/sev-16.jpg";
import sev15 from "../../assets/img/sev-15.jpg";
import sev14 from "../../assets/img/sev-14.jpg";
import sev13 from "../../assets/img/sev-13.jpg";
import sev12 from "../../assets/img/sev-12.jpg";
import sev11 from "../../assets/img/sev-11.jpg";
import sev10 from "../../assets/img/sev-10.jpg";
import sev09 from "../../assets/img/sev-09.jpg";
import sev08 from "../../assets/img/sev-08.jpg";
import sev07 from "../../assets/img/sev-07.jpg";
import sev06 from "../../assets/img/sev-06_210303.jpg";
import sev05 from "../../assets/img/sev-05_210303.jpg";
import sev04 from "../../assets/img/sev-04_210303.jpg";
import sev03 from "../../assets/img/sev-03_210303.jpg";
import sev02 from "../../assets/img/sev-02_210303.jpg";
import sev01 from "../../assets/img/sev-01_210303.jpg";

/** 리스트 스타일 */
// ul태그
const ListStyleUl = styled.ul`
  margin: 4px 0;

  li {
    padding-left: 12px;
    margin-top: 5px;
    position: relative;

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: "";
      width: 4px;
      height: 4px;

      position: absolute;
      top: 0.7em;
      left: 0;

      background-color: #0094fb;
    }
  }
`;

/** 타이틀 h3태그 스타일 */
// 타이틀1
const Title1H3 = styled.h3`
  padding-left: 18px;
  margin: 65px 0 40px;

  font-size: 24px;
  font-weight: bold;
  line-height: 38px;

  color: #222;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 20px;
    top: 9px;
    left: 0;
    background-color: #0094fb;
    border-radius: 3px;
  }
`;

/** 들여쓰기 스타일 */
// 들여쓰기1
const Indent1 = styled.div`
  margin-left: 18px;
`;

const Facility = memo(() => {
  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">층별 시설</h1>
          <div className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>세브란스병원 본관 각 층별 시설을 보고 싶으시면, 원하시는 층을 클릭해 주시기 바랍니다.</li>
            </ListStyleUl>
          </div>

          {/* @todo: 층별 네비게이션 만들기 */}
          {/* @todo: 이미지 alt 속성 모두 적용하기 */}
          <section>
            <Title1H3>전체 층별 안내</Title1H3>
            <Indent1>
              <img src={floormap} />
            </Indent1>

            <Title1H3>20층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>200병동, 세브란스 VIP 건강증진센터</li>
              </ListStyleUl>
              <img src={sev20} />
            </Indent1>

            {/* @todo: 조건부 이미지 전환 */}
            <Title1H3>19~10층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev19} />
            </Indent1>

            <Title1H3>9층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev09} />
            </Indent1>

            <Title1H3>8층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev08} />
            </Indent1>

            <Title1H3>7층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev07} />
            </Indent1>

            <Title1H3>6층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev06} />
            </Indent1>

            <Title1H3>5층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev05} />
            </Indent1>

            <Title1H3>4층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev04} />
            </Indent1>

            <Title1H3>3층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev03} />
            </Indent1>

            <Title1H3>2층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev02} />
            </Indent1>

            <Title1H3>1층</Title1H3>
            <Indent1>
              <ListStyleUl>
                <li>191병동, 192병동</li>
              </ListStyleUl>
              <img src={sev01} />
            </Indent1>
          </section>
        </div>
      </div>
    </>
  );
});

export default Facility;
