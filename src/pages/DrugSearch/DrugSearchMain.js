/**
 * @ File Name: CustomerBoardView.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-20 16:1:00
 * @ Description: 의약품 검색 메인페이지
 */

import React, { memo } from 'react';
import { NavLink, Routes, Route, useLocation } from 'react-router-dom';

import DrugSearch from './DrugSearch';
import TabShape from './TabShape';
import TabInfo from './TabInfo';
import DrugInfo from './DrugInfo';
import Header from '../../components/MainPageHeader';
import Footer from '../../components/Footer';

const DrugSearchMain = memo(() => {
  return (
    <div>
      <Header />
      <div className="bgAll">
        <div className="pageCont">
          <Routes>
            <Route path="/*" element={<DrugSearch />} />
			<Route path="/tab-info/:id" element={<DrugInfo />} />
			<Route path="/tab-shape/:id" element={<DrugInfo />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default DrugSearchMain;
