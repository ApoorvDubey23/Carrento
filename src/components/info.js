import React from 'react';
import './info.css'


function Info() {
    return (
        <div className='infomain max-md:gap-3 py-5'>
            <h3 className='max-md:m-0 text-3xl'>Book a car</h3>
        <div className='info max-md:gap-3'>
            <div className='info1 flex justify-center items-center flex-col'>
                <div className='info11 ' style={{fontWeight:'600'}}>🚘select your car type <span className='orangeastrsk'>*</span></div>

                <div className="dropdown">
                    <button className="cartypedrpdn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'1rem' , padding:'.3vh 1vh'}}>
                        Select your car type
                    </button>
                    <ul className="dropdown-menu" >
                        <li><a className="dropdown-item" >Action</a></li>
                        <li><a className="dropdown-item" >Another action</a></li>
                        <li><a className="dropdown-item" >Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div className='info2'>
                <div className='info21 max-md:m-0'style={{fontWeight:'600'}}>
                📌Pick-Up<span className='orangeastrsk'>*</span>
                </div>
                <input type='date' style={{fontSize:'1rem' , padding:'.3vh 1vh'}}/>
            </div>
            <div className='info3'style={{fontWeight:'600'}}>
                <div className='info31'>
                📌Drop-off<span className='orangeastrsk'>*</span>
                </div>
                <input type='date' style={{fontSize:'1rem' , padding:'.3vh 1vh'}}/>
            </div>
       

            
        </div>
        <div className='infobtn'>

                <button  type='submit'>Search</button>
        </div>
        </div>
    );
}

export default Info;
