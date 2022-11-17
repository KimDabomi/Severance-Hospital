import React, { memo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CustomerBoardHeader from './Header';

const CustomerBoardAdd = memo(() => {
    return (
        <div>
            <Header />
                <CustomerBoardHeader />

                <h4>개인정보 수집 동의</h4>

                <div>
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
                            <p>4. 위와 같은개인정보 수집·이용에 동의하지 않으실 경우 서비스가 제한됩니다.</p>
                            <p>단, 고객의 소리 신청을 위한 최소한의 정보인 필수 정보 미 입력시 고객의 소리 신청 불가</p>
                        </li>
                    </ul>
                </div>
                <input type='checkbox' name='agree' />
                <label for='agree'>개인정보 수집·이용에 동의합니다.</label>

                <h4>건의사항 입력</h4>
                <hr />
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <th>성명</th>
                            <td>
                                <input type='text' name='name' />
                            </td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>
                                <select>
                                    <option value='010'>010</option>
                                </select>&nbsp;-&nbsp;
                                <input type='text' name='tel1' />&nbsp;-&nbsp;
                                <input type='text' name='tel2' />
                            </td>
                        </tr>
                        <tr>
                            <th>E-mail</th>
                            <td>
                                <input type='text' name='email1' />&nbsp;@&nbsp;
                                <input type='text' name='email2' />
                                <select>
                                    <option value=''>직접입력</option>
                                    <option value='gamil'>gamil.com</option>
                                    <option value='naver'>naver.com</option>
                                    <option value='daum'>daum.net</option>
                                    <option value='nate'>nate.com</option>
                                    <option value='kakao'>kakao.com</option>
                                    <option value='yahoo'>yahoo.com</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>접수구분</th>
                            <td>
                                <input type='radio' name='register' value='good'/>
                                <label for='register'>친절</label>
                                <input type='radio' name='register' value='bad'/>
                                <label for='register'>불친절</label>
                                <input type='radio' name='register' value='sug'/>
                                <label for='register'>불만및건의</label>
                                <input type='radio' name='register' value='etc' />
                                <label for='register'>기타</label>
                            </td>
                        </tr>
                        <tr>
                            <th>병원/기관</th>
                            <td>
                                <select>
                                    <option value=''>병원/대학을 선택하세요.</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>부서</th>
                            <td>
                                <select>
                                    <option value=''>부서를 선택하세요.</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>관련직원명</th>
                            <td>
                                <input type='text' name='staff' />
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input type='text' name='title' />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea type='text' name='title' placeholder='건의 사항 및 상세 내용을 1500자 이내로 입력해주세요.' maxLength='1500'/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/* 글자수 카운팅 */}
                    <p id='chkTextLengthArea'>0/
                    <span id="counter">1500</span></p>
                </form>
            <Footer />
        </div>
    );
});

export default CustomerBoardAdd;