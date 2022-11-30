/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-28 15:1:00
 * @ Description: 의약품 검색 메인페이지
 */


import React, { memo } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";

import TabShape from "./TabShape";
import TabInfo from "./TabInfo";
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';

const DrugSearch = memo(() => {
    return (
        <div className='pageCont'>
            <Header />
            <h1 className='pageTitle'>의약품</h1>

            <nav className='tabMenu'>
                <NavLink to='tab-shape'>약모양으로 찾기</NavLink>
                <NavLink to='tab-info'>약정보 찾기</NavLink>
            </nav>

            <Routes>
                <Route path='tab-shape' element={<TabShape />} />
                <Route path='tab-info' element={<TabInfo />} />
            </Routes>
            <Footer />
        </div>
    );
});

export default DrugSearch;