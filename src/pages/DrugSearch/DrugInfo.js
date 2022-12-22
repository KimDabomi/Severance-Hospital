/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-21 19:1:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getDrugSearch, getDrugDetail } from '../../slices/DrugSearchSlice';

import Spinner from '../../components/Spinner';

const DrugInfo = memo(() => {
  /** path파라미터 받기 */
  const { id } = useParams();
  console.log('id=', id);

  //dispatch함수 생성
  const dispatch = useDispatch();
  //hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector(
    (state) => state.DrugSearchSlice
  );

  /** 데이터 가져오기 */
  // useEffect(() => {
  //   dispatch(getDrugSearch({ item_seq: id })); 
  //   dispatch(getDrugDetail({ itemSeq: id }));
  // }, []);


  /** 데이터 가져오기 */
  useEffect(()=>{
    dispatch(getCurrentData());
  },[]);

  /** 데이터 값 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(()=>{
    if(data){
        // return data.items.find((v,i)=> v.item_seq == id || v.itemSeq == id);
        dispatch(getDrugSearch({item_seq:id}));
    }else{
        //새로고침할 때 오류
        //새로고침시 현재 데이터만 다시 로드
        dispatch(getDrugSearch({item_seq:id}));
    }
},[])


  if (data) {
    console.log('Drugdata : ',data);
  }

  if (item) {
    console.log('ITEM : ',item);
  }

  return (
    <div>
      <Spinner loading={loading} />
      <h1 className="pageTitle">의약품 정보</h1>
      <hr />

      {error ? (
        <h1>에러발생함</h1>
      ) : (
        data && (
          <>
            <div className="subjectArea">
              <h3 className="subject">{data.items[0].ITEM_NAME}</h3>
            </div>
            <div className="extendField">
              <dl>
                <dt>제조(수입) 업체명</dt>
                <dd>{data.items[0].ENTP_NAME}</dd>
              </dl>
            </div>
            {/* 게시물 본문 */}
            <div className="articleBody">
              {/* 이미지 */}
              <div className="drugImageSlider">
                <img className='item' src={data.items[0].ITEM_IMAGE} alt='알약이미지' />
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
          </>
        )
      )}

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
