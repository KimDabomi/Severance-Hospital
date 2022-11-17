import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CustomerSlice = createSlice({
    name: 'CustomerSlice',
    // 이 모듈이 관리하고자하는 상태값들을 명시
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {
        
        
    },
    
});

// 액션함수들 내보내기
export const { plus, minus } = CustomerSlice.actions;

// 리듀서 객체 내보내기
export default CustomerSlice.reducer;