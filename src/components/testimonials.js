import React from 'react'

function testimonials() {
  return (
    <div className='flex flex-col gap-2  justify-center items-center p-20 max-md:w-[100vw] max-md:p-[20px] max-md:mt-10'>
<div className='text-lg font-semibold '>Reviewed by people</div>
<div className='text-3xl font-bold'>Client's Testimonials</div>
<div className='w-[60vw] text-center max-md:w-[100%] '>  
Discover the positive impact we've made on the our clots by reading through their
testimonials Our clients have experienced our service and results, and they're eager to share
their postive experiences with you.
</div>
<div className='my-10 w-[100%]  flex justify-center gap-[2vw] max-md:flex-col max-md:my-0 '>
<div  style={{'boxShadow':'0px 0px 5px rgba(253, 33, 24, 55)'}} class="card w-[35%] flex border-red-500  bg-opacity-20 rounded-lg shadow-md backdrop-blur-md border border-opacity-30 max-md:w-[100%] max-md:mb-4">
        <div class="card-header text-xl font-semibold text-black bg-red-500 bg-opacity-100 ">
    Parry Hotter
  </div>
  <div class="card-body  ">
    <p class="card-text font-semibold">"We rented a car from this website and 
had an amazing experience! The
booking was easy and the rental rates were very affordable." </p>
  </div>
</div>
      <div  style={{'boxShadow':'0px 0px 5px rgba(253, 33, 24, 55)'}} class="card w-[35%]  flex border-red-500  bg-opacity-20 rounded-lg shadow-md backdrop-blur-md border border-opacity-30 max-md:w-[100%]">
  <div class="card-header text-xl font-semibold text-black bg-red-500  bg-opacity-100 ">
    Uzunaki Maruto 
  </div>
  <div class="card-body ">
    <p class="card-text font-semibold ">“The car was in great condition and
made our trip even better. Highly
fecommend for this car rental
website!”
</p>
  </div>
</div>
    </div></div>
  )
}

export default testimonials
