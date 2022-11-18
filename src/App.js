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

export default App;
