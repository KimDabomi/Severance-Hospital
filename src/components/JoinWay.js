import React,{memo,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link,Routes,Route } from 'react-router-dom';
import styled from 'styled-components';
import loginImg from '../assets/img/login.png';
import localImg from '../assets/img/local.jpg';
import childImg from '../assets/img/child.jpg';
import globalImg from '../assets/img/global.jpg';
import JoinAccept from './JoinAccept';

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
  footer {
    margin-top : 500px;
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
  h1 {
    text-align: center;
    padding: 70px 0;
    font-size: 44px;
  }
  p {
    text-align: center;
    font-size: 18px;
  }
  .ways {
    padding-left: 10%;
    box-sizing: border-box;
    .root_box {
        margin-top: 30px;
        margin-right: 30px;
        padding-top: 3%;
        box-sizing: border-box;
        float: left;
        width: 20.8%;
        height: 300px;
        border: 1px solid #ccc;
        text-align: center;
        &:last-child {
            margin-right: 0;
        }
        h2 {
            font-size: 28px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        p {
            margin-bottom: 15px;
        }
        &:nth-child(2) {
            p {
                margin-bottom: 19px;
            }
        }
        &:nth-child(3) {
            p {
                margin-bottom: 50px;
            }
        }
        &:last-child {
            p {
                margin-bottom: 80px;
            }
            ul {
                li {
                    float: left;
                    margin-left: 13%;
                }
            }
        }
        img {
            margin: auto;
        }
        &:hover {
            border: 1px solid rgb(0,148,251);
        }
    }
  }
  .qna {
    margin-right: 35%;
    height: 50px;
    line-height: 50px;
    p {
        margin: 50px 0 0 0;
        float: right;
        button {
            float: right;
            margin-left: 10px;
            background-color: white;
            border: 1px solid #ddd;
            padding: 10px 25px;
            font-size: 18px;
            border-radius: 30px;
        }
    }
  }
`;
const JoinWay = memo(() => {


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

        <h1>회원가입</h1>
        <p>세브란스 홈페이지에 방문해주셔서 감사 드립니다. 통합 계정으로 모든 패밀리사이트를 이용할 수 있습니다.</p>
        <div className='ways'>
            <Link to='/join_accept' className='root_box'>
                <h2>내/외국인</h2>
                <p>14세 이상</p>
                <p>국내거주 내/외국인</p>
                <img src={localImg} alt='내/외국인' />
            </Link>
            <Link to='/join_accept' className='root_box'>
                <h2>소아/청소년</h2>
                <p>14세 미만</p>
                <p>내/외국인</p>
                <img src={childImg} alt='소아/청소년' />
            </Link>
            <Link to='/join_accept' className='root_box'>
                <h2>해외거주 외국인</h2>
                <p>Foreign membership</p>
                <img src={globalImg} alt='해외거주외국인' />
            </Link>
            <Routes><Route path='/join_accept' element={<JoinAccept />} /></Routes>
            <div className='root_box'>
                <h2>SNS 회원가입</h2>
                <p>기존 사용하는 계정으로<br />
                간단하게 가입</p>
                <ul>
                    <li><Link to='/'>네이버</Link></li>
                    <li><Link to='/'>카카오</Link></li>
                    <li><Link to='/'>페이스북</Link></li>
                </ul>
            </div>
            <div className='qna'>
                <p>회원가입이 잘 안되나요?
                    <button type='button' className='qna_button'>회원가입 할 때 가장 많이 물어보는 질문은?</button>
                </p>
            </div>
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

export default JoinWay;