/**
 * @ File Name: DrugInfo.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-27 19:1:00
 * @ Description: 의약품 검색 상세페이지
 */

import React, { memo, useEffect, useMemo } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getDrugSearch, getDrugDetail } from '../../slices/DrugSearchSlice';

import Spinner from '../../components/Spinner';

const DrugInfo = memo(() => {
  /** path파라미터 받기 */
  const { id } = useParams();
  // console.log('id=', id);

  const { pathname } = useLocation();

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
      // console.log('druginfo data',data);
        return data.items.find((v,i)=> v.itemSeq == id || v.ITEM_SEQ == id);
        // dispatch(getDrugSearch({item_seq:id}));
        // dispatch(getDrugDetail({itemSeq:id}));
    }else{
        //새로고침할 때 오류
        //새로고침시 현재 데이터만 다시 로드
        if(pathname == '/drug.do/tab-info/*'){
          dispatch(getDrugDetail({itemSeq:id}));
          console.log('탭인포 새로고침');
        }else{
          dispatch(getDrugSearch({item_seq:id}));
          console.log('탭셰잎 새로고침');
        }
    }
},[])

// if(item){console.log(item)};

  return (
    <div>
      <Spinner loading={loading} />
      <h1 className="pageTitle">의약품 정보</h1>
      <hr />

      {error ? (
        <h1>에러발생함</h1>
      ) : (
        item && (
          <>
            <div className="subjectArea">
              <h3 className="subject">{item.ITEM_NAME || item.itemName}</h3>
            </div>
            <div className="extendField">
              <dl>
                <dt>제조(수입) 업체명</dt>
                <dd>{item.ENTP_NAME || item.entpName}</dd>
              </dl>
            </div>
            {/* 게시물 본문 */}
            <div className="articleBody">
              {/* 이미지 */}
              <div className="drugImageSlider">
                {/* 이미지가 있을 때만 이미지 표시 */}
                {item.ITEM_IMAGE&& (
                  <img className='item' src={item.ITEM_IMAGE} alt='알약이미지' />
                )}
                {item.itemImage && (
                  <img className='item' src={item.itemImage} alt='알약이미지' />
                )}
              </div>
              <h4 className="pageSubtitle">효능효과</h4>
              <div className="indent">
              <p dangerouslySetInnerHTML={{__html: item.efcyQesitm}}></p>
              </div>
              <h4 className="pageSubtitle">용법용량</h4>
              <div className="indent">
              <p dangerouslySetInnerHTML={{__html: item.useMethodQesitm}}></p>
              <p dangerouslySetInnerHTML={{__html: item.atpnWarnQesitm}}></p>
              </div>
              <table></table>
              <h4 className="pageSubtitle">사용상 주의사항</h4>
              <div className="indent">
              <p dangerouslySetInnerHTML={{__html: item.atpnQesitm}}></p>
              <p dangerouslySetInnerHTML={{__html: item.intrcQesitm}}></p>
              <p dangerouslySetInnerHTML={{__html: item.seQesitm}}></p>
              <p dangerouslySetInnerHTML={{__html: item.depositMethodQesitm}}></p>
              </div>
              <table></table>
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
