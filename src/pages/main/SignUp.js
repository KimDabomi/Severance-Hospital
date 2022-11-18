import React,{memo} from "react";
import {Routes, Route} from "react-router-dom";
import Login from '../../components/Login';
import JoinUs from '../../components/JoinUs';

const SignUp = memo(() => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join_us" element={<JoinUs />} />
        </Routes>
    </div>
  );
});

export default SignUp;