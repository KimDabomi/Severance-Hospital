import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exapt={true} element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
