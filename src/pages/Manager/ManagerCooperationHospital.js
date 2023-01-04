/**
 * @ File Name: ManagerCooperationHospital.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-05 00:33:33
 * @ Description: 관리자 협력의사 테이블
 */

import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getList } from "../../slices/CooperationHospitalSlice";

import Spinner from "../../components/Spinner";

const Table = styled.table`
  border-collapse: collapse;
  border-top: 3px solid #168;
  font-size: 14px;
  text-align: center;
  margin: auto;
  width: 100%;

  th {
    color: #168;
    background: #f0f6f9;
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
    border: 1px solid #ddd;

    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  }
`;
const TableEx = styled(Table)`
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
  }
`;

const ManagerCooperationHospital = memo(() => {
  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CooperationHospitalSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList());
  }, []);

  console.log(data);

  return (
    <>
      <Spinner loading={loading} />

      {/* 조회결과 표시하기 */}
      {error ? (
        <h1>에러 발생함</h1>
      ) : (
        data && (
          <Table>
            <thead>
              <tr>
                <th>지역</th>
                <th>소개</th>
                <th>주소</th>
                <th>전화번호</th>
                <th>이름</th>
                <th>진료과</th>
                <th>시작</th>
                <th>끝</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {
                //처리 결과는 존재하지만 0개인경우
                data.length > 0 ? (
                  data.map((v, i) => {
                    return (
                      <tr key={v.id}>
                        <td>{v.CHospitalArea}</td>
                        <td>{v.CHospitalIntroduction}</td>
                        <td>{v.CHospitalAddress}</td>
                        <td>{v.CHospitalTel}</td>
                        <td>{v.CHospitalName}</td>
                        <td>{v.CMedicalDepartment}</td>
                        <td>{v.regDate}</td>
                        <td>{v.editDate}</td>
                        <td>수정</td>
                        <td>삭제</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4">글이 없습니다.</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        )
      )}
    </>
  );
});

export default ManagerCooperationHospital;
