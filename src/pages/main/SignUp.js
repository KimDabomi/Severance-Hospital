import React,{memo} from "react";
import {Routes, Route} from "react-router-dom";
import Login from '../../components/Login';
import JoinWay from '../../components/JoinWay';

const SignUp = memo(() => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join_way" element={<JoinWay />} />
        </Routes>
    </div>
  );
});

export default SignUp;