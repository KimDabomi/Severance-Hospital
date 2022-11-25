import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import StaffSearch from "./pages/staff/StaffSearch";

//고객의소리
import CustomerBoardAdd from './pages/CustomerBoard/CustomerBoardAdd';
import CustomerBoardList from './pages/CustomerBoard/CustomerBoardList';
import CustomerBoardView from './pages/CustomerBoard/CustomerBoardView';
//의약품검색
import DrugSearch from './pages/DrugSearch/DrugSearch';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exapt={true} element={<MainPage />} />

        {/* 고객의소리 페이지 라우팅*/}
        <Route path='/customer.do' element={<CustomerBoardList />}/>
        <Route path="/suggest.do" element={<CustomerBoardAdd/>}/>
        <Route path="/suggest.do/id" element={<CustomerBoardView/>}/>

         {/* 의약품검색 페이지 라우팅 */}
         <Route path='/drug.do/*' element={<DrugSearch />}/>
      </Routes>
    </div>
  );
}

export default App;
