/**
 * @ File Name: DrugSearchSlice.js
 * @ Author: 주혜지 (rosyjoo1999@gmail.com)
 * @ Last Update: 2022-12-26
 * @ Description: 의약품 검색 페이지 slice
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

/** 의약품 낱알식별 openAPI */
export const getDrugSearch = createAsyncThunk("DrugSearchSlice/getDrugSearch", async (payload, { rejectWithValue }) => {
    let result = null;

    //payload객체가 null이나 undefined가 아니고 그 안의 keyword값이 존재한다면?
    if(payload?.item_name){
        console.log('검색어 :',payload?.item_name);
    //     //axios에 설정할 qeurysting 데이터 구성
    //     params = {
    //         item_name: payload?.item_name
    //     }
    }

    try {
        const response = await axios.get(process.env.REACT_APP_DRUG2_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_DRUG2_API_DECODING_KEY,
                type: 'json', //데이터포맷
                pageNo: payload?.pageNo, //페이지번호
                numOfRows: 12, //한 페이지 결과 수
                item_seq: payload.item_seq,
                item_name: payload?.item_name
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
                serviceKey: process.env.REACT_APP_DRUG_API_DECODING_KEY || process.env.REACT_APP_DRUG_API_ENCODING_KEY,
                type: 'json', //데이터포맷
                pageNo: payload?.pageNo, //페이지번호
                numOfRows: 12, //한 페이지 결과 수
                itemSeq: payload?.itemSeq,
                itemName: payload?.itemName,
            }
        });
        result = response.data.body;
        console.log('e약은요 result: ',response.data.body);
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

/** e약은요 단일행 데이터 조회 */
export const getDrugDetailItem = createAsyncThunk("DrugSearchSlice/getDrugDetail", async (payload, { rejectWithValue }) => {
    let result = null;

    try {
        const response = await axios.get(process.env.REACT_APP_DRUG_API_URL,{
            params: {
                serviceKey: process.env.REACT_APP_DRUG_API_DECODING_KEY || process.env.REACT_APP_DRUG_API_ENCODING_KEY,
                type: 'json', //데이터포맷
                pageNo: payload?.pageNo, //페이지번호
                numOfRows: 12, //한 페이지 결과 수
                itemSeq: payload?.itemSeq,
                itemName: payload?.itemName,
            }
        });
        result = response.data.body;
        console.log('e약은요 result: ',response.data.body);
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
    reducers: {
        getCurrentData: (state, action) => {
            return state;
        },
    },
    // 외부 action 및 비동기 action (Ajax용)
    extraReducers: {
        /** 낱알식별 액션함수 */
        [getDrugSearch.pending]: (state, { payload }) => {
            return { ...state, loading: true }
        },
        [getDrugSearch.fulfilled]: (state, { payload }) => {
            // action함수의 meta에는 API에 요청시 전송한 파라미터가 포함되어 있다.
            // 1페이지 이후의 검색 결과는 기존 데이터를 덧붙여야 한다.
            if (payload.pageNo > 1) {
                payload.items = state.data.items.concat(payload.items);
                // console.log('슬라이스 concat',payload.items);
                // console.log('슬라이스 state',state);
            }
            
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

export const { getCurrentData } = DrugSearchSlice.actions;
export default DrugSearchSlice.reducer;