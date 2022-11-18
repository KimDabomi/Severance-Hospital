import React, { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CustomerBoardHeader from './Header';
import { Pagination } from '@mui/material';

const CustomerBoardCont = styled.div`
  margin: auto;
  max-width: 1280px;

  h4 {
    position: relative;
    font-size: 20px;
    margin-bottom: 22px;
    line-height: 1.5;
    padding-left: 19px;
    box-sizing: border-box;

    &::before {
      position: absolute;
      width: 11px;
      height: 11px;
      border: 3px solid #0094fb;
      border-radius: 50%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      content: '';
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  table {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
    width: 100%;
    font-size: 16px;
    text-align: center;

    th {
      background-color: #f9f9f9;
      padding: 10px;
      border: 1px solid #ddd;

      &:first-child {
        border-left: 0;
      }
      &:last-child {
        border-right: 0;
      }
    }
    td {
      padding: 10px;
    }

    button{
        /* text-align:right;  */
    }

  }
`;

const CustomerBoardList = memo(() => {
  const navigate = useNavigate();
  return (
    <CustomerBoardCont>
      <Header />
      <CustomerBoardHeader />

      <h4 className="pageSubtitle">고객의소리 게시판</h4>

      <table>
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

      <button type="button">
        <NavLink to="/suggest.do">글쓰기</NavLink>
      </button>
      <Pagination count={10} className='paging' />
      <Footer />
    </CustomerBoardCont>
  );
});

export default CustomerBoardList;
