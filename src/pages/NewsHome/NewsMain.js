/**
 * @ File Name: NewsMain.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-06
 * @ Description: 뉴스 메인 페이지
 */

import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';
import corona from '../../assets/img/corona.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getYoutube } from '../../slices/YoutubeSlice';

import NewsHomeCarousel from '../../components/NewsHomeCarousel';
import NewsHomeNoticeCarousel from '../../components/NewsHomeNoticeCarousel';

const NewsMain = memo(() => {
  //dispatch함수 생성
	const dispatch = useDispatch();
	//hook을 통해 slice가 관리하는 상태값 가져오기
	const { data, error } = useSelector((state) => state.YoutubeSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(()=>{
    dispatch(getYoutube());
  if(data){
    console.log(data);
  }
  },[])


  return (
    <div>
      <Header />
      <div className="pageCont">
        <div className="bgWhiteBlue">
          <div className="newsTopSlider">
            <img src={corona} alt="코로나 관련 진료 안내"></img>
            <div className="textArea">
              <h4>코로나 관련 진료 안내</h4>
              <p>
                성인 안심진료소 운영시간평일 : 08:30-11:30, 13:00-15:30 토요일 :
                08:30-11:30 공휴일 휴진 장소 : 본관 3층 출입구 앞(건물 외부)
                소아 안심진료소(18세 미만) 운영시간평일: 9:00-11:30, 13:30-15:30
                토요일 : 9:00-11:30 공휴일 휴진 장소: 어린이병원 1층
                정문(회전문) 예진데스크로 내원
              </p>
              <Link>상세보기 &gt;</Link>
            </div>
          </div>
        </div>

        {/* slick-slide */}
        <div className="wideWrap">
          <NewsHomeNoticeCarousel />
        </div>
        <div className="wideWrap">
          <NewsHomeCarousel />
        </div>
      </div>

      {/* 각 페이지 링크로 이동 */}
      {/* <div className="iconListBox">
        <ul className='iconSlider'>
          <li>
            <Link>
            <i className='icoNews'></i>
            <span className='textIcon'>언론보도</span>
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="snsNewsWrap" style={{ backgroundColor: '#F6F6F6' }}>
        <h1 className="pageTitle">SNS소식</h1>
        <div className="tabContentCont pageCont">
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">페이스북</h3>
            <div className="contentBox">content</div>
          </div>
          <div className="tabContent" id="tabContentFacebook">
            <h3 className="title3">유튜브</h3>
            <div className="contentBox">
              <div className="youtubeArticle">
                {data && 
                  data.map((v,i)=>{
                    return(
                      <div className="thumbItem" key={i}>
                        <Link to='https://www.youtube.com/watch?v=DJTWAXxj0fQ' target="_blank">
                          <div className="thumb">
                            <img src={v.snippet.thumbnails.medium.url} alt='새창'></img>
                            <i className='icoMoviePlay'></i>
                          </div>
                          <div className="subjectArea">{v.snippet.title}<strong></strong></div>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default NewsMain;
