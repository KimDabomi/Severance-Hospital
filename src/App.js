import React,{memo} from "react";
import {Link,Routes, Route} from "react-router-dom";

import MainPage from "./pages/main/MainPage";
// import SignUp from "./pages/main/SignUp";
import JoinUs from "./components/JoinUs";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = memo(() => {
  return (
    <div>
      <Header />
      <Link to='/login'>로그인</Link>
      <Link to='/join_us'>회원가입</Link>
      <Routes>
        <Route path='/' exact={true} element={<MainPage />} />
        <Route path='/join_us' element={<JoinUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
});

export default App;
