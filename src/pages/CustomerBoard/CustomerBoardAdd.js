import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../../slices/CustomerBoardSlice';
import dayjs from 'dayjs';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import checkBox from '../../assets/img/ico-checkbox-checked-white.png';

import CustomerBoardHeader from './Header';

const CustomerBoardAddCont = styled.div`
  margin: auto;
  max-width: 1280px;
  //동의 체크박스
  .agreeCont {
    margin-top: 20px;
    .checkBox {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
    }
    .checkBox + label {
      position: relative;
      height: 20px;
    }
    .checkBox + label::before {
      display: inline-block;
      width: 20px;
      height: 20px;
      /* border: 1px solid #aaa; */
      vertical-align: middle;
      border-radius: 0;
      margin: -2px 5px 0 0;
      background-color: #fff;
      content: '';
      border: 0;
      border-radius: 50%;
      background: #959595 url('../../assets/img/ico-checkbox-checked-white.png') no-repeat 45% center !important;
      background-size: 11px 8px !important;
    }
    .checkBox:checked + label::before {
      background-color: #0094fb !important;
    }
  }

  form {
    border-top: 1px solid #aaa;
    overflow: hidden;

    table {
      width: calc(100% + 1px);
      margin-right: -1px;
      table-layout: fixed;
      border-collapse: separate;
      border-bottom: 1px solid #aaa;

      tr {
        display: table-row;
        vertical-align: left;
      }
      th {
        border-right: 0;
        background-color: #f9f9f9;
        font-weight: bold;
        width: 200px;
        text-align: left;
        line-height: 2.5;
        display: table-cell;
      }
      th,
      td {
        padding: 15px 20px;
        box-sizing: border-box;
        height: 75px;
        border-top: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;
      }
      td {
      }
    }
  }

  .formControlCont {
    display:flex;
    /* flex-wrap: wrap; */
    align-items: center;
  }
  //성명, 접수구분, 병원/가관, 부서, 관련직원명
  .Width360{
    max-width: 360px;
  }
  .Width175{
    max-width: 175px;
  }
  .formControl {
    width: 100%;
    border-radius: 0;
    height: 45px;
    border: 1px solid #dadada;
    padding: 8px 15px;
    background: #fff;
    text-align: left;
    font-size: 16px;
    line-height: 27px;
    vertical-align: middle;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border-color: #0094fb;
    }
  }

  input:read-only{
    color: #c2c2c2; 
    background-color: #f9f9f9;
  }

  .textarea{
    height: 232px;
    margin-bottom:7px;
  }

  .orange {
    color: #f76117 !important;
  }
`;

const CustomerBoardAdd = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.CustomerBoardSlice);

  /** <form>의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onCustomerBoardSubmit = useCallback((e) => {
    e.preventDefault();

    //이벤트가 발생한 폼 개체
    const current = e.target;

    //입력값에 대한 유효성 검사

    //리덕스를 통한 데이터 저장 요청.
    dispatch(
      postItem({
        name: current.name.value,
        tel:
          current.tel1.value +
          '-' +
          current.tel2.value +
          '-' +
          current.tel3.value,
        email: current.email1.value + '@' + current.email2.value,
        register: current.register.value,
        hospital: current.hospital.value,
        dept: current.dept.value,
        staff: current.staff.value,
        title: current.title.value,
        content: current.content.value,
        date: new Date().toISOString(),
      })
    ).then((result) => {
      console.log(result);
      //처리가 완료된 후 상세 페이지로 이동
      navigate(`/suggestion/${result.payload.id}`);
    });
  }, []);

  //이메일 입력태그 onChange 이벤트
  const inputEmail = useCallback((e) => {
    e.preventDefault();

    const email2 = document.getElementById('email2');
    email2.value = e.target.value;

    if (email2.value === '') {
      email2.readOnly = false;
    } else {
      email2.readOnly = true;
    }
  });

  return (
    <CustomerBoardAddCont>
      <Header />
      <CustomerBoardHeader />

      <h4 className="pageSubtitle">개인정보 수집 동의</h4>

      <div className="grayboxGuide">
        <ul>
          <li>
            <p>1. 개인정보의 수집·이용목적</p>
            <p>고객의 소리 신청 및 확인</p>
          </li>
          <li>
            <p>2. 수집하는 개인정보의 항목</p>
            <p>- 필수 정보 : 성명, 연락처, 예비연락처, 이메일, 제목, 내용</p>
          </li>
          <li>
            <p>3. 개인정보의 보유·이용기간</p>
            <p>고객의 소리 작성 및 조회 등 관리 필요시 까지</p>
          </li>
          <li>
            <p>
              4. 위와 같은개인정보 수집·이용에 동의하지 않으실 경우 서비스가
              제한됩니다.
            </p>
            <p>
              단, 고객의 소리 신청을 위한 최소한의 정보인 필수 정보 미 입력시
              고객의 소리 신청 불가
            </p>
          </li>
        </ul>
      </div>
      <p className="agreeCont">
        <input
          type="checkbox"
          id="agree"
          className="checkBox"
          required
          data-error-message="개인정보 수집·이용에 동의하지 않을 경우 접수 불가합니다."
        />
        <label htmlFor="agree">개인정보 수집·이용에 동의합니다.</label>
      </p>

      <h4 className="pageSubtitle">건의사항 입력</h4>

      <form onSubmit={onCustomerBoardSubmit}>
        <table>
          <tbody>
            <tr>
              <th>
                <span className="orange">* </span>성명
              </th>
              <td>
                <input type="text" name="name" className="formControl Width360" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>연락처
              </th>
              <td>
                <div className='formControlCont'>
                  <select name="tel1" className="formControl Width175">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                    <option value="044">044(세종)</option>
                    <option value="070">070</option>
                    <option value="02">02(서울)</option>
                    <option value="031">031(경기)</option>
                    <option value="032">032(인천)</option>
                    <option value="033">033(강원)</option>
                    <option value="041">041(충남)</option>
                    <option value="042">042(대전)</option>
                  </select>
                  &nbsp;-&nbsp;
                  <input type="tel" name="tel2" className="formControl Width175" />
                  &nbsp;-&nbsp;
                  <input type="tel" name="tel3" className="formControl Width175" />
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>E-mail
              </th>
              <td>
              <div className='formControlCont'>
                <input type="text" name="email1" className="formControl Width175" />
                &nbsp;@&nbsp;
                <input
                  type="text"
                  name="email2"
                  id="email2"
                  placeholder="직접입력"
                  className="formControl Width175"
                />&nbsp;
                <select name="email3" onChange={inputEmail} className="formControl Width175">
                  <option value="">직접입력</option>
                  <option value="gmail.com" readOnly>
                    gmail.com
                  </option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="nate.com">nate.com</option>
                  <option value="kakao.com">kakao.com</option>
                  <option value="yahoo.com">yahoo.com</option>
                </select>
              </div>
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>접수구분
              </th>
              <td>
                <label>
                  <input type="radio" name="register" value="친절" />
                  친절
                </label>
                <label>
                  <input type="radio" name="register" value="불친절" />
                  불친절
                </label>
                <label>
                  <input type="radio" name="register" value="불만및건의" />
                  불만및건의
                </label>
                <label>
                  <input type="radio" name="register" value="기타" />
                  기타
                </label>
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>병원/기관
              </th>
              <td>
                <select name="hospital" className="formControl Width360">
                  <option value="">병원/대학을 선택하세요.</option>
                  <option value="세브란스병원">세브란스병원</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>부서</th>
              <td>
                <select name="dept" className="formControl Width360">
                  <option value="">부서를 선택하세요.</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>관련직원명</th>
              <td>
                <input type="text" name="staff" className="formControl Width360" />
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>제목
              </th>
              <td>
                <input type="text" name="title" className="formControl"/>
              </td>
            </tr>
            <tr>
              <th>
                <span className="orange">* </span>내용
              </th>
              <td>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  placeholder="건의 사항 및 상세 내용을 1500자 이내로 입력해주세요."
                  maxLength="1500"
                  className="formControl textarea"
                />

                {/* 글자수 카운팅 */}
                <p id="chkTextLengthArea">
                  0/
                  <span id="counter">1500</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="buttonCont">
          <button type="submit" className="buttonBlue">
            접수신청
          </button>
          <button type="reset" className="buttonWhite marginleft">
            다시작성
          </button>
        </div>
      </form>
      <Footer />
      {/* 체크 안했을 때 팝업창 */}
      <div className="popUpCont">
        <div className="dimed"></div>
        <div className="popUp">
          <div>개인정보 수집·이용에 동의하지 않을 경우 접수 불가합니다.</div>
          <button type="button">닫기</button>
        </div>
      </div>
    </CustomerBoardAddCont>
  );
});

export default CustomerBoardAdd;
