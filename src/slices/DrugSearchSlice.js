/**
 * @ File Name: DrugSearchSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-21
 * @ Description: 의약품 검색 페이지 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

/** 의약품 낱알식별 openAPI */
export const getDrugSearch = createAsyncThunk("DrugSearchSlice/getDrugSearch", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_DRUG2_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_DRUG2_API_DECODING_KEY,
                type: 'json', //데이터포맷
                pageNo: payload?.pageNo, //페이지번호
                numOfRows: 12, //한 페이지 결과 수
                item_seq: payload.item_seq
            }
        });
        result = response.data.body;
        console.log('낱알식별 result: ',result);
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

/** e약은요 openAPI */
export const getDrugDetail = createAsyncThunk("DrugSearchSlice/getDrugDetail", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_DRUG_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_DRUG_API_ENCODING_KEY,
                type: 'json', //데이터포맷
                itemSeq: payload.itemSeq
            }
        });
        result = response.data.body;
        console.log('e약은요 result: ',result);
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
        /** 낱알식별 액션함수 */
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
        },

        /** e약은요 액션함수 */
        [getDrugDetail.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getDrugDetail.fulfilled]: (state, { payload }) => {
            return {
                data: payload,
                loading: false,
                error: null
            }
        },
        [getDrugDetail.rejected]: (state, { payload }) => {
            return {
                ...state,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        },
    }
})

export default DrugSearchSlice.reducer;