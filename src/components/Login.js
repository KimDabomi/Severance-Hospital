import React,{memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../assets/img/login.png';

const Container = styled.div`
position: relative;
  .nav {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #eee;
    padding: 45px 10% 0 10%;
    box-sizing: border-box;

    img {
      width: 15%; 
      height: 50%;
      float: left; 
      margin: 0 12% 0 0;
    }

    a {
      font-size: 24px;
      
      margin-right: 5%;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  h1 {
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
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: bold;
      border: 1px solid #ccc;

      &:first-child {
        border-bottom: 5px solid rgb(255,234,169);
      }
      &:last-child {
        background-color: #eee;
      }
    }
  }
  .login_input {
    width: 40%;
    margin: 140px 0 0 9%;
    position: relative;

    .email_input,.password_input {
      width: 55%;
      height: 60px;
      margin: 2% 0 0 12%;
      border: 1px solid #ccc;
      padding-left: 3%;
      box-sizing: border-box;
      font-size: 18px;
    }
    button {
      width: 20%;
      height: 135px;
      position: absolute;
      top: 9.5%;
      right: 9%;
      background-color: rgb(0,148,251);
      color: white;
      border: 0;
      font-size: 22px;
      border-radius: 4%;
    }
  }
  .remember {
    margin: 1% 0 0 13.7%;
    font-size: 18px;
  }
  .find {
    padding: 4% 0 0 14%;
    a {
      border: 1px solid #ccc;
      padding: 20px 5.4%;
      box-sizing: border-box;
      border-radius: 4%;
      font-size: 18px;
      &:first-child {
        margin-right: 15px;
      }
    }
  }
  footer {
    margin-top : 100px;
    border-top: 1px solid black;
    padding: 3% 10%;
    box-sizing: border-box;
    color: rgb(50,50,50);
    position: relative;
    a {
      font-size: 18px;
      margin: 0 3% 3% 0;
      color: rgb(20,20,20);
    }
    address {
      margin: 50px 0 5px 0;
    }
    p {
      font-size: 16px;
      text-align: left;
      margin: 0;
      padding: 0;
    }
    button {
      position: absolute;
      right: 10%;
      top: 25%;
      background-color: white;
      border: 1px solid #ddd;
      padding: 0.8% 0.7%;
      font-size: 16px;
      border-radius: 4%;
    }
  }
  .sns_login {
    position: absolute;
    left: 53%;
    top: 42%;
    width: 42%;

    h3 {
      font-size: 22px;
    }
    ul {
      border-radius: 4%;
      background-color: #eee;
      width: 80%;
      height: 120px;
      padding: 5%;
      margin-top: 20px;
      box-sizing: border-box;
      li {
        float: left;
        margin: 0 11%;
      }
    }
  }
  .go_join {
    position: absolute;
    left: 53%;
    top: 62%;
    width: 40%;
    h3 {
      font-size: 22px;
    }
    p {
      margin-top: 20px;
      line-height: 1.5em;
      font-size: 18px;
      float: left;
    }
    button {
      background-color: white;
      border: 1px solid rgb(0,148,251);
      color: rgb(0,148,251);
      border-radius: 4%;
      padding: 2% 3%;
      font-size: 18px;
      margin-left: 25%;
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
        <h1>로그인</h1>
        <div className='login_section'>
          <Link to='/login'>세브란스 로그인</Link>
          <Link to='/login'>본인인증 로그인</Link>
        </div>
        <form className='login_input'>
          <input name="email" type="email" placeholder="아이디를 입력해 주세요." value={email} onChange={onEmailHandler} className="email_input" />
          <input name="password" type="new_password" placeholder="비밀번호를 입력해 주세요." value={password} onChange={onPasswordHandler} className="password_input" />
          <button type="submit" onSubmit={onSubmit} className="login_button">로그인</button>
        </form>
        <form className='remember'>
          <label><input type='checkbox' />아이디를 기억합니다.</label>
        </form>
        <div className='find'>
          <Link to='/'>아이디 찾기</Link>
          <Link to='/'>비밀번호 찾기</Link>
        </div>
        <div className='sns_login'>
          <h3>SNS 계정으로 로그인</h3>
          <ul>
            <li><Link to='/'>네이버</Link></li>
            <li><Link to='/'>카카오</Link></li>
            <li><Link to='/'>페이스북</Link></li>
          </ul>
        </div>
        <div className='go_join'>
          <h3>아직 세브란스 회원이 아니신가요?</h3>
          <p>지금 바로 회원가입을 하고 <br />
          나에게 딱 맞는 정보를 확인해 보세요!</p>
          <button type='button'>회원가입</button>
        </div>
        <footer>
          <Link to='/'>이용약관</Link>
          <Link to='/'>개인정보처리방침</Link>
          <address>03722 서울특별시 서대문구 연세로 50-1</address>
          <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
          <button type='button'>연세의료원 네트워크</button>
        </footer>
      </div>
    </Container>
  );
});

export default Login;