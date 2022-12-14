/**
 * @ File Name: OutpatientInfo.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-14
 * @ Description: 외래이용안내 페이지
 */

/** import */
import React, { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import moment from "moment";

// 리덕스
import { useDispatch, useSelector } from "react-redux";

/** 컴포넌트 참조 */
// 헤더, 푸터
import MainPageHeader from "../../components/MainPageHeader";
import Footer from "../../components/Footer";


const OutpatientInfo = memo(() => {
  // top banner를 숨기기 위한 쿠키 이름
  const COOKIE_KEY1 = "HideTopBanner";
  // top banner의 체크박스 체크 유무 상태값
  const [isChecked, setIsChecked] = useState(true);

  // top banner의 열림, 닫힘 여부 확인을 위한 쿠키 이름
  const COOKIE_KEY2 = "OpenCloseTopBanner";

  // 쿠키 사용
  const [cookies, setCookie, removeCookie] = useCookies();

  // top banner의 열림, 닫힘 쿠키값(OpenCloseTopBanner)에 따라 애니메이션 적용 여부 상태값
  const [openCloseAni, setOpenCloseAni] = useState("startPoint");

  // top banner의 열림, 닫힘 스타일(마진)을 클래스이름으로 변경하는 상태값
  const [startPoint, setStartPoint] = useState();

  // 체크박스 체크 유무에 따라 HideTopBanner 쿠키 설정
  const hideTopBanner = useCallback(() => {
    if (!isChecked) {
      return;
    }
    const decade = moment();
    decade.add(1, "d");
    setCookie(COOKIE_KEY1, "true", {
      path: "/",
      expires: decade.toDate()
    });
  });

  // top banner의 체크박스 체크 유무 핸들러
  const checkHandler = useCallback(() => {
    setIsChecked(!isChecked);
  });

  // 닫힘 버튼을 눌렀을 때, OpenCloseTopBanner 쿠키 설정
  const openTopBanner = useCallback(() => {
    setStartPoint("startPoint closeAni");
    setCookie(COOKIE_KEY2, "true", {
      path: "/"
    });
  });

  // 페이지 첫 로드 시, 최상단 이동 및 OpenCloseTopBanner 쿠키 제거
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    if (cookies[COOKIE_KEY2]) {
      setOpenCloseAni("openAni");
      removeCookie(COOKIE_KEY2, "true", {
        path: "/"
      });
    }
  }, []);

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CustomerBoardSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  return (
    <>
      <MainPageHeader />
      <Footer />
    </>
  );
});

export default OutpatientInfo;
