import React from 'react'
import img from "../images/cibil-lapi.png"
import "../CSS/home.css"
import { Heading } from '@chakra-ui/react'

export const Home = () => {
  return (
    <div>
        <hr style={{backgroundColor:'yellow',height:"5px"}} />
        <div className='slider'>
            <div className='slider-content' >
                <h1>Banks Check Your CIBIL Score Before Approving Your Loan*</h1>
                <button>GET FREE CIBIL SCORE & REPORT</button>
                <p>Already have a CIBIL account?<a href="#">Log In</a></p>
                <p>Don't worry. Checking your own credit score won't lower it.</p>
            </div>
            <div className='lapi-img' >
                <img src={img} alt="not fount" />
            </div>
        </div>
        <div className='text-line' >
            <p>Learn. Plan. Protect. All in one place. Here’s how.</p>
        </div>
        <div className='cibil-credit-info' >
            <div className='about-credits' >
                <div className='credit-text' >
                    <hr />
                    <h2>24x7 credit monitoring with CIBIL alerts</h2>
                    <p>Safeguard against identity theft with email & SMS notifications.</p>
                </div>
                <div className='credit-text' >
                    <hr />
                    <h2>Unlimited access to your CIBIL dashboard</h2>
                    <p>Get regular updates to your CIBIL Score & Report.</p>
                </div>
                <div className='credit-text' >
                    <hr />
                    <h2>Make the right credit decisions with Score Simulator</h2>
                    <p>Find out how your credit actions can impact your CIBIL Score.</p>
                </div>
                <div className='credit-text' >
                    <hr />
                    <h2>Get personalized loan offers</h2>
                    <p>Tailored loan offers based on your latest CIBIL Score.</p>
                </div>
            </div>
            <Heading fontSize='20px' as='p'  size='md' >Everything you need to stay loan-ready, always.</Heading>
            <button>GET YOUR CIBIL SCORE</button>
        </div>
    </div>
  )
}
