import React,{memo} from "react";
import LoginPage from '../../components/LoginPage';
import MyPage from '../../components/MyPage';
import user from '../../components/MyPage';

const Login = memo(() => {
    return (
        user.isLogin ? <MyPage /> : <LoginPage />
    );
});

export default Login;