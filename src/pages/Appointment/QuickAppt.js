import React, { memo } from 'react';
import styled from 'styled-components';

import apptCalendar from '../../assets/img/icon-appt-calendar.png'

const QuickApptCont = styled.div`
    padding-bottom: 95px;
    
    // h4 스타일 적용
    h4 {
        padding-left: 18px;
        margin: 65px 0 22px;
        font-size: 24px;
        font-weight: bold;
        line-height: 38px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            width: 6px;
            height: 20px;
            top: 9px;
            left: 0;
            background-color: #0094fb;
            border-radius: 3px;
        }
    }

    // list 파란점
    .apptList {
        margin-left: 18px;

        ul {
            li {
                padding-left: 12px;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    top: 0.7em;
                    left: 0;
                    background-color: #0094fb;
                }

                &:after {
                    display: block;
                    clear: both;
                    content: '';
                }
            }
        }
    }



`;

const QuickApptInputCont = styled.div`
    width: 100%;
    padding: 20px 0 50px;
    background-color: #f9f9f9;
    
    // 전화번호
    .formControlCont {
        display:flex;
        /* flex-wrap: wrap; */
        align-items: center;
        padding: 50px 0;
        border-bottom: 1px solid #dadada;

        .Width175{
            max-width: 175px;
        }
    }

    .quickCont {
        width: 560px;
        margin-left: 25%;
        
    }
    
`;

const QuickAppt = memo(() => {
    return (
        <QuickApptCont>
            <h4>이용 안내</h4>
            <div className='apptList'>
                <ul>
                    <li>환자 또는 보호자분의 전화번호를 남기시면, 상담원이 친절하게 예약을 도와드리겠습니다.</li>
                    <li>상담시간 평일 08:30 ~ 17:30 토요일 08:30 ~ 12:30 (공휴일 제외)</li>
                </ul>
            </div>
            <h4>간편예약(빠른예약 신청)</h4>

            <QuickApptInputCont>
                <div className='quickCont' >
                    {/* 전화번호 입력 */}
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
                        <input type="tel" name="tel2" className="formControl Width175" id='tel2' />
                        &nbsp;-&nbsp;
                        <input type="tel" name="tel3" className="formControl Width175" id='tel3' />
                    </div>

                    {/* 개인정보 수집·이용 동의 */}
                    <div class="check-agree"><strong class="sub-tit text-title">개인정보 수집·이용 동의</strong>
                        <p>본 정보는 간편예약 신청에만 이용됩니다. 개인정보 이용에 동의합니다.</p>
                        <ul>
                            <li>
                                <span class="ckeck-item">
                                    <input type="radio" name="agree" id="agree1" checked="" value="on" />
                                    <label for="agree1">동의합니다.</label></span></li><li><span class="ckeck-item">
                                    <input type="radio" name="agree" id="agree2" value="on" />
                                    <label for="agree2">동의하지 않습니다.&nbsp;</label>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </QuickApptInputCont>
        </QuickApptCont>
    );
});

export default QuickAppt;
