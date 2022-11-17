import React,{memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Mypage from './Mypage';

const Login = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
  
  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value)
  }

  const onSubmit = e => {
    e.preventDefault();
    navigate('/Mypage');
  }

  return (
      <form>
        <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="email_input" />
        <input name="password" type="new_password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="password_input" />
        <button type="submit" onSubmit={onSubmit} className="login_button">로그인</button>
      </form>
    );
  });

export default Login;