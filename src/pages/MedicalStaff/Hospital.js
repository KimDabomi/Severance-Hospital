/**
 * @ File Name: Hospital.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-12-16 15:02:00
 * @ Description: 협력병원 현황 페이지
 */

/** import */
import React, { memo } from "react";
import styled from "styled-components";

/** 이미지 */
// 공지사항 박스 아이콘
import boxGuideDecor from "../../assets/img/box-guide-decoration@2x.png";
// 지도 전체
import Region from "../../assets/img/img-region.png";
import Blank from "../../assets/img/blank.png";

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

/** 지도, 리스트 박스 스타일 */
const PartnerHospitalBoxSection = styled.section`
  width: 100%;
  height: 640px;
  border: 1px solid #e6e6e6;
  display: flex;
`;
// 지도
const MapArticle = styled.article`
  width: 50%;
  height: 640px;
  background-color: #f9f9f9;
  position: relative;

  p {
    font-size: 16px;
    padding: 21px 30px 10px;
    margin: 4px 0;
  }

  img {
    width: 365px;
    height: 553px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -254px;
    transform: translate(-50%);
  }

  map {
    area {
      outline: none !important;
      border: 0 !important;
      cursor: pointer;
    }
  }

  &::before {
    content: "";
    width: 365px;
    height: 553px;
    display: block;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10000; 
    margin-top: -254px;
    transform: translate(-50%);

    background: url(${Region}) no-repeat;
    background-position: 0 -573px;
  }
`;
// 리스트
const MapListArticle = styled.article`
  width: 50%;
  height: 640px;
  position: relative;

  p {
    font-size: 16px;
    padding: 21px 30px 10px;
    margin: 4px 0;
  }
`;

const Hospital = memo(() => {
  return (
    <>
      {/* 배경 이미지 (GlobalStyles) */}
      <div className="bgAll">
        {/* 페이지 기본 구조 */}
        <div className="pageCont">
          {/* 페이지 타이틀 */}
          <h1 className="pageTitle">협력병원 현황</h1>
          <section className="boxGuide">
            <img src={boxGuideDecor} alt="boxGuideDecor" />
            <ListStyleUl>
              <li>전국 세브란스병원 협력병원 현황입니다.</li>
            </ListStyleUl>
          </section>

          {/* 파트너 병원 */}
          <PartnerHospitalBoxSection>
            <MapArticle>
              <p>※지역 선택 시 병원 리스트를 보실 수 있습니다.</p>
              <img src={Blank} alt="지도" usemap="#image-map1" />
              <map name="image-map1">
                <area shape="poly" onfocus="this.blur();" alt="전국 병원리스트 보기" href="#;" coords />
                <area
                  shape="poly"
                  onfocus="this.blur();"
                  alt="강원도 병원리스트 보기"
                  href="#;"
                  coords="145,26,136,33,139,40,143,46,149,50,156,55,165,58,168,68,173,71,180,81,173,83,170,95,170,102,176,112,189,118,194,123,188,128,188,136,188,153,186,164,198,169,208,160,214,162,222,163,239,162,234,171,246,175,256,181,267,184,282,186,292,186,306,185,318,187,328,182,334,181,335,170,328,154,311,128,310,119,290,86,280,75,278,67,273,50,267,36,260,19,257,5,248,7,240,26,229,32,216,34,201,33,191,31,169,29,144,27,141,29,142,26,141,29,132,30,133,35"
                />
              </map>
            </MapArticle>
            <MapListArticle></MapListArticle>
          </PartnerHospitalBoxSection>

          {/* 검색 */}
          <sectrion>
            <input></input>
            <button>
              <i></i>
            </button>
          </sectrion>

          {/* 검색 리스트 */}
          <sectrion>
            <ul>
              <li></li>
            </ul>
          </sectrion>

          {/* page number */}
        </div>
      </div>
    </>
  );
});

export default Hospital;
