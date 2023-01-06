/**
 * @ File Name: NewsView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-05 15:20:00
 * @ Description: 뉴스 하위페이지 언론보도 페이지
 */
import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../../slices/NewsSlice';
import { useQueryString } from '../../hooks/useQueryString';

import Spinner from '../../components/Spinner';

const NewsView = memo(() => {
  /** QueryString 변수 받기 */
  const { query } = useQueryString();

  //페이지 번호
  const page = useRef(1);

  /** 화면 갱신을 위한 dummy 상태값 */
  const [isUpdate, setUpdate] = useState(0);

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.NewsSlice
  );

  /** 최초 마운트시 리덕스를 통해 목록을 조회한다. */
  // 화면 새로고침에 대한 상태값이 변경된다면 데이터를 새로 로드함
  useEffect(() => {
    dispatch(getList({
      query: query,
      page: 1,
      rows: 12
    }
    ));
  }, [isUpdate, query, page]);

  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  if (data) {
    console.log('뉴스data', data);
  }

  /** 검색했을 때 이벤트 */
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();
    //검색어
    const query = e.currentTarget.itemName.value;
    //검색어에 따라 URL 구성
    let redirectUrl = query ? `?query=${query}` : "/news/media.do";
    navigate(redirectUrl);
  },[navigate]);

  /** 더보기 버튼 (페이지) 함수 */
  const pagePlus = useCallback((e) => {
    console.log("더보기버튼 누름", page);
    //페이지 번호 1증가
    page.current++;

		//추가 검색 결과를 요청
		dispatch(getList({
			query: query,
			page: page.current
		}));
	})

  return (
    <div>
      <div className="bgAll">
        <div className="pageCont">
          <h1 className="pageTitle">언론보도</h1>
          {/* 검색form */}
          <form onSubmit={onSearchSubmit}>
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
          ) : data && data.data[1] ? (
            <div>
              <Spinner loading={loading} />
              {/* 검색결과 */}
              <div className="bbsList">
                {data.data.map((v, i) => {
                  return (
                    <div className="bbsItem">
                      <a
                        key={i}
                        className="inner"
                        href={v.newsLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="bbssubjectArea">
                          <strong>{v.newsTitle}</strong>
                        </div>
                        <div className="infoArea">
                          <span className="date">
                            {v.regDate.substring(0, 10)}
                          </span>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* 페이지가 2페이지 이상일 경우 더보기 버튼 */}
              {data.pagenation.nowPage !== data.pagenation.totalPage? (
                <div className="buttonContColumn">
                  <Link className="btnMore" onClick={pagePlus}>더보기</Link>
                </div>
              ) : null}
            </div>
          ) : (
            // 검색결과없을 때
            <div className="nodata">
              <i className="nodataIcon"></i>
              <p>검색된 결과가 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default NewsView;
