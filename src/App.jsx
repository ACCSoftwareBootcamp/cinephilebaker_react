import React from "react";
import {Routes, Route} from "react-router-dom"

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portraits" element={<GalleryPage />} />
        <Route path="/somewhere-in-mathis" element={<GalleryPage />} />
        <Route path="/audio-visual" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
