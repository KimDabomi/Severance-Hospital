import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CustomerBoardView = memo(() => {
    return (
        <div>
            <Header />
            <h4 className='pageSubtitle'>고객의소리 게시판</h4>

            <div className='subjectArea'>
                <h3>Subject</h3>
                <span>date</span>&nbsp;|&nbsp;<span>userid</span>
            </div>
            <div className='extendField'>
                <dl><dt>접수구분</dt><p>register</p></dl>
                <dl><dt>기관</dt><p></p></dl>
                <dl><dt>부서</dt><p>register</p></dl>
            </div>
            <div className='articleArea'>
                <div>Contents</div>
            </div>

            <button type='button'><NavLink to='/customer.do'>목록</NavLink></button>
            <button type='button'>삭제</button>
            <Footer />
        </div>
    );
});

export default CustomerBoardView;