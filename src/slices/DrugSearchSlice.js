/**
 * @ File Name: DrugSearchSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-11-30 15:1:00
 * @ Description: 의약품 검색 페이지 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

/** 비동기 처리 함수 구현 */
export const getDrugSearch = createAsyncThunk("DrugSearchSlice/getDrugSearch", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_DRUG2_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_DRUG2_API_ENCODING_KEY,
                // 검색명 : 품목명 
                item_name: payload.item_name
            }
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

/** slice 정의 */
const DrugSearchSlice = createSlice({
    name: 'DrugSearchSlice',
    //이 모듈이 관리하는 상태값
    initialState: {
        data: null, //Ajax처리를 통해 수신된 데이터
        loading: false, //로딩여부
        error: null //에러정보
    },
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        [getDrugSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getDrugSearch.fulfilled]: (state, { payload }) => {
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        [getDrugSearch.rejected]: (state, { payload }) => {
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

export default DrugSearchSlice;