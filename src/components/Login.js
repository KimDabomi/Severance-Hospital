/**
 * @ File Name: Login.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-11-25 16:40
 * @ Description: 로그인 첫 페이지
 */

import React,{memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../assets/img/login.png';
import LoginFooter from './LoginFooter';
import naver from '../assets/img/ico-sns-naver@2x.png';
import kakao from '../assets/img/ico-sns-kakao@2x.png';
import facebook from '../assets/img/ico-sns-facebook@2x.png';

const Container = styled.div`
position: relative;
.nav {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eee;
    padding: 40px 1.5% 0 2%;
    box-sizing: border-box;

    img {
      width: 16%; 
      height: 60%;
      float: left; 
      margin-right: 15%;
    }

    a {
      font-size: 18px;
      margin: 0 5% 0 0;
      font-weight: bold;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: rgb(0,148,251);
      }
    }
  }
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 40px;
    font-weight: bold;
  }
  .login_section {
    text-align: center;
    margin-left: 2%;

    a {
      display: block;
      float: left;
      width: 48%;
      height: 60px;
      line-height: 60px;
      font-size: 22px;
      font-weight: bold;
      border: 1px solid #eee;

      &:first-child {
        border-bottom: 3px solid rgb(255,234,169);
      }
      &:last-child {
        background-color: rgb(249,249,249);
      }
    }
  }
  .login_input {
    width: 48%;
    margin-top: 120px;
    position: relative;

    .email_input,.password_input {
      width: 55%;
      height: 50px;
      margin: 2% 0 0 12%;
      border: 1px solid #ccc;
      padding-left: 3%;
      box-sizing: border-box;
      font-size: 18px;
    }
    button {
      width: 20%;
      height: 113px;
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
    margin: 1% 0 0 6%;
    font-size: 16px;
    color: rgba(100,100,100);
  }
  .find {
    padding: 4% 0 0 6%;
    a {
      border: 1px solid rgb(100,100,100);
      padding: 10px 5.6%;
      box-sizing: border-box;
      border-radius: 4%;
      font-size: 16px;
      color: rgba(100,100,100);

      &:first-child {
        margin-right: 15px;
      }
    }
  }
  /* footer {
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
  } */
  .sns_login {
    position: absolute;
    left: 53%;
    top: 63%;
    width: 42%;

    h3 {
      font-size: 18px;
    }
    ul {
      border-radius: 2px;
      background-color: rgb(249,249,249);
      width: 94%;
      height: 85px;
      padding: 3% 27%;
      margin-top: 20px;
      box-sizing: border-box;
      li {
        margin-right: 10%;
        float: left;
        a {
          img {
            width: 50px;
          }
        }
      }
    }
  }
  .go_join {
    position: absolute;
    left: 53%;
    top: 87%;
    width: 40%;
    h3 {
      font-size: 18px;
    }
    p {
      margin-top: 20px;
      line-height: 1.5em;
      font-size: 16px;
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
          <Link to='/join_way'>회원가입</Link>
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
            <li><Link to='/'><img src={naver} alt='naver' /></Link></li>
            <li><Link to='/'><img src={kakao} alt='kakao' /></Link></li>
            <li><Link to='/'><img src={facebook} alt='facebook' /></Link></li>
          </ul>
        </div>
        <div className='go_join'>
          <h3>아직 세브란스 회원이 아니신가요?</h3>
          <p>지금 바로 회원가입을 하고 <br />
          나에게 딱 맞는 정보를 확인해 보세요!</p>
          <button type='button'>회원가입</button>
        </div>
        {/* <footer>
          <Link to='/'>이용약관</Link>
          <Link to='/'>개인정보처리방침</Link>
          <address>03722 서울특별시 서대문구 연세로 50-1</address>
          <p>COPYRIGHT(C) SEVERANCE HOSPITAL. ALL RIGHTS RESERVED.</p>
          <button type='button'>연세의료원 네트워크</button>
        </footer> */}
        <LoginFooter />
      </div>
    </Container>
  );
});

export default Login;