/**
 * @ File Name: UnsupportedSlice.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-31 01:50
 * @ Description: 비급여진료비 안내 페이지 slice
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";

// 코드별 항목 조회
export const getCode = createAsyncThunk(
  "UnsupportedSlice/getCode",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(
        process.env.REACT_APP_UNSUPPORTED_API_CODE_URL,
        {
          pageNo: 1,
          numOfRows: 20,
        }
      );
      result = response.data;
    } catch (err) {
      console.error(err);
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

// 코드별 항목 조회 2
export const getCode2 = createAsyncThunk(
  "UnsupportedSlice/getCode2",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      const response = await axios.get(
        process.env.REACT_APP_UNSUPPORTED_API_CODE2_URL,
        {
          query: payload?.query || '',
          page: payload?.page || 1,
          rows: payload?.rows || 20
        }
      );
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

// 병원별 비용
export const getPayHos = createAsyncThunk(
  "UnsupportedSlice/getPayHos",
  async (payload, { rejectWithValue }, page) => {
    let result = null;
    let totalCnt = 0;
    let curPage = 1;

    try {
      const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_PAY_HOS_URL + "&pageNo=" + curPage);
      totalCnt = response.data.response.body.totalCount;
      result = response.data;
    } catch (err) {
      console.error(err);
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const UnsupportedSlice = createSlice({
  name: "UnsupportedSlice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getCode.pending]: pending,
    [getCode.fulfilled]: fulfilled,
    [getCode.rejected]: rejected,

    [getCode2.pending]: pending,
    [getCode2.fulfilled]: fulfilled,
    [getCode2.rejected]: rejected,

    [getPayHos.pending]: pending,
    [getPayHos.fulfilled]: fulfilled,
    [getPayHos.rejected]: rejected,
  }
});

export default UnsupportedSlice.reducer;
