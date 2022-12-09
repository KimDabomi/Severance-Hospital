import React, { memo } from 'react';
import MyPageHeader from '../../components/MyPageHeader';
import LoginFooter from '../../components/LoginFooter';
import styled from 'styled-components';

const Container = styled.div`
    h1 {
        text-align: center;
        padding: 70px 0;
        font-size: 40px;
        font-weight: bold;
    }
    table {
      letter-spacing: 0.02em;
      line-height: 1.625;
      font-size: 16px;
      color: #333;
      border-top: 1px solid #ccc;
      width: 1280px;
      text-align: left;
      margin: auto;
      tr {
        border-bottom: 1px solid #e6e6e6;
        padding: 13px 20px;
        th {
          background-color: #f9f9f9;
          padding: 15px 15px;
          font-weight: bold;
          vertical-align: middle;
          width: 180px;
        }
        td {
          padding: 13px 20px;
        }
        &:last-child {
          border-bottom: 1px solid #ccc;
        }
        .require {
          color: #f76117;
          font-weight: bold;
        }
      }
    }
`;

const DetailsEdit = memo(() => {
    return (
        <Container>
            <MyPageHeader />
            <div className='bgAll'>
                <h1>개인정보수정</h1>
            </div>
            <table>
                <tbody>
                    {/* 성명 */}
                    <tr>
                        <th>성명</th>
                        <td>김다보미 (1995.08.30 여)</td>
                    </tr>
                    {/* 비밀번호 입력 */}
                    <tr>
                        <th>회원구분</th>
                        <td>SNS-Naver 회원</td>
                    </tr>
                </tbody>
            </table>
            <LoginFooter />
        </Container>
    );
});

export default DetailsEdit;

