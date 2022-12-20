/** import */
import React from "react";
import { Routes, Route } from "react-router-dom";

/** 메인 */
import MainPage from "./pages/main/MainPage";
/** 사이트맵 */
import AllMenu from "./pages/SiteMap/SiteMap";
/** 오시는 길 */
import Map from "./pages/Map/Map";
/** 이용안내 */
import Guide from "./pages/Guide/Guide";
/** 의료인 */
import Cooperation from "./pages/MedicalStaff/Cooperation";

// 로그인, 아이디/비밀번호 찾기
import StaffSearch from "./pages/staff/StaffSearch";
import Login from "./pages/Login/Login";
import FindId from "./pages/Login/FindId";
import FindIdEmail from "./pages/Login/FindIdEmail";
import FindPassword from "./pages/Login/FindPassword";
import FindPasswordEmail from "./pages/Login/FindPasswordEmail";

// 회원가입
import JoinWay from "./pages/Join/JoinWay";
import JoinAccept from "./pages/Join/JoinAccept";
import JoinAcceptGlobal from "./pages/Join/JoinAcceptGlobal";
import JoinCertificate from "./pages/Join/JoinCertificate";
import JoinUs from "./pages/Join/JoinUs";
import JoinComplete from "./pages/Join/JoinComplete";
import JoinAlready from "./pages/Join/JoinAlready";

//고객의소리
import CustomerBoardMain from './pages/CustomerBoard/CustomerMain';

//의약품검색
import DrugSearchMain from './pages/DrugSearch/DrugSearchMain';

//뉴스홈
import NewsAllMain from "./pages/NewsHome/NewsAllMain";


//마이페이지
import MysevMain from "./pages/MYSevrance/MysevMain";
import DetailsEdit from './pages/MYSevrance/DetailsEdit';
import ISevrance from './pages/MYSevrance/ISevrance';
import ChangePassward from './pages/MYSevrance/ChangePassward';
import ResultInquiry from './pages/MYSevrance/ResultInquiry';
import Result from './pages/MYSevrance/Result';
import Withdraw from './pages/MYSevrance/Withdraw';

// 의료인 정보
import StaffProfile from "./pages/staff/StaffProfile";

// 진료 예약
import AppointmentMain from "./pages/Appointment/AppointmentMain";
import ApptSelect from "./pages/Appointment/ApptSelect";

// 병원개요
import AboutSev from "./pages/AboutSevrance/AboutSev";
import Introduction from "./pages/AboutSevrance/Introduction";

function App() {
  return (
    <div>
      <Routes>
        {/* 메인 */}
        <Route path="/" exapt={true} element={<MainPage />} />
        {/* 사이트맵 */}
        <Route path="/all_menu" exapt={true} element={<AllMenu />} />
        {/* 이용안내 */}
        <Route path="/guide/*" element={<Guide />} />
        {/* 오시는 길 */}
        <Route path="/map.do/*" element={<Map />} />
        {/* 의료인 */}
        <Route path="/cooperation/*" element={<Cooperation />} />

        {/* 회원가입 */}
        <Route path="/join_way" element={<JoinWay />} />
        <Route path="/join_accept" element={<JoinAccept />} />
        <Route path="/join_accept_global" element={<JoinAcceptGlobal />} />
        <Route path="/join_certificate" element={<JoinCertificate />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/join_complete" element={<JoinComplete />} />
        <Route path="/join_already" element={<JoinAlready />} />

        {/* 로그인, 아이디/비밀번호 찾기 */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/find_id" element={<FindId />} />
        <Route path="/find_id_email" element={<FindIdEmail />} />
        <Route path="/find_password" element={<FindPassword />} />
        <Route path="/find_password_email" element={<FindPasswordEmail />} />

        {/* 고객의소리 페이지 라우팅*/}
        <Route path="/customer.do/*" element={<CustomerBoardMain />} />

        <Route path="/staff" element={<StaffSearch />} />
        <Route path="/staff/*" element={<StaffProfile />} />

        {/* 의약품검색 페이지 라우팅 */}
        <Route path="/drug.do/*" element={<DrugSearchMain />} />

        {/* 뉴스홈 페이지 라우팅 */}
        <Route path="/news/*" element={<NewsAllMain />} />
        {/* <Route path="/news/media.do" element={<NewsView />} />
        <Route path="/news/notice.do" element={<NoticeView />} /> */}

        {/* 마이페이지 라우팅 */}
        <Route path="/mysevrance" element={<MysevMain />} />
        <Route path="/mysevrance/iseverance/mywriting" element={<ISevrance />} />
        <Route path="/details_edit" element={<DetailsEdit />} />
        <Route path='/change_passward' element={<ChangePassward />} />
        <Route path='/resultinquiry' element={<ResultInquiry />} />
        <Route path='/result' element={<Result />} />
        <Route path='/withdraw' element={<Withdraw />} />

        {/* 진료 예약 */}
        <Route path="/appointment_main/*" element={<AppointmentMain />} />
        {/* 온라인 예약 */}
        <Route path="/apptSelect" element={<ApptSelect />} />

        {/* 병원개요 */}
        <Route path="/about_sev" element={<AboutSev />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
