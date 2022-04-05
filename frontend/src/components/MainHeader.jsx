import React from 'react'
import {Link} from "react-router-dom"
function MainHeader() {
  return (
    <div className='text-center my-4'>
      <p className='text-xl'>Steven Ray Martinez</p>
      <p className='text-base'>is</p>
    <Link to="/">  <h1 className='text-3xl uppercase'>CINEPHILEBAKER</h1></Link>
    </div>
  )
}

export default MainHeader