import React from 'react'
import img from "../images/cibil-lapi.png"
import FAQ from "../images/svgLogos/faq.svg"
import report from "../images/svgLogos/report.svg"
import approve from "../images/svgLogos/approve.svg"
import monitor_img from "../images/rankmsme.jpeg"
import playstore from "../images/apps/playstore.png"
import appstore from "../images/apps/appstore.png"
import picture from "../images/report-bg.jpeg"
import "../CSS/home.css"
import { Heading } from '@chakra-ui/react'
import { Footer } from './Footer'
import {Topbar} from './Topbar'
import { Link } from 'react-router-dom'
import home_banner from '../../src/images/home-banner.svg'
import banner from '../../src/images/banner.svg'
 
export const Home = () => {
  return (
    <div>
        <div className='slider'>
            <div className='slider-content' >
                <h1>Banks Check Your CIBIL Score Before Approving Your Loan*</h1>
                <Link to='/login'><button>Get Free Cibil Score & Report</button></Link>
                <p>Already have a CIBIL account?<a href="#">Log In</a></p>
                <p>Don't worry. Checking your own credit score won't lower it.</p>
            </div>
            <div className='lapi-img' >
                <img style={{width: '600px'}} src={home_banner} alt="not fount" />
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
            <button><Link to='/login'>GET YOUR CIBIL SCORE</Link></button>
        </div>
        <div className='help-center'>
            <div className='help-heading' >
                <h2>Help Center</h2>
                <p>Learn about CIBIL and how we can help you.</p>
            </div>
            <div className='help-card'>
                <div className='card' >
                    <img src={FAQ} alt="" />
                    <h3>FAQs</h3>
                    <p>Get quick answers to your most common questions.</p>
                    <h2>Know more</h2>
                </div>
                <div className='card' >
                    <img src={report} alt="" />
                    <h3>Why your CIBIL Score and Report</h3>
                    <p>Learn how it matters not only to you, but also to lenders.</p>
                    <h2>Know more</h2>
                </div>
                <div className='card' >
                    <img src={approve} alt="" />
                    <h3>Loan approval process</h3>
                    <p>Understand how banks evaluate your loan application.</p>
                    <h2>Know more</h2>
                </div>
            </div>
            <p>We are India's leading credit information company with one of the largest collections of consumer information.</p>
        </div>
        <div className='monitor' >
            <div className='monitor-img' >
                <img src={monitor_img} alt="not found" />
            </div>
            <div className='monitor-text'>
                <h2>Monitor Your Company's Credit Health with CIBIL Rank.</h2>
                <p>Easy access - check your report online anytime, anywhere.</p>
                <h3>70% of all companies who were sanctioned loans had a CIBIL RANK between 4 and 1.</h3>
                <button><Link to='/login'>Get Started</Link></button>
            </div>
        </div>
        <div className='app'>
            <div className='app-link' style={{display: 'flex'}}>
                <p style={{padding: '3rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda provident vero inventore ratione non vitae placeat! Quod, commodi? Nemo, veritatis corporis! Eligendi praesentium odit architecto eaque sunt laborum fuga!</p>
                <p style={{padding: '3rem'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda provident vero inventore ratione non vitae placeat! Quod, commodi? Nemo, veritatis corporis! Eligendi praesentium odit architecto eaque sunt laborum fuga!</p>
            </div>
                <p style={{width: '60%', margin: 'auto'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda provident vero inventore ratione non vitae placeat! Quod, commodi? Nemo, veritatis corporis! Eligendi praesentium odit architecto eaque sunt laborum fuga!</p>
        </div>
        <div className='app'>
            <div className='app-link'>
                <h2>Monitor your CIBIL Score on the go with the CIBIL App.</h2>
                <img src={playstore} alt="not found" />
                <img src={appstore} alt="not found" />
            </div>
        </div>
        <div className="pic">
            <img style={{width: '620px',display: 'block', margin: 'auto'}} src={banner} alt="not found" />
        </div>
        <div className='bottom-text'>
            <h2 style={{marginTop: '2rem'}}>Get your CIBIL Score & Report today.</h2>
            <button>Get Started Now</button>
        </div>
        <hr style={{backgroundColor:'#0094e9c2',height:"2px"}} />
        <Footer/>
    </div>
  )
}
