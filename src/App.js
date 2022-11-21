import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main/MainPage";

//고객의소리
import CustomerBoardList from './pages/CustomerBoard/CustomerBoardList';
import CustomerBoardAdd from './pages/CustomerBoard/CustomerBoardAdd';
import CustomerBoardView from './pages/CustomerBoard/CustomerBoardView';

function App() {
  return (
    <div>
      <Link to="main_page"></Link>
      <Routes>
        <Route path="/" exapt={true} element={<MainPage />} />

        {/* 고객의소리 페이지 라우팅*/}
        <Route path='/customer.do' element={<CustomerBoardList />}/>
        <Route path="/suggest.do" element={<CustomerBoardAdd/>}/>
        <Route path="/suggestion/:id" element={<CustomerBoardView/>}/>
      </Routes>
    </div>
  );
}

export default App;
