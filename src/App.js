import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import StaffSearch from "./pages/staff/StaffSearch";
import MainPage from "./pages/main/MainPage";
import Login from "./components/Login";
import JoinWay  from "./components/JoinWay";
import JoinAccept from "./components/JoinAccept";
import JoinUs  from "./components/JoinUs";

//고객의소리
import CustomerBoardList from './pages/CustomerBoard/CustomerBoardList';
import CustomerBoardAdd from './pages/CustomerBoard/CustomerBoardAdd';
import CustomerBoardView from './pages/CustomerBoard/CustomerBoardView';

//의약품검색
import DrugSearch from './pages/DrugSearch/DrugSearch';


function App() {
  return (
    <div>
      <Link to="main_page"></Link>
      <Routes>
        <Route path="/" exapt={true} element={<MainPage />} />

        {/* 고객의소리 페이지 라우팅*/}
        <Route path='/login' element={<Login />} />
        <Route path='/join_way' element={<JoinWay />} />
        <Route path='/join_accept' element={<JoinAccept />} />
        <Route path='/join_us' element={<JoinUs />} />
        
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
