import React, { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CustomerBoardHeader from './Header';
import { Pagination } from '@mui/material';

const CustomerBoardList = memo(() => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
                <CustomerBoardHeader />

                <h4>고객의소리 게시판</h4>

                <table border='1'>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>userid</td>
                            <td>date</td>
                        </tr>
                    </tbody>
                </table>
                <button type='button'><NavLink to='/suggest.do'>글쓰기</NavLink></button>
                <Pagination count={10} />
            <Footer />
        </div>
    );
});

export default CustomerBoardList;