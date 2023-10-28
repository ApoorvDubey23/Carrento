import React from 'react'
import './navbar.css'
function navbar() {
  return (
    <div className='fixed flex flex-row w-100 gap-5 justify-center items-center h-[10vh] font-sans font-bold text-[20px] text-white bg-red-500 bg-opacity-100 '>
      <div className='navitems'>Home</div>
      <div className='navitems'>Book</div>
      <div className='navitems'>Car Options</div>
      <div className='navitems'>Why Us</div>
      <div className='navitems'>Testimonials</div>
      <div className='navitems'>Contact Us</div>
      
    </div>
  )
}

export default navbar
