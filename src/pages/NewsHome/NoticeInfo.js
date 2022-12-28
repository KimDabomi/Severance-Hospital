/**
 * @ File Name: NoticeInfo.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-28 18:00
 * @ Description: 공지사항상세
 */

import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import prevImg from '../../assets/img/ico-chevron-down-sm@2x.png';

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
  return (
    <Div>
      <div className="bgAll">
        <div>
          <h1 className="pageTitle">공지사항</h1>
        </div>
      </div>

      <div className="pageCont">
        <div className="subjectArea">
          <h3 className="subject">추석 연휴 병동 면회 제한 안내</h3>
          <div className="articleInfo">
            <span>관리자</span>
            <span className="itemInfo">2020-09-29</span>
            <span className="itemInfo">
              <strong>조회수 &nbsp;</strong>
            </span>
            <span>19190</span>
          </div>
        </div>
        <div className="articleBody">
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
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
    </Div>
  );
});

export default NoticeInfo;
