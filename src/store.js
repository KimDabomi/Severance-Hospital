import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slices/SearchSlice";
/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    SearchSlice: SearchSlice,
  }
});

export default store;
