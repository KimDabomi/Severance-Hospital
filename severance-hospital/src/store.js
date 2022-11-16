import { configureStore } from "@reduxjs/toolkit";
/** Slice 참조 */
import userSlice from './slices/userSlice';

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    userSlice: userSlice
  }
});

export default store;
