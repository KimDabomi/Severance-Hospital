/**
 * @ File Name: UnsupportedSlice.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 21:00
 * @ Description: 비급여진료비 안내 페이지 slice
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { pending, fulfilled, rejected } from '../helper/ReduxHelper';

// 서비스 인증 키
const KEY = process.env.REACT_APP_UNSUPPORTED_API_KEY;

// 코드별 항목 조회
export const getCode = createAsyncThunk('UnsupportedSlice/getCode', async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    try {
        const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_CODE_URL, {
            ServiceKey: KEY,
            pageNo: 1,
            numOfRows: 20
        });
        result = response.data;
    } catch (err) {
        console.error(err);
        result = rejectWithValue(err.response);
    }

    return result;
});

// 코드별 항목 조회 2
export const getCode2 = createAsyncThunk('UnsupportedSlice/getCode2', async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    try {
        const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_CODE2_URL, {
            ServiceKey: KEY,
            pageNo: 1,
            numOfRows: 20
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

// 병원별 비용
export const getPayHos = createAsyncThunk('UnsupportedSlice/getPayHos', async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    try {
        const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_PAY_HOS_URL, {
            ServiceKey: KEY,
            pageNo: 1,
            numOfRows: 20
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

// 지역별 비용
export const getPayLoc = createAsyncThunk('UnsupportedSlice/getPayLoc', async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    try {
        const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_PAY_LOCAL_URL, {
            ServiceKey: KEY,
            pageNo: 1,
            numOfRows: 20
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }

    return result;
});

const UnsupportedSlice = createSlice({
    name: "UnsupportedSlice",
    initialState: {
        data: null,
        pagenation: null,
        loading: false,
        error: null,
    },
    reducers: {
        getCurrentData: (state, action) => {
            return state;
        },
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

        [getPayLoc.pending]: pending,
        [getPayLoc.fulfilled]: fulfilled,
        [getPayLoc.rejected]: rejected,
    }
});

export const { getCurrentData } = UnsupportedSlice.actions;
export default UnsupportedSlice.reducer;