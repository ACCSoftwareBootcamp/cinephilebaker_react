import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between">
        <div className="mb-2">
          <h2>Email</h2>
          <a href="mailto:stevenraymartinez496@gmail.com">
            stevenraymartinez496@gmail.com{" "}
          </a>
        </div>
        <div className='hidden lg:block'>
          <Link to="/">
            <h1 className="text-3xl uppercase">CINEPHILEBAKER</h1>
          </Link>
        </div>
        <div className="mb-2">
          <h2>Instagram</h2>
          <a href="https://www.instagram.com/cinephilebaker/">
            stevenraymartinez496@gmail.com{" "}
          </a>
        </div>
      </footer>
  )
}

export default Footer