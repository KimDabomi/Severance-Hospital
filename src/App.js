import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import StaffSearch from "./pages/staff/StaffSearch";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" exapt={true} element={<MainPage />} />
        <Route path="/" exapt={true} element={<StaffSearch />} />
      </Routes>
    </div>
  );
}

export default App;
