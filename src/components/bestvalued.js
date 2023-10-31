import React from 'react';
import connect from '../images/crosscountry.png';
import hiddencharges from '../images/hidden charges.png';
import pricing from '../images/pricing.png';

function Counter() {
  return (
    <div>
      <div className='flex flex-column justify-center items-center bg-black text-white w-100 h-60 mt-20'>
        <div className="text-5xl font-bold max-md:2xl text-center px-1">
          Save<span className='text-red-500'> Big</span> with our easy car rental
        </div>
        <div className='text-xl mt-2 text-center'>Top Airports. Local Suppliers. <span className='text-red-700'>24/7</span> Support</div>
      </div>

      <div className='flex w-100 mt-10 justify-center items-center flex-col'>
        <div className='text-5xl font-bold font-sans-serif mt-4 mb-20 max-md:mb-5'>
          WHY US?
        </div>

        <div className="flex w-[80%] gap-15 md:w-[90%] max-md:flex-col max-md:justify-center max-md:items-center">
   <div className='flex flex-col gap-4 w-[60%] max-md:w-[100%] max-md:mb-3 max-md:justify-center max-md:items-center'>
            <div className='text-3xl font-bold font-sans max-md:w-[100%] max-md:wrap max-md:mb-3 max-md:text-center'>
              Best Valued <br/> deals you will ever find
            </div>

            <p>
              Discover the best deals you'll ever find with our unbeatable offers.
              We're dedicated to providing you with the best value for your
              money, so you can enjoy top-quality services and products without
              breaking the bank. Our deals are designed to give you the ultimate
              renting experience, so don't miss out on your chance to save big.
            </p>
            <button className="bg-red-500 bg-opacity-100 border-0 text-white text-lg shadow-xl p-4 font-poppins font-semibold w-fit py-1 px-3">
              Find Details {">"}
            </button>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='text-sm flex gap-3 bg-gradient-to-l from-red-500 to-white p-3'>
              <img className='h-[80px]' src={connect} alt='img' />
              <div>
                <div className='text-xl font-bold font-sans'>
                  Cross Country Drive
                </div>
                <p>
                  Take your driving experience to the next level with our top-notch vehicles for your
                  cross-country adventures.
                </p>
              </div>
            </div>

            <div className='text-sm flex gap-3 bg-gradient-to-l from-red-500 to-white p-3'>
              <img className='h-[80px]' src={hiddencharges} alt='img' />
              <div>
                <div className='text-xl font-bold font-sans'>
                  No Hidden Charges
                </div>
                <p>
                  Enjoy peace of mind with our no hidden charges policy. We believe in transparent
                  and honest pricing.
                </p>
              </div>
            </div>

            <div className='text-sm flex gap-3 bg-gradient-to-l from-red-500 to-white p-3'>
              <img className='h-[80px]' src={pricing} alt='img' />
              <div>
                <div className='text-xl font-bold font-sans'>
                  All Inclusive Pricing
                </div>
                <p>
                  Get everything you need in one convenient, transparent price with our all-inclusive
                  pricing policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
