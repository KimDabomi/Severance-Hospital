import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import StaffSearch from "./pages/staff/StaffSearch";

function App() {
  return (
    <div>
      <Link to="main_page"></Link>
      <Routes>
        <Route path="/" exapt={true} element={<StaffSearch />} />
      </Routes>
    </div>
  );
}

export default App;
