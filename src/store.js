import { configureStore } from "@reduxjs/toolkit";
import CustomerBoardSlice from './slices/CustomerBoardSlice';

/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    CustomerBoardSlice:CustomerBoardSlice
  }
});

export default store;
