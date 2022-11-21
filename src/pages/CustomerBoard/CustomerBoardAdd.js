import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../../slices/CustomerBoardSlice';
import dayjs from 'dayjs';

import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CustomerBoardHeader from './Header';

const CustomerBoardAddCont = styled.div`
  margin: auto;
  max-width: 1280px;
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

      <div className='grayboxGuide'>
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
      <p>
      <input type="checkbox" id="agree" className='checkBox'/>
      <label htmlFor="agree">개인정보 수집·이용에 동의합니다.</label>
      </p>

      <h4 className='pageSubtitle'>건의사항 입력</h4>
      <hr />
      <form onSubmit={onCustomerBoardSubmit}>
        <table>
          <tbody>
            <tr>
              <th>성명</th>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>
                <select name="tel1">
                  <option value="010">010</option>
                </select>
                &nbsp;-&nbsp;
                <input type="tel" name="tel2" />
                &nbsp;-&nbsp;
                <input type="tel" name="tel3" />
              </td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>
                <input type="text" name="email1" />
                &nbsp;@&nbsp;
                <input
                  type="text"
                  name="email2"
                  id="email2"
                  placeholder="직접입력"
                />
                <select name="email3" onChange={inputEmail}>
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
              </td>
            </tr>
            <tr>
              <th>접수구분</th>
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
              <th>병원/기관</th>
              <td>
                <select name="hospital">
                  <option value="">병원/대학을 선택하세요.</option>
                  <option value="세브란스병원">세브란스병원</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>부서</th>
              <td>
                <select name="dept">
                  <option value="">부서를 선택하세요.</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>관련직원명</th>
              <td>
                <input type="text" name="staff" />
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input type="text" name="title" />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  placeholder="건의 사항 및 상세 내용을 1500자 이내로 입력해주세요."
                  maxLength="1500"
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
          <button type="reset" className="buttonWhite">
            다시작성
          </button>
        </div>
      </form>
      <Footer />
      {/* 체크 안했을 때 팝업창 */}
      <div className='popUpCont'>
        <div className='dimed'></div>
        <div className='popUp'>
            <div>개인정보 수집·이용에 동의하지 않을 경우 접수 불가합니다.</div>
            <button type="button">닫기</button>
        </div>
      </div>
    </CustomerBoardAddCont>
  );
});

export default CustomerBoardAdd;
