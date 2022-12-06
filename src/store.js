import { configureStore } from "@reduxjs/toolkit";
import StaffSearchSlice from "./slices/StaffSearchSlice";
import CustomerBoardSlice from './slices/CustomerBoardSlice';
import DrugSearchSlice from './slices/DrugSearchSlice';
import YoutubeSlice from './slices/YoutubeSlice';

/** Slice 참조 */

const store = configureStore({
  // 직접 작성한 Slice 오브젝트 명시
  reducer: {
    StaffSearchSlice: StaffSearchSlice,
    CustomerBoardSlice:CustomerBoardSlice,
    DrugSearchSlice:DrugSearchSlice,
    YoutubeSlice:YoutubeSlice
  }
});

export default store;
