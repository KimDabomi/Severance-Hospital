import React, { memo, useEffect, useMemo, useCallback } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrentData,
  deleteItem,
  getItem,
} from '../../slices/CustomerBoardSlice';
import dayjs from 'dayjs';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CustomerBoardView = memo(() => {
  /** path파라미터 받기 */
  const { id } = useParams();

  /**리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.CustomerBoardSlice
  );

  /** 데이터 가져오기 */
  useEffect(() => {
    dispatch(getCurrentData());
  }, []);

  /** 데이터 값 변경에 따른 사이드 이펙트 처리 */
  const item = useMemo(() => {
    if (data) {
      return data.find((v, i) => v.id == id);
    } else {
      //새로고침시 현재 데이터만 다시 로드
      dispatch(getItem({ id: id }));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <h4 className="pageSubtitle">고객의소리 게시판</h4>

      {error ? (
        <h1> 에러발생함 </h1>
      ) : (
        item && (
          <div>
            <div className="subjectArea">
              <h3>{item.title}</h3>
              <span>{dayjs(new Date(item.date)).format('YYYY-MM-DD')}</span>&nbsp;|&nbsp;<span>{item.name}</span>
              <button type="button"><NavLink to={`/suggetion_edit/${item.id}`}>수정</NavLink></button>
            </div>
            <div className="extendField">
              <dl>
                <dt>접수구분</dt>
                <p>{item.register}</p>
              </dl>
              <dl>
                <dt>기관</dt>
                <p>{item.hospital}</p>
              </dl>
              <dl>
                <dt>부서</dt>
                <p>{item.register}</p>
              </dl>
            </div>
            <div className="articleArea">
              <div>Contents</div>
            </div>
          </div>
        )
      )}

      <button type="button" className='buttonLinkCont'>
        <NavLink to="/customer.do">목록</NavLink>
      </button>
      <button type="button">삭제</button>
      <Footer />
    </div>
  );
});

export default CustomerBoardView;
