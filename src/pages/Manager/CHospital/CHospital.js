/**
 * @ File Name: ManagerCooperationHospital.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-05 00:33:33
 * @ Description: 관리자 협력병원
 */

import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { getList, postItem } from "../../../slices/CHospitalSlice";
import dayjs from "dayjs";

import Spinner from "../../../components/Spinner";

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
// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;

  .controll {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }

  .clickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }

    &:active {
      transform: scale(0.9, 0.9);
    }
  }
`;

const ManagerCooperationHospital = memo(() => {
  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CHospitalSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList());
  }, []);

  /** 데이터 추가 */
  /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onCHospitalSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.currentTarget;

    // 입력값에 대한 유효성 검사
    // ... 생략 ...

    // 리덕스를 통한 데이터 저장 요청.
    dispatch(
      postItem({
        CHospitalArea: current.CHospitalArea.value,
        CHospitalIntroduction: current.CHospitalIntroduction.value,
        CHospitalAddress: current.CHospitalAddress.value,
        CHospitalTel: current.CHospitalTel.value,
        CHospitalName: current.CHospitalName.value,
        CMedicalDepartment: current.CMedicalDepartment.value
      })
    ).then(({ payload, error }) => {
      if (error) {
        window.alert(payload.data.rtmsg);
        return;
      }

      // navigate(`/manager/manager_cooperation_hospital`);
    });
  }, []);

  return (
    <>
      <Spinner loading={loading} />

      {/* 검색폼 */}
      <ControlContainer>
        <NavLink to="c_hospital_add" className="controll clickable">
          학과정보 추가하기
        </NavLink>
      </ControlContainer>

      {/* 데이터 추가 */}
      <form onSubmit={onCHospitalSubmit}>
        <TableEx>
          <colgroup>
            <col width="120" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>지역</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalArea" />
              </td>
            </tr>
            <tr>
              <th>소개</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalIntroduction" />
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalAddress" />
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalTel" />
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalName" />
              </td>
            </tr>
            <tr>
              <th>진료과</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CMedicalDepartment" />
              </td>
            </tr>
          </tbody>
        </TableEx>
        <button type="submit">저장하기</button>
      </form>

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
                <th>등록일시</th>
                <th>변경일시</th>
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
                      <tr key={i}>
                        <td>{v.CHospitalArea}</td>
                        <td>{v.CHospitalIntroduction}</td>
                        <td>{v.CHospitalAddress}</td>
                        <td>{v.CHospitalTel}</td>
                        <td>{v.CHospitalName}</td>
                        <td>{v.CMedicalDepartment}</td>
                        <td>{dayjs(v.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                        <td>{v.editDate !== null ? dayjs(v.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
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
