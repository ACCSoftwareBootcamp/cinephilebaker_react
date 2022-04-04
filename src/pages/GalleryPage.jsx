import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
function GalleryPage() {
  return (
    <div>
      <Navbar />
      <main>

      </main>
      <footer className='flex flex-col lg:flex-row justify-between'>  
      <div className="mb-2">
        <h2>Email</h2>
        <a href="mailto:stevenraymartinez496@gmail.com">
          stevenraymartinez496@gmail.com{" "}
        </a>
      </div>
      <div>
        <Link to="/"><h1 className='text-3xl uppercase'>CINEPHILEBAKER</h1></Link>
      </div>
      <div className="mb-2">
        <h2>Instagram</h2>
        <a href="https://www.instagram.com/cinephilebaker/">
          stevenraymartinez496@gmail.com{" "}
        </a>
      </div>
  
      </footer>
    </div>
  )
}

export default GalleryPage