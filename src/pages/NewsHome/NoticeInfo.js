/**
 * @ File Name: NoticeInfo.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2023-01-09 16:22
 * @ Description: 공지사항상세
 */

import React, { memo, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentData, getItem } from '../../slices/NoticeSlice';

import styled from 'styled-components';
import prevImg from '../../assets/img/ico-chevron-down-sm@2x.png';
import Spinner from '../../components/Spinner';
// 최신글 처리를 위한 dayjs
import dayjs from 'dayjs';
/** Buffer 디코딩을 위한 참조 */
window.Buffer = window.Buffer || require('buffer').Buffer;

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

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.NoticeSlice);

  /** 페이지가 열린 직후 (혹은 id값이 변경된 경우) 데이터 가져오기 */
  useEffect(() => {
    dispatch(getItem({ id: id }));
  }, [id]);

  // /** 데이터 값 변경에 따른 사이드 이펙트 처리 */
  // const item = useMemo(() => {
  //   if(data){
  //     console.log('if 데이터',data);
  //     // return data.data.find((v, i) => v.id == id);
  //     // return data.data.find((v, i) => v.id == id);

  //     return data[0].data;
  //   }else{
  //      //새로고침시 현재 데이터만 다시 로드
  //      dispatch(getItem({ id: id }));
  //      console.log('getItemt실행됨');
  //   }
  // },[data]);

  if (data) {
    console.log('지금데이터', data);
  }
  // if(item){console.log('지금아이템 ',item);}

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
              <h3 className="subject">
                {data[0].data.noticeTitle}
                {/* 뉴 아이콘 */}
                {dayjs(new Date()).subtract(2, 'day').format('YYYY-MM-DD') <
                data[0].data.regDate ? (
                  <i className="icoNew" />
                ) : null}
              </h3>
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
              <p
                dangerouslySetInnerHTML={{
                  __html: Buffer.from(
                    data[0].data.noticeContent.data,
                    'base64'
                  ).toString('utf8'),
                }}
              ></p>
              {/* <p style={{ textAlign: 'center' }}>
                세브란스병원, NCSI 전체 산업부문 1위 달성
                <strong>
                  존중캠페인과 비대면 의료서비스 고도화 실현해 만족도 향상 환자
                  중심 의료문화 개척해 호텔 등 제치고 최고 서비스 인정 받아
                </strong>
              </p>
              <p><br/></p>
              <p><br/></p>
              <p>세브란스병원(병원장 하종원)이 한국생산성본부 선정 2021년 국가고객만족도(NCSI) 조사에서 전체 산업분야 1위를 달성했다고 3일 밝혔다. 총점 84점으로 그동안 서비스 만족도가 높은 아파트와 호텔 등을 제치고 병원이 전체 1위를 차지한 것은 처음이다. 코로나19라는 국가재난 속에서 환자안전과 환자만족을 모두 달성하였다는 평가다.</p>
              <p><br/></p>
              <p>최근 환자존중캠페인을 통해 새로운 환자 중심의 의료문화를 만들어 나가고 있다. 세브란스병원은 환자가 병원에서 치료 받는 전 과정에서 존중과 배려를 느낄 수 있는 환자존중캠페인을 진행했다. </p>
              <p><br/></p>
              <p>‘커튼 푯말’을 설치해 환자들이 검사나 치료 중 발생할 수 있는 불필요한 신체 노출을 방지하고, 병실생활에서 지켜야 할 기본적인 에티켓을 애니메이션 교육자료로 만들어 제공하고 있다. 입원환자들을 대상으로 공감 문구를 담은 캘리그라피와 일러스트 이미지를 제작해 카카오톡으로 전송하는 ‘공감카드’에는 계절별로 힐링과 응원, 사랑, 용기 등 7가지 테마를 담았다. </p>
              <p><br/></p>
              <p>회진 게시판은 환자가 의료진에게 궁금한 점을 미리 메모해 회진시간에 자세한 설명을 들을 수 있다. 불필요한 소음과 조명을 최소화하는 수면 프로젝트와 금식 시간을 최소화하는 꿀잠과 공복탈출 프로그램으로 치유 효과와 만족도를 높였다.</p>
              <p><br/></p> */}
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
