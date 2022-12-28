/** import */
import React from "react";
import ReactDOM from "react-dom/client";
/**/
import App from "./App";
/*/
import App from './test';
// */

/** 라우터 */
import { BrowserRouter } from "react-router-dom";

/** redux 구성을 위한 참조 */
import { Provider } from "react-redux"; 
// provider을 통해 store 구독
import store from "./store"; 
// 전체 slice를 포함한 store

/** Meta, GlobalStyles */
import Meta from "./Meta";
import GlobalStyles from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // store 속성 명시
  <Provider store={store}>
    <BrowserRouter>
      <Meta />
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
);
