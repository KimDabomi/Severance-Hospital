/**
 * @ File Name: Drstep1.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-22
 * @ Description: 의료진 예약 step 1
 */

import React, { memo } from "react";
import styled from "styled-components";

// 이미지
import DrChoice from "../../assets/img/img-doctor-search-default.png";
import search from "../../assets/img/ico-search-white.png";

const Container = styled.div`
  width: 630px;
  color: #333;
  letter-spacing: 0.02em;
  line-height: 1.625;
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  padding: 20px;
  box-sizing: border-box;
  .title {
    p {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  // 검색어 입력 인풋
  .search_input {
    width: 515px;
    height: 42px;
    float: left;
    padding: 0;
    padding-left: 10px;
    margin-right: 10px;
    border: 1px solid #e6e6e6;
    &:focus {
      outline: 1px solid rgb(0, 148, 251);
    }
  }

  // 검색버튼
  .search_btn {
    height: 42px;
    width: 50px;
    border-radius: 2px;
    background-color: #0094fb;
    border: 2px solid #0094fb;
    color: #fff;
    cursor: pointer;
    img {
      margin: auto;
    }
  }

  // 초성 버튼
  .search_doctor {
    margin: 15px -2.4px;
    ul {
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      li {
        margin: 5px 4.5px;
        float: left;
        input[type="radio"] + label {
          display: inline-block;
          border-radius: 24px;
          background: #fff;
          text-align: center;
          line-height: 24px;
          font-size: 14px;
          min-width: 28px;
          height: 28px;
          border: 1px solid #e6e6e6;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #ccc;
        }
        input[type="radio"] {
          display: none;
        }
        input[type="radio"]:checked + label {
          background: #0094fb;
          color: #fff;
          border-color: #0094fb;
        }
      }
      .all input[type="radio"] + label {
        width: 65px;
      }
    }
  }

  // 처음 의료진 성명 검색 안내 박스
  .intro {
    display: none;
    .dr_choice {
      width: 100%;
      height: 470px;
      background-color: #fff;
      font-size: 14px;
      box-sizing: border-box;
      padding-top: 25%;
      border: 1px solid #dadada;
      p {
        text-align: center;
        span {
          color: #0094fb;
        }
      }
      img {
        margin: 0 auto 30px;
      }
    }
    button {
      display: block;
      background-color: #fff;
      color: #333;
      border: 1px solid #959595;
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 40px auto 20px;
    }
  }

  // 검색결과 의사목록

  // 검색결과 없을 때
  .no_data {
    display: none;
    width: 100%;
    height: 470px;
    font-size: 14px;
    padding-top: 150px;
    box-sizing: border-box;
    p {
      padding-bottom: 180px;
      text-align: center;
    }
    button {
      display: block;
      background-color: #fff;
      color: #333;
      border: 1px solid #959595;
      width: 100px;
      height: 50px;
      padding: 0 28px;
      font-size: 18px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin: 40px auto 20px;
      border-radius: 50px;
    }
  }
`;

const Drstep1 = memo(() => {
  return (
    <Container>
      <div className="title">
        <p>진료예약 - STEP1</p>
      </div>
      <div className="content">
        <div>
          <input
            type="text"
            id="search_input"
            className="search_input"
            placeholder="의료진 성명을 2자 이상 입력해주세요."
            title="의료진 성명을 2자 이상 입력해주세요"
          />
          <span>
            <button type="submit" className="search_btn">
              <img src={search} alt="search" />
            </button>
          </span>
        </div>
        <div className="search_doctor">
          <ul className="doctor_fstName">
            <li className="all">
              <input
                type="radio"
                name="choSung"
                id="sortAll2"
                defaultValue=""
                checked="checked"
                data-ignore=""
              />
              <label for="sortAll2">ALL</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-1"
                defaultValue="ㄱ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-1">ㄱ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-2"
                defaultValue="ㄴ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-2">ㄴ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-3"
                defaultValue="ㄷ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-3">ㄷ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-4"
                defaultValue="ㄹ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-4">ㄹ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-5"
                defaultValue="ㅁ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-5">ㅁ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-6"
                defaultValue="ㅂ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-6">ㅂ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-7"
                defaultValue="ㅅ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-7">ㅅ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-8"
                defaultValue="ㅇ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-8">ㅇ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-9"
                defaultValue="ㅈ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-9">ㅈ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-10"
                defaultValue="ㅊ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-10">ㅊ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-11"
                defaultValue="ㅋ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-11">ㅋ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-12"
                defaultValue="ㅌ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-12">ㅌ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-13"
                defaultValue="ㅍ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-13">ㅍ</label>
            </li>
            <li>
              <input
                type="radio"
                name="choSung"
                id="sort2-14"
                defaultValue="ㅎ"
                data-ignore=""
                disabled=""
              />
              <label for="sort2-14">ㅎ</label>
            </li>
          </ul>
        </div>
        <div className="intro">
          <div className="dr_choice">
            <img src={DrChoice} alt="DrChoice" />
            <p>
              찾으시려는 <span>의료진의 성명</span>을 검색해주세요.
            </p>
          </div>
          <button type="button" className="pre_btn" data-view="choose-type">
            이전
          </button>
        </div>

        <div className="doctor_list_wrap">
          <div className="docotor-lists staffList">
            <ul className="card">
              <li>
                <div
                  className="doctor_profile on2"
                  data-empno="0116821"
                  data-nm="김다함"
                  data-deptcode="M5"
                  data-cliniccode=""
                  data-resyn="Y"
                >
                  <div className="card-view" data-module-card="conts">
                    <div>
                      <div className="thumb-circle">
                        <img
                          src={DrChoice}
                          alt="프로필 사진"
                          onerror="imgError(this);"
                          className="mCS_img_loaded"
                        />
                      </div>
                      <dl>
                        <dt>
                          <a href="#none" title="자세히 보기">
                            김다함
                          </a>
                        </dt>
                        <dd className="decs-multi">
                          <span>
                            갑상선 결절 및 암, 갑상선 기능 이상 및 관련 대사
                            이상
                          </span>
                        </dd>
                        <dd className="sr-only">자세히보기</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="doctor_profile"
                  data-empno="0115442"
                  data-nm="김다희"
                  data-deptcode="EN"
                  data-cliniccode=""
                  data-resyn="Y"
                >
                  <div className="card_view" data-module-card="conts">
                    <div>
                      <div className="thumb_circle">
                        <img
                          src={DrChoice}
                          alt="김다희 닥터 프로필 사진"
                          onerror="imgError(this);"
                          className="mCS_img_loaded"
                        />
                      </div>
                      <dl>
                        <dt>
                          <a href="#none" title="자세히 보기">
                            김다희
                          </a>
                        </dt>
                        <dd className="decs-multi">
                          <span>
                            후두 및 음성질환, 소아 이비인후과, 침샘종양
                            두경부질환, 두경부암
                          </span>
                        </dd>
                        <dd className="sr-only">자세히보기</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="btn_wrap">
            <button type="button" className="pre_btn" data-view="choose-type">
              이전
            </button>
            <button type="button" className="next_btn" data-view="staff2">
              다음
            </button>
          </div>
        </div>

        <div className="no_data">
          <p>검색 결과가 존재하지 않습니다.</p>
          <button type="button" className="pre_btn" data-view="choose-type">
            이전
          </button>
        </div>
      </div>
    </Container>
  );
});

export default Drstep1;
