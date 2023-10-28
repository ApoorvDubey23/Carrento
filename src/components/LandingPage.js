import React from 'react'
import "../components/LandingPage.css"
import IMG from '../images/poloLandingPage.jpg'
function LandingPage() {
    return (
        <div className='lp pt-[20vh]'>
            <div className='contentlp'>
                <div className='cntntlp1'>
                    Plan your trip now
                </div>
                <div className='cntntlp2'>
                    Save <span className='cntntlp2big'>big</span> with our car rental
                </div>
                <div className='cntntlp3'>
                    Rent the car of your dreams.Unbeatable prices,unlimited miles,flexible pick-up options and much more.
                </div>
                <div className='cntntlp4'>
                    <button className='button1 max-md:my-0 mx-3'>Book Ride ✔ </button>
                    <button className='button2 max-md:m-1'>Learn More</button>
                </div>
            </div>
            <div className='imagelp'>
                <img src={IMG} alt='polo' />
            </div>

        </div>
    )
}

export default LandingPage
