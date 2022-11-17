import { configureStore } from "@reduxjs/toolkit";
/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
  }
});

export default store;
