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
import { getList, postItem, putItem, deleteItem } from "../../../slices/CHospitalClinicSlice";
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

const CHospitalClinic = memo(() => {
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
  const { pagenation, data, loading, error } = useSelector((state) => state.CHospitalClinicSlice);

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
        regexHelper.value(current.area, "지역이 없습니다.");
        regexHelper.value(current.introduction, "소개가 없습니다.");
        regexHelper.value(current.address, "주소가 없습니다.");
        regexHelper.value(current.zipCode, "우편번호가 없습니다.");
        regexHelper.value(current.tel, "전화번호가 없습니다.");
        regexHelper.value(current.name, "병의원명이 없습니다.");
        regexHelper.value(current.department, "진료과가 없습니다.");
        regexHelper.value(current.url, "URL이 없습니다.");
        regexHelper.value(current.division, "병의원 구분이 없습니다.");
      } catch (e) {
        window.alert(e.message);
        console.error(e);
        e.selector.focus();
        return;
      }

      // 리덕스를 통한 데이터 저장 요청
      dispatch(
        postItem({
          area: current.area.value,
          introduction: current.introduction.value,
          address: current.address.value,
          zipCode: current.zipCode.value,
          tel: current.tel.value,
          name: current.name.value,
          department: current.department.value,
          url: current.url.value,
          division: current.division.value
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
        regexHelper.value(current.area, "지역이 없습니다.");
        regexHelper.value(current.introduction, "소개가 없습니다.");
        regexHelper.value(current.address, "주소가 없습니다.");
        regexHelper.value(current.zipCode, "우편번호가 없습니다.");
        regexHelper.value(current.tel, "전화번호가 없습니다.");
        regexHelper.value(current.name, "병의원명이 없습니다.");
        regexHelper.value(current.department, "진료과가 없습니다.");
        regexHelper.value(current.url, "URL이 없습니다.");
        regexHelper.value(current.division, "병의원 구분이 없습니다.");
      } catch (e) {
        window.alert(e.message);
        console.error(e);
        e.selector.focus();
        return;
      }

      // 리덕스를 통한 데이터 저장 요청
      dispatch(
        putItem({
          id: current.id.value,
          area: current.area.value,
          introduction: current.introduction.value,
          address: current.address.value,
          zipCode: current.zipCode.value,
          tel: current.tel.value,
          name: current.name.value,
          department: current.department.value,
          url: current.url.value,
          division: current.division.value
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
      let redirectUrl = query ? `/manager/cooperation_hospital/?query=${query}` : "/manager/cooperation_hospital";
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
                <input className="field" type="text" name="area" />
              </td>
            </tr>
            <tr>
              <th>소개</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="introduction" />
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="address" />
              </td>
            </tr>
            <tr>
              <th>우편번호</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="zipCode" />
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="tel" />
              </td>
            </tr>
            <tr>
              <th>병의원명</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="name" />
              </td>
            </tr>
            <tr>
              <th>진료과</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="department" />
              </td>
            </tr>
            <tr>
              <th>URL</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="url" />
              </td>
            </tr>
            <tr>
              <th>병의원 구분</th>
              <td className="inputWrapper">
                <input className="field" type="text" name="division" />
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
              <th>병의원명</th>
              <th>진료과</th>
              <th>URL</th>
              <th>병의원 구분</th>
              <th>등록일시</th>
              <th>변경일시</th>
              <th colSpan="2">수정 / 삭제</th>
            </tr>
          </thead>
          <tbody>
            {
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
                            <input type="text" name="area" defaultValue={v.area} />
                          </td>
                          <td>
                            <input type="text" name="introduction" defaultValue={v.introduction} />
                          </td>
                          <td>
                            <input type="text" name="address" defaultValue={v.address} />
                          </td>
                          <td>
                            <input type="text" name="zipCode" defaultValue={v.zipCode} />
                          </td>
                          <td>
                            <input type="text" name="tel" defaultValue={v.tel} />
                          </td>
                          <td>
                            <input type="text" name="name" defaultValue={v.name} />
                          </td>
                          <td>
                            <input type="text" name="department" defaultValue={v.department} />
                          </td>
                          <td>
                            <input type="text" name="url" defaultValue={v.url} />
                          </td>
                          <td>
                            <input type="text" name="division" defaultValue={v.division} />
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
                          <td>{v.area}</td>
                          <td>{v.introduction}</td>
                          <td>{v.address}</td>
                          <td>{v.zipCode}</td>
                          <td>{v.tel}</td>
                          <td>{v.name}</td>
                          <td>{v.department}</td>
                          <td>{v.url}</td>
                          <td>{v.division}</td>
                          <td>{dayjs(v.regDate).format("YYYY.MM.DD HH:mm:ss")}</td>
                          <td>{v.editDate !== null ? dayjs(v.editDate).format("YYYY.MM.DD HH:mm:ss") : ""}</td>
                          <td>
                            <button type="button" data-id={v.id} onClick={onEditClick}>
                              수정하기
                            </button>
                          </td>
                          <td>
                            <button type="button" data-id={v.id} data-name={v.name} onClick={onDeleteClick}>
                              삭제하기
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  })
                : error && (
                    <tr>
                      <td colSpan="14" align="center">
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
            renderItem={(item) => <PaginationItem component={Link} to={`/manager/cooperation_hospital?page=${item.page}`} {...item} />}
          />
        </PaginationNav>
      )}
    </>
  );
});

export default CHospitalClinic;
