import React from 'react'
import "../CSS/creditOffer.css"
import CreditImg from "../images/credit-card-img.png"
import { Flex } from '@chakra-ui/react'

export const CreditOffer = () => {
  return (
    <div className='card-main-div' style={{width: '95%', display: 'flex', alignItems: 'center'}}>
        <div className='img-card'>
            <img src={CreditImg} alt="" />
            <h2>SBI Card & Payment Services PVT LTD</h2>
        </div>
        <div>
            <p>RS. TBD</p>
        </div>
        <div>
            <p>3.35%</p>
        </div>
        <div>
            <p>RS. 449 + GST</p>
        </div>
        <div className='app-btn'>
            <button>APPLY</button>
            <h3>More details</h3>
        </div>
    </div>
  )
}
