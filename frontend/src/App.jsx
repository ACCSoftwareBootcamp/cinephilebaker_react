import React, {useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
function App() {
  useEffect(() => {
    const getData = async() => {
      const response = await fetch("http://localhost:1337/api/galleries")
      const data = await response.json()
     
    }
    getData()
  },[])
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
