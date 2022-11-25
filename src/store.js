import { configureStore } from "@reduxjs/toolkit";
import StaffSearchSlice from "./slices/StaffSearchSlice";
/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    StaffSearchSlice: StaffSearchSlice,
  }
});

export default store;
