/**
 * @ File Name: JoinUs.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-11-25 15:00
 * @ Description: 회원가입 정보 입력 페이지
 */

import React, {memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import loginImg from '../assets/img/logo@2x.png';
import LoginFooter from './LoginFooter';


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
`;

const JoinUs = memo(() => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [sparetel, setSparetel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const onNameHandler = e => {
    setName(e.currentTarget.value);
  }

  const onTelHandler = e => {
    setTel(e.currentTarget.value);
  }

  const onSparetelHandler = e => {
    setSparetel(e.currentTarget.value);
  }

  const onEmailHandler = e => {
      setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = e => {
      setPassword(e.currentTarget.value);
  }

  const onConfirmPasswordHandler = e => {
      setConfirmPassword(e.currentTarget.value);
  }

  const onSubmit = e => {
    e.preventDefault();
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else {
      navigate('/login');
    }
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
        <div className="JoinUs">
          <form>
              <input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="name_input"/>
              <input name="tel" type="number" placeholder="전화번호" value={tel} onChange={onTelHandler} className="tel_input"/>
              <input name="sparetel" type="number" placeholder="예비전화번호" value={sparetel} onChange={onSparetelHandler} className="sparetel_input"/>
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="email_input"/>
              <input name="password" type="new_password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="password_input"/>
              <input name="confirmPassword" type="new_password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="confirmPassword_input"/>
              <button type="submit" onSubmit={onSubmit} className="Join_button">계정 생성하기</button>
          </form>
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
export default JoinUs;