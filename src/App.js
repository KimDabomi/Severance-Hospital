<<<<<<< HEAD
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
        <Route path="/suggest.do/id" element={<CustomerBoardView/>}/>
      </Routes>
    </div>
  );
}
=======
import React,{memo} from "react";
import {Link,Routes, Route} from "react-router-dom";

import MainPage from "./pages/main/MainPage";

import JoinUs from "./components/JoinUs";
import Login from "./components/Login";
import MyPage from "./components/MyPage";

const App = memo(() => {
  return (
    <div>
      {/* <Link to='/login'>로그인</Link>
      <Link to='/join_us'>회원가입</Link>
      <Link to='/mypage'>마이페이지</Link> */}
      <Routes>
        <Route path='/' exact={true} element={<MainPage />} />
        <Route path='/join_us' element={<JoinUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
      </Routes>
    </div>
  );
});
>>>>>>> login-kdbm

export default App;
