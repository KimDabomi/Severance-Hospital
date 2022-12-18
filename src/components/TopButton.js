/**
 * @ File Name: TopButton.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-16 16:1:00
 * @ Description: 탑버튼
 */

import React, { memo, useCallback, useRef } from 'react';
import styled from 'styled-components';
import buttonimg from '../assets/img/ico-chevron-up@2x.png';

const Div = styled.div`
  .topButton {
    box-sizing: border-box;
    position: fixed;
    bottom: 15px;
    right: 15px;
    margin-left: 0;
    position: fixed;
    z-index: 100;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    padding-top: 22px;
    font-size: 12px;
    border: 1px solid #d2d2d2;
    ${`background: #fff url(${buttonimg}) no-repeat center 11px;`}
    background-size: 15px auto;
    color: #333;
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

const TopButton = memo(() => {
  
  const topBtn = useRef(null);

  //스크롤 일정 내렸을 때 나타나기
  window.addEventListener('scroll',function(){
    if(this.scrollY > 250){
      topBtn.current.style.opacity = '1';
    }else{
      topBtn.current.style.opacity = '0';
    }
  })
  //클릭했을 때 실행되는 이벤트
  const clickEvent = useCallback((e)=>{
    e.preventDefault();
    window.scrollTo({top:0, behavior: 'smooth'})
  })

  
    return (
    <Div>
      <a className="topButton" onClick={clickEvent} ref={topBtn}>
        TOP
      </a>
    </Div>
  );
});

export default TopButton;
