import React, { memo } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";

import TabShape from "./TabShape";
import TabInfo from "./TabInfo";

const DrugSearch = memo(() => {
    return (
        <div className='pageCont'>
            <h1 className='pageTitle'>의약품</h1>

            <nav className='tabMenu'>
                <NavLink to='tab-shape'>약모양으로 찾기</NavLink>
                <NavLink to='tab-info'>약정보 찾기</NavLink>
            </nav>

            <Routes>
                <Route path='tab-shape' element={<TabShape />} />
                <Route path='tab-info' element={<TabInfo />} />
            </Routes>
        </div>
    );
});

export default DrugSearch;