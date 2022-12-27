/* 
이미지 버튼 누르면 diplay:none 처리후, 로그인/회원가입 버튼css diplay:block 처리
이전 버튼 누르면 로그인/회원가입 버튼css display:none처리후 다시 이미지 버튼 diplay:block
*/
import React, { memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Collapse from '../../components/Collpase';
import logoappt from '../../assets/img/logo-appt.png';

import Reserve1 from './Reserve1';
import HJAttp from './HJAppt';
import Drstep1 from './Drstep1';
import Drstep2 from './Drstep2';
import HJstep3 from './HJstep3';
import HJstep4 from './HJstep4';

const ApptHeader = styled.div`
    width: 1280px;
    height: 97px;
    margin-left: 20px;

    
    .apptHeaderDiv1 {
    
        display: flex;
        justify-content: space-between;
        div {
            &:first-child {
            width: 370px;
        }
            padding: 31px 0 28px 28px;

            img {
                width: 370px;
                height: 40px;
                object-fit: cover;
            }
        }


        div {
            width: 180px;

            button {
                margin-top: 15px;
                background-color: rgba(0, 0, 0, 0);
                border: 1px solid rgba(0, 0, 0, 0);
                height: 26px;
                font-size: 16px;
                padding: 0px;
            }

            span {
                color: #dadada;
                margin: 0 5px;
            }
        }
    }
    
`;

const ApptSelectCont = styled.div`
    display: flex;
    height: 803px;
    .step1Cont {
        margin-left: 50px;
        /* margin-top: 50px; */
        width: 305px;
        height: 100%;
        background: #fff;
        border: 1px solid #e6e6e6;

        h1 {
            padding: 24px 0;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
        }

        .selectCont {
            padding: 24px 0;
            margin: 0 20px;
            background-color: #f9f9f9;
        }

        .telInfo {
            padding-top: 16px;
            padding-bottom: 16px;
            text-align: center;
            dt {
                font-weight: bold;
            }

            dd {
                a {
                    font-size: 40px;
                    color: #0094fb;
                    font-weight: 700;
                }
            }
        }

        .listInfo {
            padding-top: 21px;
            margin: 0 20px;
            border-top: 1px solid #ededed;

            ul {
                /* 리스트 스타일 ListStyleUl > li */
                li {
                padding-left: 12px;
                margin-top: 5px;
                position: relative;

                    &:first-child {
                        margin-top: 0;
                    }

                    &::before {
                        content: "";
                        width: 4px;
                        height: 4px;

                        position: absolute;
                        top: 0.7em;
                        left: 0;

                        background-color: #0094fb;
                    }
                }
            }
        }
    }
`;

const content = [{
    title: '세브란스병원',
    department: ['연세암병원','심장혈관병원','어린이병원','안과병원','재활병원'],
},
]

const ApptSelect = memo(() => {

    const navigate = useNavigate();

    /** 로그아웃 버튼 */
    const onClickLogout = useCallback((e) => {
        e.preventDefault();



        navigate("/apptSelect")
    });

    return (
        <>
        <ApptHeader>
            <div className='apptHeaderDiv1'>
                <div>
                    <Link to='/apptSelect'>
                        <img src={logoappt} alt="온라인예약 로고" />
                    </Link>
                </div>
                <div>
                    <button onClick={onClickLogout}>로그아웃</button>
                    <span>|</span>
                    <Link to='/mysevrance'>
                        MY세브란스
                    </Link>
                </div>
            </div>
        </ApptHeader>
        <ApptSelectCont>
            
            <div className='step1Cont'>
                <h1>병원선택</h1>
                <div className='selectCont'>
                    {content.map(({title, department}, i) => <Collapse 
                        key={i} title={title} department={department}
                    />)}
                </div>
                <div className='telInfo'>
                    <dl>
                        <dt>진료예약</dt>
                        <dd><a href="tel:1599-1004" id="hospitalTel">1599-1004</a></dd>
                        <dd>평일 08:00~18:00</dd>
                        <dd>토요일 08:00~13:00</dd>
                        <dd></dd>
                    </dl>
                </div>
                <div className='listInfo'>
                    <ul>
                        <li>회원 및 비회원 모두 예약이 가능합니다.</li>
                        <li>
                        대리예약은 환자 정보 추가 입력 후 예약을 이용하시면 됩니다.
                        </li>
                    </ul>
                </div>
            </div>
            <Reserve1 />
            <HJAttp />
            {/* <Drstep1 />
            <Drstep2 />
            <HJstep3 />
            <HJstep4 /> */}
        </ApptSelectCont>

        </>
    );
});

export default ApptSelect;
