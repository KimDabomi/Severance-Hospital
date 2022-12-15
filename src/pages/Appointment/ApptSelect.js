/* 
이미지 버튼 누르면 diplay:none 처리후, 로그인/회원가입 버튼css diplay:block 처리
이전 버튼 누르면 로그인/회원가입 버튼css display:none처리후 다시 이미지 버튼 diplay:block
*/
import React, { memo } from 'react';
import styled from 'styled-components';
import Collapse from '../../components/Collpase';

const ApptSelectCont = styled.div`
    .step1Cont {
        margin-left: 50px;
        margin-top: 50px;
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
    }
`;

const content = [{
    title: 'A',
    content: ['A','B','C','D','E'],

}, {
    title: 'B',
    content: 'B'
}, {
    title: 'C',
    content: 'C'
}, {
    title: 'D',
    content: 'D'
}, {
    title: 'E',
    content: 'E'
}]

const ApptSelect = memo(() => {

    return (
        <ApptSelectCont>
            <div className='step1Cont'>
                <h1>병원선택</h1>
                <div className='selectCont'>
                    {content.map(({title, content}, i) => <Collapse key={i} title={title} content={content} />)}
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
            </div>
        </ApptSelectCont>
    );
});

export default ApptSelect;
