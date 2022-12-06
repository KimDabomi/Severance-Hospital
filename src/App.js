import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import StaffSearch from "./pages/staff/StaffSearch";
import MainPage from "./pages/main/MainPage";
import Login from "./components/Login";
import JoinWay  from "./components/JoinWay";
import JoinAccept from "./components/JoinAccept";
import JoinAcceptGlobal from "./components/JoinAcceptGlobal";
import JoinCertificate from "./components/JoinCertificate";
import JoinUs  from "./components/JoinUs";
import JoinComplete from "./components/JoinComplete";
import JoinAlready from "./components/JoinAlready"

//고객의소리
import CustomerBoardList from './pages/CustomerBoard/CustomerBoardList';
import CustomerBoardAdd from './pages/CustomerBoard/CustomerBoardAdd';
import CustomerBoardView from './pages/CustomerBoard/CustomerBoardView';

//의약품검색
import DrugSearch from './pages/DrugSearch/DrugSearch';
import DrugInfo from './pages/DrugSearch/DrugInfo';

//뉴스홈
import NewsMain from './pages/NewsHome/NewsMain';
import NewsView from './pages/NewsHome/NewsView';
import NoticeView from './pages/NewsHome/NoticeView';

// 사이트맵
import AllMenu from './pages/SiteMap/SiteMap';

function App() {
  return (
    <div>
      <Link to="main_page"></Link>
      <Routes>
        <Route path="/" exapt={true} element={<MainPage />} />
        <Route path="/all_menu" element={<AllMenu />} />

        <Route path='/login' element={<Login />} />
        <Route path='/join_way' element={<JoinWay />} />
        <Route path='/join_accept' element={<JoinAccept />} />
        <Route path='/join_accept_global' element={<JoinAcceptGlobal />} />
        <Route path='/join_certificate' element={<JoinCertificate />} />
        <Route path='/join_us' element={<JoinUs />} />
        <Route path='/join_complete' element={<JoinComplete />} />
        <Route path='/join_already' element={<JoinAlready />} />
        
        {/* 고객의소리 페이지 라우팅*/}
        <Route path='/customer.do' element={<CustomerBoardList />}/>
        <Route path="/suggest.do" element={<CustomerBoardAdd/>}/>
        <Route path="/suggestion/:id" element={<CustomerBoardView/>}/>
        <Route path="/staff" element={<StaffSearch/>}/>

         {/* 의약품검색 페이지 라우팅 */}
         <Route path='/drug.do/*' element={<DrugSearch />}/>
         <Route path='/drug.do/drug/id' element={<DrugInfo />}/>

         {/* 뉴스홈 페이지 라우팅 */}
         <Route path='/news' element={<NewsMain />}/>
         <Route path='/news/media.do' element={<NewsView />}/>
         <Route path='/news/notice.do' element={<NoticeView />}/>
      </Routes>
    </div>
  );
}

export default App;
