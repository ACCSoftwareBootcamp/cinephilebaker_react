import React from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
