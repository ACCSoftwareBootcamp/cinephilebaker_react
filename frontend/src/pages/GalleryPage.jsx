import React, {useState} from "react";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom"
function GalleryPage() {
  const [gallery,setGallery] = useState([{
    url: "",
    title: ""
  }])
  const params = useParams()

  return (
    <>
      <main className="py-5">
       <h2 className="text-center text-2xl uppercase">{params.gallery}</h2>
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;
