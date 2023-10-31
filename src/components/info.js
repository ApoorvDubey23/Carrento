import React from 'react';
import './info.css'
import Form from 'react-bootstrap/Form';

function Info() {
    return (
        
        
        <div className='infomain max-md:gap-3 py-5'>
            <h3 className='max-md:m-0 text-3xl'>Book a car</h3>
        <div className='info max-md:gap-3'>
            <div className='info1 flex justify-center items-center flex-col'>
                <div className='info11 ' style={{fontWeight:'600'}}>🚘select your car type <span className='orangeastrsk'>*</span></div>

             
         <Form.Select aria-label="Default select example">
      <option>Select your car type</option>
      <option value="1">Automatic</option>
      <option value="1">Manual</option>
    </Form.Select>

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
