/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-18 19:1:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { Link, useParams, useNavigate, Routes,Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getDrugItem } from '../../slices/DrugSearchSlice';

import Spinner from '../../components/Spinner';

const DrugInfo = memo(() => {
  /** path파라미터 받기 */
  const { id } = useParams();
  console.log('id=', id);

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  //dispatch함수 생성
  const dispatch = useDispatch();
  //hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector(
    (state) => state.DrugSearchSlice
  );

  /** 데이터 가져오기 */
  useEffect(()=>{
    dispatch(getDrugItem({id:id}));
  },[]);

  if(data){
    console.log(data);
  }




  return (
    <div>
      <Spinner loading={loading} />
        <h1 className="pageTitle">의약품 정보</h1>
        <hr />
        <div className="subjectArea">
          <h3 className="subject">가나릴정</h3>
        </div>
        <div className="extendField">
          <dl>
            <dt>제조(수입) 업체명</dt>
            <dd>영풍제약(주)</dd>
          </dl>
        </div>
        {/* 게시물 본문 */}
        <div className="articleBody">
          {/* 이미지 */}
          <div className="drugImageSlider">
            {/* <img className='item'></img> */}
          </div>
          <h4 className="pageSubtitle">효능효과</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
          <h4 className="pageSubtitle">용법용량</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
          <table></table>
          <h4 className="pageSubtitle">사용상 주의사항</h4>
          <div className="indent">
            내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
          </div>
        </div>

        <div className="buttonCont">
          <Link className="buttonBlue" to="/drug.do">
            목록
          </Link>
          <button className="buttonWhite marginleft" type="button">
            공유
          </button>
        </div>
      </div>
  );
});

export default DrugInfo;
