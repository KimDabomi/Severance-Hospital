/**
 * @ File Name: NewsView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 15:20:00
 * @ Description: 뉴스 하위페이지 언론보도 페이지
 */
import React, { memo, useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/NewsSlice';
import { useQueryString } from '../../hooks/useQueryString';

import Spinner from '../../components/Spinner';
import Pagenation from '../../components/Pagenation';

const NewsView = memo(() => {
  /** QueryString 변수 받기 */
  const { query, page = 1 } = useQueryString();

  /** 화면 갱신을 위한 dummy 상태값 */
  const [isUpdate, setUpdate] = useState(0);

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { pagenation, data, loading, error } = useSelector(
    (state) => state.NewsSlice
  );

  /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
  // 화면 새로고침에 대한 상태값이 변경된다면 데이터를 새로 로드함
  useEffect(() => {
    dispatch(
      getList({
        query: query,
        page: page,
      })
    );
  }, [isUpdate, query, page]);

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  if (data) {
    console.log('뉴스data', data);
  }

  return (
    <div>
      <div className="bgAll">
        <div className="pageCont">
          <h1 className="pageTitle">언론보도</h1>
          {/* 검색form */}
          <form>
            <div>
              <div className="searchBox">
                <input
                  type="text"
                  name="itemName"
                  placeholder="검색어를 입력해 주세요"
                  className="formControl"
                />
                <span>
                  <button type="submit" className="btnSearch">
                    <i></i>
                  </button>
                </span>
              </div>
            </div>
          </form>

          {error ? (
            <h1>에러발생함</h1>
          ) : (
            data && (
              <div>
                {/* 검색결과 */}
                <div className="bbsList">
                    {data.data.map((v, i) => {
                      return (
                        <div className="bbsItem">
                        <a key={i} className="inner" href={v.newsLink} rel="noopener noreferrer" target="_blank">
                          <div className="bbssubjectArea">
                            <strong>{v.newsTitle}</strong>
                          </div>
                          <div className="infoArea">
                            <span className="date">2022-11-30</span>
                          </div>
                        </a>
                        </div>
                      );
                    })}

                </div>

                {/* 더보기버튼 */}
                <div className="buttonContColumn">
                  <Link className="btnMore">더보기</Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
});

export default NewsView;
