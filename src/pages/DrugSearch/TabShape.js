/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-28 15:1:00
 * @ Description: 의약품 검색 약모양으로찾기 탭
 */

import React, { memo, useCallback, useRef, useEffect } from 'react';
import { Link,useLocation } from "react-router-dom";
import styled from "styled-components";
import TopButton from "../../components/TopButton";
import Spinner from '../../components/Spinner'

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";
// Slice에 정의된 액션함수들 참조
import { getDrugSearch } from '../../slices/DrugSearchSlice';

const DrugCont = styled.div`
  .buttonCont{padding-bottom: 0;}
  .drugOption {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    background-color: #f9f9f9;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    dl {
      display: block;
      background-color: #fff;
      width: calc(50% - 30px);
      margin: 15px;
      padding: 30px;
      box-sizing: border-box;
      border-radius: 10px;
    }

    dt {
      font-size: 16px;
      margin-bottom: 20px;
    }
    dd {
      display: flex-wrap;
      margin-top: -10px;
    }
    label {
      display: inline-block;

      input {
        position: absolute;
        width: 1px;
        height: 1px;
        opacity: 0;
      }
      .label {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 10px;
        width: 70px;
        height: 95px;
        border-radius: 3px;

        .drugIco {
          display: inline-block;
          background-repeat: no-repeat;
          background-position: center center;
          width: 50px;
          height: 50px;
          line-height: 50px;
          background-size: cover;
          vertical-align: middle;
          overflow: hidden;
          text-indent: -9999px;
        }
        .text {
          margin-top: 10px;
        }
      }
      input:checked + .label {
        border: 1px solid #0094fb;
        box-sizing: border-box;
      }
      input:checked + .label .text {
        color: #0094fb;
        font-weight: bold;
      }
    }
  }
  //알약사진
  .drugAll {
    background: url(../img/ico-drug-all.png);
  }
  .drugEtc {
    background: url(../img/ico-drug-etc.png);
  }
  .shape1 {
    background: url(../img/ico-drug-shape1.png);
  }
  .shape2 {
    background: url(../img/ico-drug-shape2.png);
  }
  .shape3 {
    background: url(../img/ico-drug-shape3.png);
  }
  .shape4 {
    background: url(../img/ico-drug-shape4.png);
  }
  .shape5 {
    background: url(../img/ico-drug-shape5.png);
  }
  .shape6 {
    background: url(../img/ico-drug-shape6.png);
  }
  .shape7 {
    background: url(../img/ico-drug-shape7.png);
  }
  .shape8 {
    background: url(../img/ico-drug-shape8.png);
  }
  .shape9 {
    background: url(../img/ico-drug-shape9.png);
  }
  .shape10 {
    background: url(../img/ico-drug-shape10.png);
  }
  .color1 {
    background: url(../img/ico-drug-color1.png);
  }
  .color2 {
    background: url(../img/ico-drug-color2.png);
  }
  .color3 {
    background: url(../img/ico-drug-color3.png);
  }
  .color4 {
    background: url(../img/ico-drug-color4.png);
  }
  .color5 {
    background: url(../img/ico-drug-color5.png);
  }
  .color6 {
    background: url(../img/ico-drug-color6.png);
  }
  .color7 {
    background: url(../img/ico-drug-color7.png);
  }
  .color8 {
    background: url(../img/ico-drug-color8.png);
  }
  .color9 {
    background: url(../img/ico-drug-color9.png);
  }
  .color10 {
    background: url(../img/ico-drug-color10.png);
  }
  .color11 {
    background: url(../img/ico-drug-color11.png);
  }
  .color12 {
    background: url(../img/ico-drug-color12.png);
  }
  .color13 {
    background: url(../img/ico-drug-color13.png);
  }
  .color14 {
    background: url(../img/ico-drug-color14.png);
  }
  .color15 {
    background: url(../img/ico-drug-color15.png);
  }
  .color16 {
    background: url(../img/ico-drug-color16.png);
  }
  .formula1 {
    background: url(../img/ico-drug-formula1.png);
  }
  .formula2 {
    background: url(../img/ico-drug-formula2.png);
  }
  .formula3 {
    background: url(../img/ico-drug-formula3.png);
  }
  .division1 {
    background: url(../img/ico-drug-division1.png);
  }
  .division2 {
    background: url(../img/ico-drug-division2.png);
  }
  .division3 {
    background: url(../img/ico-drug-division3.png);
  }

  .drugListCont{
    padding-top: 30px;
  }
`;

const TabShape = memo(() => {

  //dispatch함수 생성
  const dispatch = useDispatch();
  /** url의 경로 구조분해 */
  const { pathname } = useLocation();

  //hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector(
    (state) => state.DrugSearchSlice
  );

  //페이지 번호
  const page = useRef(1);

  /** 닫기버튼 눌렸을 때 */
  const closeClick = useCallback((e) => {
    document.querySelector(".popUpCont").style.display = "none";
  });

  /** <form>의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onDrugInfoSubmit = useCallback((e) => {
    e.preventDefault();

		//검색을 새로했으니 페이지 초기화
		page.current = 1;

		// //입력값에 대한 유효성 검사
		// const regex = RegexHelper.getInstance();

    // try {
    //   regex.value(
    //     document.querySelector("#itemName"),
    //     "검색어를 입력해주세요."
    //   );
    // } catch (e) {
    //   // e.selector.focus();
    //   document.querySelector(".popUpCont").style.display = "block";
    //   document.querySelector(".alert").innerHTML = e.message;
    //   return;
    // }

		//검색어를 slice에 전달
		dispatch(getDrugSearch({
			item_name: document.querySelector('#itemName').value,
			pageNo: page.current
		}));
	}, []);

	// 페이지가 로드되었을 때 정보리셋
	useEffect(()=>{
		dispatch(getDrugSearch({item_name:'검색결과없음'}));
	  },[]);

  /** 더보기 버튼 (페이지) 함수 */
  const pagePlus = useCallback((e) => {
    console.log("더보기버튼 누름", page);
    //페이지 번호 1증가
    page.current++;

		//추가 검색 결과를 요청
		dispatch(getDrugSearch({
			pageNo: page.current,
			item_name:document.querySelector('#itemName').value
		}));
	})


  return (
    <DrugCont>
      <TopButton />
      <fieldset>
        <form>
          <div className="drugOption">
            <dl>
              <dt>
                <span>모양 선택</span>
              </dt>
              <dd>
                <label>
                  <input
                    type="radio"
                    name="drugShape"
                    id="d1"
                    value="전체"
                    defaultChecked
                  />
                  <span className="label">
                    <i className="drugIco drugAll"></i>
                    <span className="text">전체</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d2" value="원형" />
                  <span className="label">
                    <i className="drugIco shape1"></i>
                    <span className="text">원형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d3" value="사각형" />
                  <span className="label">
                    <i className="drugIco shape2"></i>
                    <span className="text">사각형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d4" value="장방형" />
                  <span className="label">
                    <i className="drugIco shape3"></i>
                    <span className="text">장방형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d5" value="타원형" />
                  <span className="label">
                    <i className="drugIco shape4"></i>
                    <span className="text">타원형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d6" value="반원형" />
                  <span className="label">
                    <i className="drugIco shape5"></i>
                    <span className="text">반원형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d7" value="삼각형" />
                  <span className="label">
                    <i className="drugIco shape6"></i>
                    <span className="text">삼각형</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="drugShape"
                    id="d8"
                    value="마름모형"
                  />
                  <span className="label">
                    <i className="drugIco shape7"></i>
                    <span className="text">마름모형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d9" value="오각형" />
                  <span className="label">
                    <i className="drugIco shape8"></i>
                    <span className="text">오각형</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="drugShape"
                    id="d10"
                    value="육각형"
                  />
                  <span className="label">
                    <i className="drugIco shape9"></i>
                    <span className="text">육각형</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="drugShape"
                    id="d11"
                    value="팔각형"
                  />
                  <span className="label">
                    <i className="drugIco shape10"></i>
                    <span className="text">팔각형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="drugShape" id="d12" value="기타" />
                  <span className="label">
                    <i className="drugIco drugEtc"></i>
                    <span className="text">기타</span>
                  </span>
                </label>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>색상 선택</span>
              </dt>
              <dd>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da1"
                    value="전체"
                    defaultChecked
                  />
                  <span className="label">
                    <i className="drugIco drugAll"></i>
                    <span className="text">전체</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da2"
                    value="하양"
                  />
                  <span className="label">
                    <i className="drugIco color1"></i>
                    <span className="text">하양</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da3"
                    value="노랑"
                  />
                  <span className="label">
                    <i className="drugIco color2"></i>
                    <span className="text">노랑</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da4"
                    value="주황"
                  />
                  <span className="label">
                    <i className="drugIco color3"></i>
                    <span className="text">주황</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da5"
                    value="분홍"
                  />
                  <span className="label">
                    <i className="drugIco color4"></i>
                    <span className="text">분홍</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da6"
                    value="빨강"
                  />
                  <span className="label">
                    <i className="drugIco color5"></i>
                    <span className="text">빨강</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da7"
                    value="갈색"
                  />
                  <span className="label">
                    <i className="drugIco color6"></i>
                    <span className="text">갈색</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da8"
                    value="연두"
                  />
                  <span className="label">
                    <i className="drugIco color7"></i>
                    <span className="text">연두</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da9"
                    value="초록"
                  />
                  <span className="label">
                    <i className="drugIco color8"></i>
                    <span className="text">초록</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da10"
                    value="청록"
                  />
                  <span className="label">
                    <i className="drugIco color9"></i>
                    <span className="text">청록</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da11"
                    value="파랑"
                  />
                  <span className="label">
                    <i className="drugIco color10"></i>
                    <span className="text">파랑</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da12"
                    value="남색"
                  />
                  <span className="label">
                    <i className="drugIco color11"></i>
                    <span className="text">남색</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da13"
                    value="자주"
                  />
                  <span className="label">
                    <i className="drugIco color12"></i>
                    <span className="text">자주</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da14"
                    value="보라"
                  />
                  <span className="label">
                    <i className="drugIco color13"></i>
                    <span className="text">보라</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da15"
                    value="회색"
                  />
                  <span className="label">
                    <i className="drugIco color14"></i>
                    <span className="text">회색</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da16"
                    value="검정"
                  />
                  <span className="label">
                    <i className="drugIco color15"></i>
                    <span className="text">검정</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="colorClass1"
                    id="da17"
                    value="투명"
                  />
                  <span className="label">
                    <i className="drugIco color16"></i>
                    <span className="text">투명</span>
                  </span>
                </label>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>제형 선택</span>
              </dt>
              <dd>
                <label>
                  <input
                    type="radio"
                    name="formCodeName"
                    id="dc1"
                    value="전체"
                    defaultChecked
                  />
                  <span className="label">
                    <i className="drugIco drugAll"></i>
                    <span className="text">전체</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="formCodeName"
                    id="dc2"
                    value="정제"
                  />
                  <span className="label">
                    <i className="drugIco formula1"></i>
                    <span className="text">정제</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="formCodeName"
                    id="dc3"
                    value="연질캡슐"
                  />
                  <span className="label">
                    <i className="drugIco formula2"></i>
                    <span className="text">연질캡슐</span>
                  </span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="formCodeName"
                    id="dc4"
                    value="경질캡슐"
                  />
                  <span className="label">
                    <i className="drugIco formula3"></i>
                    <span className="text">경질캡슐</span>
                  </span>
                </label>
              </dd>
            </dl>
            <dl>
              <dt>
                <span>분할선 선택</span>
              </dt>
              <dd>
                <label>
                  <input
                    type="radio"
                    name="lineFront"
                    id="db1"
                    value="전체"
                    defaultChecked
                  />
                  <span className="label">
                    <i className="drugIco drugAll"></i>
                    <span className="text">전체</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="lineFront" id="db2" value="" />
                  <span className="label">
                    <i className="drugIco division1"></i>
                    <span className="text">없음</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="lineFront" id="db3" value="-" />
                  <span className="label">
                    <i className="drugIco division2"></i>
                    <span className="text">-형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="lineFront" id="db4" value="+" />
                  <span className="label">
                    <i className="drugIco division3"></i>
                    <span className="text">+형</span>
                  </span>
                </label>
                <label>
                  <input type="radio" name="lineFront" id="db5" value="기타" />
                  <span className="label">
                    <i className="drugIco drugEtc"></i>
                    <span className="text">기타</span>
                  </span>
                </label>
              </dd>
            </dl>
            <input
              type="text"
              id='itemName'
              name="markCodeFrontAnal"
              className="formControl"
              placeholder="식별문자(약의 앞면이나 뒷면의 문자)로 검색"
              title="식별문자(약의 앞면이나 뒷면의 문자)로 검색"
            />
          </div>
          <div className="buttonCont">
            <button type="submit" className="buttonBlue" onClick={onDrugInfoSubmit}>
              검색
            </button>
            <button type="reset" className="buttonWhite marginleft">
              초기화
            </button>
          </div>
        </form>
      </fieldset>

      {/* 유효성검사 알람 팝업창 */}
      <div className="popUpCont">
        <div className="dimed"></div>
        <div className="popUp">
          <div className="alert"></div>
          <div className="closeBtnCont">
            <button type="button" className="closeBtn" onClick={closeClick} >
              닫기
            </button>
          </div>
        </div>
      </div>

      {error ? (
				<h1>에러발생함</h1>
			) : (
        data && data.items ? (
          <div>
            <Spinner loading={loading} />
						<ul className="drugListCont">
							{/* // 검색 결과 표시 (최대12개)  */}
							{data.items.map((v, i) => {
								// console.log(v);
								return (
									<li key={i} className="drugList">
										<Link className="viewLink" to={ pathname == '/drug.do' ? `tab-shape/${v.ITEM_SEQ}` : `${v.ITEM_SEQ}`}>
											{v.ITEM_NAME}
										</Link>
									</li>
								)
							})}
						</ul>
						{/* 페이지가 2페이지 이상일 경우 더보기 버튼 */}
						{data.totalCount > page.current*12 ?
							<div className="buttonContColumn">
								<Link className="btnMore" onClick={pagePlus}>더보기<span>({data.pageNo*12}/{data.totalCount})</span></Link>
							</div>
							: null
						}
					</div>
				) : data&&(
					// 검색결과없을 때 
					<div className="nodata">
						<i className="nodataIcon"></i>
						<p>선택한 조건에 맞는 의약품 검색결과가 없습니다.</p>
					</div>
				)
			)
			}

    </DrugCont>
  );
});

export default TabShape;
