/**
 * @ File Name: NoticeInfo.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-09 14:35
 * @ Description: 공지사항상세
 */

import React, { memo, useEffect, useCallback, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from '../../slices/NoticeSlice';

import styled from 'styled-components';
import prevImg from '../../assets/img/ico-chevron-down-sm@2x.png';
import Spinner from '../../components/Spinner';

const Div = styled.div`
  .subjectArea {
    border-top: 1px solid black;
  }

  .itemInfo {
    margin-left: 15px;
    padding-left: 16px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -7px;
      width: 1px;
      height: 15px;
      background-color: #dadada;
    }
  }

  .buttonCont {
    padding-bottom: 0;
  }

  .articleNav {
    font-weight: bold;
    margin-top: 60px;
    border-top: 1px solid #e6e6e6;
    /* font-family: -apple-system, BlinkMacSystemFont, "NanumGothic", "malgungothic", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
     */

    li {
      padding: 12px 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
    }

    strong {
      position: relative;
      padding: 0 45px 0 28px;
      color: #666;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -4.5px;
        width: 15px;
        height: 9px;
        ${`background: url(${prevImg}) no-repeat;`}
        background-size: cover;
      }
    }

    /* 이전글 */
    .prev {
      strong {
        &:before {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const NoticeInfo = memo(() => {
  /** path 파라미터 받기 */
  const { id } = useParams();

  /** 버퍼 디코딩 */
  const [buf, setBuf] = useState('');

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.NoticeSlice);

  /** 페이지가 열린 직후 (혹은 id값이 변경된 경우) 데이터 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: id }));
  }, [id]);

  /** Buffer 디코딩을 위한 참조 */
  window.Buffer = window.Buffer || require("buffer").Buffer;

  return (
    <Div>
      <div className="bgAll">
        <div>
          <h1 className="pageTitle">공지사항</h1>
        </div>
      </div>

      {error ? (
        <h1>에러발생함</h1>
      ) : (
        data[0] && (
          <div className="pageCont">
            <Spinner loading={loading} />
            <div className="subjectArea">
              <h3 className="subject">{data[0].data.noticeTitle}</h3>
              <div className="articleInfo">
                <span>관리자</span>
                <span className="itemInfo">{data[0].data.regDate}</span>
                <span className="itemInfo">
                  <strong>조회수 &nbsp;</strong>
                </span>
                <span>{data[0].data.hits}</span>
              </div>
            </div>
            <div className="articleBody">
              {/* {Buffer.from(data[0].data.noticeContent.data, "base64").toString('utf8')} */}
              <p dangerouslySetInnerHTML={{__html: Buffer.from(data[0].data.noticeContent.data, "base64").toString('utf8')}}></p>
            </div>

            <div className="buttonCont">
              <Link className="buttonBlue" to="/news/notice.do">
                목록
              </Link>
            </div>

            <ul className="articleNav">
              <li className="prev">
                <strong>이전글</strong>
                <Link>이전글 제목제목</Link>
              </li>
              <li className="next">
                <strong>다음글</strong>
                <Link>다음글 제목제목</Link>
              </li>
            </ul>
          </div>
        )
      )}
    </Div>
  );
});

export default NoticeInfo;
