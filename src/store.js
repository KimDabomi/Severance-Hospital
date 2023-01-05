import { configureStore } from "@reduxjs/toolkit";
import StaffSearchSlice from "./slices/StaffSearchSlice";
import CustomerBoardSlice from "./slices/CustomerBoardSlice";
import DrugSearchSlice from "./slices/DrugSearchSlice";
import YoutubeSlice from "./slices/YoutubeSlice";
import UnsupportedSlice from "./slices/UnsupportedSlice";
import CHospitalSlice from "./slices/CHospitalSlice";
import NewsSlice from "./slices/NewsSlice";

/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    StaffSearchSlice: StaffSearchSlice,
    CustomerBoardSlice: CustomerBoardSlice,
    DrugSearchSlice: DrugSearchSlice,
    YoutubeSlice: YoutubeSlice,
    UnsupportedSlice: UnsupportedSlice,
    CHospitalSlice: CHospitalSlice,
    NewsSlice: NewsSlice
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
});

export default store;
