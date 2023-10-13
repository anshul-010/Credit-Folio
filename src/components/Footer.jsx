import React from 'react'
import "../CSS/footer.css"
import FB from "../images/socialLinks/facebook-icon.svg"
import Twitter from "../images/socialLinks/twitter-icon.svg"
import YT from "../images/socialLinks/youtube-icon.svg"
import Linkedin from "../images/socialLinks/linkedin-icon.svg"
import icon from "../images/socialLinks/ifg-lockup-yellow-grey.svg"

export const Footer = () => {

  return (
    <div className='footer' >
        <div className='left-side'>
            <div className='info'>
                <div className="text">
                    <h2>About Us</h2>
                    <hr />
                    <p>Contact</p>
                    <p>Oprations</p>
                    <p>About TransUnion CIBIL</p>
                    <p>Adipisicing elit. Sapiente</p>
                </div>
                <div className="text">
                    <h2>Information</h2>
                    <hr />
                     <p>Loan Queries</p>
                    <p>About TransUnion CIBIL</p>
                    <p>Credit History Model</p>
                    <p>Specified Operations</p>
                </div>
                <div className="text">
                    <h2>More information</h2>
                    <hr />
                    <p>Loan DepartMent</p>
                    <p>Ask the Experts</p>
                    <p>Paid Subscription</p>
                    <p>About TransUnion CIBIL</p>
                </div>
            </div>
            <p className='policy'>Privacy Policy Terms of Use Sitemap</p>
        </div>
        <div className='right-side'>
            <div>
                <h2>Have questions?</h2>
                <button>Contact us</button>
            </div>
            <div className='social-images'>
                <div className="img">
                    <a href="https://www.facebook.com/TransUnionCIBIL">
                    <img src={FB} alt="not found" />
                    </a>
                </div>
                <div className="img">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FCIBIL_Official">
                    <img src={Twitter} alt="not found" />
                    </a>
                </div>
                <div className="img">
                    <a href="https://www.youtube.com/user/CIBILonline">
                    <img src={YT} alt="not found" />
                    </a>
                </div>
                <div className="img">
                    <a href="https://www.linkedin.com/company/credit-information-bureau-india-limited">
                    <img src={Linkedin} alt="not found" />
                    </a>
                </div>
            </div>
            <div className='icon'>
                <img src={icon} alt="" />
            </div>
            <div className='copy-right'>
                <p>© Copyright 2023 TransUnion CIBIL Limited (Formerly: Credit Information Bureau (India) Limited). All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}
