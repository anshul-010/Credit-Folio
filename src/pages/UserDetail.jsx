
import React from 'react'
import CibilScore from '../components/UserDetails/CibilScore'
import Offers from '../components/UserDetails/Offers'
import Cards from '../components/UserDetails/Cards'
import {CreditOffer} from "./CreditOffer"
import { Footer } from '../components/Footer'

const UserDetail = () => {
  return (
    <div>
        <CibilScore/>
        <Offers/>
        <CreditOffer/>
        <br />
        <CreditOffer/>
       
        <Cards/>
        <hr style={{backgroundColor:'yellow',height:"4px"}} />
        <Footer/>
    </div>
  )
}

export default UserDetail