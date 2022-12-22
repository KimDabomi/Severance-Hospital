/**
 * @ File Name: UnsupportedSlice.js
 * @ Author: 김다보미 (cdabomi@nate.com)
 * @ Last Update: 2022-12-21 21:00
 * @ Description: 비급여진료비 안내 페이지 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 처리 함수 구현 */
export const getUnsupported = createAsyncThunk("UnsupportedSlice/getUnsupported", async (payload, { rejectWithValue }) => {
    let result = null;
    let params = null;

    if(payload?.npayKorNm){
        params = {
            serviceKey: process.env.REACT_APP_UNSUPPORTED_API_ENCODING_KEY,
            npayKorNm: payload.npayKorNm,
            page: payload.page ? payload.page:1
        }
    }

    try {
        const response = await axios.get(process.env.REACT_APP_UNSUPPORTED_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_UNSUPPORTED_API_DECODING_KEY,
                type: 'json', //데이터포맷
                pageNo: payload.pageNo, //페이지번호
                numOfRows: 20 //한 페이지 결과 수
            }
        });
        result = response.data.body;
        console.log(result);
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});



/** slice 정의 */
const UnsupportedSlice = createSlice({
    name: 'UnsupportedSlice',
    //이 모듈이 관리하는 상태값
    initialState: {
        data: null, //Ajax처리를 통해 수신된 데이터
        loading: false, //로딩여부
        error: null //에러정보
    },
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        [getUnsupported.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getUnsupported.fulfilled]: (state, { payload }) => {
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        [getUnsupported.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
})

export default UnsupportedSlice.reducer;