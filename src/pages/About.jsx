import React from 'react'
import cityImg from "../images/aboutUS.png"
import "../CSS/about.css"
import { Footer } from '../components/Footer'
import banner from '../images/banner.svg'


export const About = () => {
  return (
    <div>
      <div className="about-top">
        <div className='about-text'>
          <h3>TRANSUNION CIBIL</h3>
          <h2>Know more</h2>
          <p>We are India's leading credit information company with one of the largest collections of consumer information.</p>
          <button>Know more</button>
        </div>
        <div className='img'>
          <img style={{width: '600px', margin: '1rem auto'}} src={banner} alt="" />
        </div>
      </div>
      <div className="about-middle">
        <div className='middle-left'>
          <h2>About TransUnion CIBIL</h2>
          <p>About TransUnion CIBIL</p>
          <p>Company History</p>
          <p>Values and Beliefs</p>
          <p>Information Security</p>
          <p>Global Presence</p>
          <p>CSR</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Newsroom</p>
          <p>Corporate Information</p>
        </div>
        <div className='middle-right'>
          <p>
            India's pioneer information and insights company, TransUnion CIBIL maintains one of the largest collections of consumer credit information globally.

            We have over 5,000 members-including all leading banks, financial institutions, non-banking financial companies and housing finance companies–and maintain credit records of over 1000 million individuals and businesses.

            Our mission is to create information solutions that enable businesses to grow and give consumers faster, cheaper access to credit and other services.

            We create value for our members by providing information for economic opportunity, information for great experiences and information for personal empowerment. With comprehensive, reliable information on consumer and commercial borrowers, they are able to make sound credit decisions about individuals and businesses, better manage risk and devise appropriate lending strategies to reduce costs and increase portfolio profitability.

            By collecting, analyzing, and delivering information on the credit histories of millions of borrowers, we empower our members to plan their strategies with greater prudence. We understand our customers’ evolving needs and create solutions that help them innovate and grow, simultaneously creating our own opportunities to reinvest and thrive.

            Our initiatives have helped drive growth in lending over the last decade. We will continue to invest in content, insights, products and solutions across all sectors. We are also committed to being a partner in the national effort to improve financial literacy, inclusion and protection.

            We call this Information for GoodSM.
          </p>
        </div>
      </div>
      <hr style={{backgroundColor:'0094e9c2',height:"2px"}} />
      <Footer/>
    </div>
  )
}
