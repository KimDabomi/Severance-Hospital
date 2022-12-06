/**
 * @ File Name: Header.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-25 15:1:00
 * @ Description: 고객의 소리 헤더 component
 */


import React, { memo } from 'react';
import styled from 'styled-components';

import boxGuideDecor from '../../assets/img/box-guide-decoration@2x.png'

const CustomerHeaderCont = styled.div`
        .pageTitle{
            text-align: center;
            font-size: 40px;
            padding: 73px 0 65px 0;
            box-sizing: border-box;
        }

        .boxGuide{
            max-width: 1280px;
            height: 200px;
            margin: auto;
            /* margin: 0 0 60px 0; */
            padding: 20px 30px;
            box-sizing: border-box;
            border: 1px solid #e3e3e3;
            position: relative;
            img{
                position: absolute;
                width: 41px;
                height: 7px;
                top: -3px;
            }
        }

        ul{
            margin: 4px 0;
            li{
            color: #333333;
            font-size: 17px;
            box-sizing: border-box;
            list-style:square inside;
            line-height: 1.5;
            margin-top: 5px;
            &::marker{color: #999999;}
        }
        }
        
    `;

const Header = memo(() => {
    return (
        <CustomerHeaderCont  className='bgAll'>
            <h1 className='pageTitle'>고객의 소리</h1>

            <div className='boxGuide'>
                <img src={boxGuideDecor} alt='boxGuideDecor' />
                <ul>
                    <li>병원, 대학 또는 홈페이지 이용 시 느끼셨던 의견을 작성해 주세요.</li>
                    <li>고객지원은 연세대학교 의료원의 모든 병원 및 대학에서 공통으로 사용됩니다.</li>
                    <li>고객의 소리에서 등록하신 내용은 로그인하신 후 MY세브란스에서 확인하실 수 있습니다.</li>
                    <li>산업안전보건법에 의거 고객응대근로자로 보호받고 있습니다.</li>
                    <li>폭언 및 욕설이 포함된 민원은 정상 처리되지 않을 수 있으니 자제하여 주시기 바랍니다.</li>
                </ul>
            </div>
        </CustomerHeaderCont>
    );
});

export default Header;