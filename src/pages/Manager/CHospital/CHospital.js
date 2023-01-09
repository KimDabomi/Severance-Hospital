/**
 * @ File Name: ManagerCooperationHospital.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-05 00:33:33
 * @ Description: 관리자 협력병원
 */

/** import */
// react
import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getList, postItem, putItem, deleteItem } from "../../../slices/CHospitalSlice";
// module
import dayjs from "dayjs";
import { Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
// helper
import RegexHelper from "../../../helper/RegexHelper";
import { useQueryString } from "../../../hooks/useQueryString";
// components
import Spinner from "../../../components/Spinner";
import { GetEditForm, Table, TableEx, SearchForm, AddForm, PaginationNav, useStyles } from "../common/ManagerStyleConponents";

const CHospital = memo(() => {
  /** 페이지 강제 이동을 처리하기 위한 navigate함수 생성 */
  const navigate = useNavigate();

  /** 화면 갱신 상태값 */
  const [isUpdate, setIsUpdate] = useState(1);
  /** 수정 아이디 상태값 */
  const [updateId, setUpdateId] = useState(-1);

  /** QueryString 값 가져오기 */
  const { query, page = 1 } = useQueryString();

  /** Pagination */
  const nowPage = parseInt(page || "1", 10);
  const classes = useStyles();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { pagenation, data, loading, error } = useSelector((state) => state.CHospitalSlice);

  /** 최초마운트시 리덕스를 통해 목록을 조회한다. */
  useEffect(() => {
    dispatch(getList({ query: query, page: page, rows: 20 }));
  }, [isUpdate, query, page]);

  /** 추가 */
  const onAddSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;
      const regexHelper = RegexHelper.getInstance();

      // 입력값에 대한 유효성 검사
      try {
        regexHelper.value(current.CHospitalArea, "지역이 없습니다.");
        regexHelper.value(current.CHospitalIntroduction, "소개가 없습니다.");
        regexHelper.value(current.CHospitalAddress, "주소가 없습니다.");
        regexHelper.value(current.CHospitalZipCode, "우편번호가 없습니다.");
        regexHelper.value(current.CHospitalTel, "전화번호가 없습니다.");
        regexHelper.value(current.CHospitalName, "이름이 없습니다.");
      } catch (e) {
        window.alert(e.message);
        console.group("========== CHospital.js - 데이터 추가 ==========");
        console.error(e);
        console.groupEnd();
        e.selector.focus();
        return;
      }

      // 리덕스를 통한 데이터 저장 요청
      dispatch(
        postItem({
          CHospitalArea: current.CHospitalArea.value,
          CHospitalIntroduction: current.CHospitalIntroduction.value,
          CHospitalAddress: current.CHospitalAddress.value,
          CHospitalZipCode: current.CHospitalZipCode.value,
          CHospitalTel: current.CHospitalTel.value,
          CHospitalName: current.CHospitalName.value,
          CMedicalDepartment: current.CMedicalDepartment.value,
          CHospitalURL: current.CHospitalURL.value
        })
      ).catch(({ payload, error }) => {
        window.alert(payload.data.rtmsg);
        return;
      });

      alert("추가되었습니다.");
      setIsUpdate(isUpdate + 1);
    },
    [isUpdate]
  );

  /** 수정 */
  const onEditSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;
      const regexHelper = RegexHelper.getInstance();

      // 입력값에 대한 유효성 검사
      try {
        regexHelper.value(current.CHospitalArea, "지역이 없습니다.");
        regexHelper.value(current.CHospitalIntroduction, "소개가 없습니다.");
        regexHelper.value(current.CHospitalAddress, "주소가 없습니다.");
        regexHelper.value(current.CHospitalZipCode, "우편번호가 없습니다.");
        regexHelper.value(current.CHospitalTel, "전화번호가 없습니다.");
        regexHelper.value(current.CHospitalName, "이름이 없습니다.");
      } catch (e) {
        window.alert(e.message);
        console.group("========== CHospital.js - 데이터 수정 ==========");
        console.error(e);
        console.groupEnd();
        e.selector.focus();
        return;
      }

      // 리덕스를 통한 데이터 저장 요청.
      dispatch(
        putItem({
          id: current.id.value,
          CHospitalArea: current.CHospitalArea.value,
          CHospitalIntroduction: current.CHospitalIntroduction.value,
          CHospitalAddress: current.CHospitalAddress.value,
          CHospitalZipCode: current.CHospitalZipCode.value,
          CHospitalTel: current.CHospitalTel.value,
          CHospitalName: current.CHospitalName.value,
          CMedicalDepartment: current.CMedicalDepartment.value,
          CHospitalURL: current.CHospitalURL.value
        })
      ).catch(({ payload, error }) => {
        window.alert(payload.data.rtmsg);
        return;
      });

      alert("수정되었습니다.");
      setIsUpdate(isUpdate + 1);
      setUpdateId(-1);
    },
    [isUpdate]
  );

  /** 삭제 */
  const onDeleteClick = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.currentTarget;

      if (window.confirm(`정말 ${current.dataset.name}(을)를 삭제하시겠습니까?`)) {
        dispatch(deleteItem({ id: current.dataset.id })).then(({ payload, error }) => {
          if (error) {
            window.alert(payload.data.rtmsg);
            return;
          }

          window.alert("삭제되었습니다.");
          setIsUpdate(isUpdate + 1);
        });
      }
    },
    [isUpdate]
  );

  /** 수정 버튼 */
  const onEditClick = useCallback((e) => {
    e.preventDefault();

    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    setUpdateId(id);
  }, []);

  /** 검색 */
  const onSearchSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 검색어
      const query = e.currentTarget.query.value;

      // 검색어에 따라 URL을 구성한다.
      let redirectUrl = query ? `/manager/c_hospital/?query=${query}` : "/manager/c_hospital";
      navigate(redirectUrl);
    },
    [navigate]
  );

  /** 페이지 */
  const handleChange = useCallback(() => {
    // 스크롤바를 강제로 맨 위로 이동시킨다.
    window.scrollTo(0, 0);
  });

  return (
    <>
      {/* 로딩 */}
      <Spinner loading={loading} />

      {/* 추가 */}
      <AddForm onSubmit={onAddSubmit}>
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
              <th>우편번호</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalZipCode" />
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
            <tr>
              <th>URL</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="CHospitalURL" />
              </td>
            </tr>
          </tbody>
        </TableEx>
        <button type="submit">새로운 정보 추가</button>
      </AddForm>

      {/* 검색 */}
      <SearchForm onSubmit={onSearchSubmit}>
        <input type="text" name="query" defaultValue={query} placeholder="지역, 이름 검색" />
        <button type="submit">검색</button>
      </SearchForm>

      {/* 조회, 수정 */}
      <GetEditForm onSubmit={onEditSubmit}>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>지역</th>
              <th>소개</th>
              <th>주소</th>
              <th>우편번호</th>
              <th>전화번호</th>
              <th>이름</th>
              <th>진료과</th>
              <th>URL</th>
              <th>등록일시</th>
              <th>변경일시</th>
              <th colSpan="2">수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {
              //처리 결과는 존재하지만 0개인경우
              data && pagenation && !error
                ? data.map((v, i) => {
                    if (v.id === updateId) {
                      return (
                        <tr key={v.id} data-id={v.id} className="editTr">
                          <td style={{ display: "none" }}>
                            <input type="hidden" name="id" defaultValue={v.id} />
                          </td>
                          <td>{v.id}</td>
                          <td>
                            <input type="text" name="CHospitalArea" defaultValue={v.CHospitalArea} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalIntroduction" defaultValue={v.CHospitalIntroduction} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalAddress" defaultValue={v.CHospitalAddress} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalZipCode" defaultValue={v.CHospitalZipCode} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalTel" defaultValue={v.CHospitalTel} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalName" defaultValue={v.CHospitalName} />
                          </td>
                          <td>
                            <input type="text" name="CMedicalDepartment" defaultValue={v.CMedicalDepartment} />
                          </td>
                          <td>
                            <input type="text" name="CHospitalURL" defaultValue={v.CHospitalURL} />
                          </td>
                          <td>{dayjs(v.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                          <td>{v.editDate !== null ? dayjs(v.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
                          <td colSpan="2">
                            <button type="submit">수정완료</button>
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={v.id}>
                          <td>{v.id}</td>
                          <td>{v.CHospitalArea}</td>
                          <td>{v.CHospitalIntroduction}</td>
                          <td>{v.CHospitalAddress}</td>
                          <td>{v.CHospitalZipCode}</td>
                          <td>{v.CHospitalTel}</td>
                          <td>{v.CHospitalName}</td>
                          <td>{v.CMedicalDepartment}</td>
                          <td>{v.CHospitalURL}</td>
                          <td>{dayjs(v.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                          <td>{v.editDate !== null ? dayjs(v.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
                          <td>
                            <button type="button" data-id={v.id} onClick={onEditClick}>
                              수정하기
                            </button>
                          </td>
                          <td>
                            <button type="button" data-id={v.id} data-name={v.CHospitalName} onClick={onDeleteClick}>
                              삭제하기
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })
                : error && (
                    <tr>
                      <td colSpan="13" align="center">
                        {error.message}
                      </td>
                    </tr>
                  )
            }
          </tbody>
        </Table>
      </GetEditForm>

      {/* 페이지 */}
      {data && pagenation && !error && (
        <PaginationNav>
          <Pagination
            count={pagenation.totalPage}
            defaultPage={1}
            siblingCount={2}
            boundaryCount={1}
            page={nowPage}
            className={classes.root}
            onChange={handleChange}
            renderItem={(item) => <PaginationItem component={Link} to={`/manager/c_hospital?page=${item.page}`} {...item} />}
          />
        </PaginationNav>
      )}
    </>
  );
});

export default CHospital;
