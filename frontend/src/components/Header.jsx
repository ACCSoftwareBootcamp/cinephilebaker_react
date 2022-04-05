import React from 'react'
import MainHeader from '../components/MainHeader'
import Navbar from '../components/Navbar'

function Header() {
  return (
    <header>
 <div className="px-5 col-span-12 lg:hidden">
        <MainHeader />
        <hr style={{ borderTop: ".25rem solid white" }} />
      </div>
      <Navbar />

    </header>
  )
}

export default Header