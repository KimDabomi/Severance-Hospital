/**
 * @ File Name: PaginationCustom.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2023-01-11 17:33:33
 * @ Description: material ui의 pagination 커스텀 컴포넌트
 */

/** import */
import React, { memo, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// pagination
import { Pagination } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PaginationItem from "@mui/material/PaginationItem";

/** style */
const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

/**
 * @page useQueryString()을 통해 가져온 값
 * @pagenation Redux의 pagenation값
 * @pageQueryPath 현재 페이지 번호를 QueryString으로 표현하기 위한 Path
 */
const PaginationCustom = memo(({ page, pagenation, pageQueryPath }) => {
  /** 페이지 구성 */
  const nowPage = parseInt(page || "1", 10);
  
  /** 페이지 커스텀 스타일 */
  const paginationStyle = makeStyles((theme) => ({
    root: {
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#168",
        color: "#fff"
      }
    }
  }));
  // classes 적용
  const classes = paginationStyle();

  /** 페이지 최상단 이동 */
  const handleChange = useCallback(() => {
    // 스크롤바를 강제로 맨 위로 이동시킨다.
    window.scrollTo(0, 0);
  });

  return (
    <PaginationNav>
      <Pagination
        count={pagenation.totalPage}
        defaultPage={1}
        siblingCount={2}
        boundaryCount={1}
        page={nowPage}
        className={classes.root}
        onChange={handleChange}
        renderItem={(item) => <PaginationItem component={Link} to={`${pageQueryPath}?page=${item.page}`} {...item} />}
      />
    </PaginationNav>
  );
});

export default PaginationCustom;
