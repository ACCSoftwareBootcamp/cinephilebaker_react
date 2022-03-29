import React from "react";
import {Routes, Route} from "react-router-dom"

import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container mx-auto">
  
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
