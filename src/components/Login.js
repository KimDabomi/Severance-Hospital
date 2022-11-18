import React,{memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../assets/img/login.png';

const Container = styled.div`
  .nav {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #eee;
    padding: 0 10% 0 10%;
    box-sizing: border-box;
    line-height: 120px;

    img {
      width: 15%;  
    }

    a {
      font-size: 28px;
      
      &:first-child {
        margin-right: 12%;
      }
      margin-right: 5%;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  p {
    text-align: center;
    padding: 70px 0;
    font-size: 44px;
  }
  .login_section {
    text-align: center;
    margin-left: 10%;

    a {
      display: block;
      float: left;
      width: 44%;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      border: 1px solid #ccc;

      &:first-child {
        border-bottom: 5px solid rgb(255,234,169);
      }
      &:last-child {
        background-color: #eee;
      }
    }
  }
  form {
    width: 40%;
    margin-top: 200px;
    margin-left: 10%;
    input {
      width: 60%;
      height: 60px;
      margin: 2% 0 0 12%;
      border: 1px solid #ccc;
    }
    button {
      width: 20%;
    }
  }
`;
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
    navigate('/mypage');
  }

  return (
    <Container>
      <div>
        <div className='nav'>
          <Link to='/login'><img src={loginImg} alt="통합로그인센터" /></Link>
          <Link to='/login'>로그인</Link>
          <Link to='/join_us'>회원가입</Link>
          <Link to='/'>아이디/비밀번호 찾기</Link>
          <Link to='/'>병원등록번호 조회</Link>
          <Link to='/'>이용정책</Link>
        </div>
        <p>로그인</p>
        <div className='login_section'>
          <Link to='/login'>세브란스 로그인</Link>
          <Link to='/login'>본인인증 로그인</Link>
        </div>
        <form>
          <input name="email" type="email" placeholder="아이디를 입력해 주세요." value={email} onChange={onEmailHandler} className="email_input" />
          <input name="password" type="new_password" placeholder="비밀번호를 입력해 주세요." value={password} onChange={onPasswordHandler} className="password_input" />
          <button type="submit" onSubmit={onSubmit} className="login_button">로그인</button>
        </form>
      </div>
    </Container>
  );
});

export default Login;