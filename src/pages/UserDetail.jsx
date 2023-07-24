
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati facilis quisquam nihil sed labore voluptates sapiente fugiat blanditiis repudiandae vero?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis quasi mollitia odit vitae eum sint eaque ex, nemo architecto omnis ad, quisquam repudiandae corrupti sed aliquam blanditiis numquam exercitationem?</p>
        <hr style={{backgroundColor:'yellow',height:"4px"}} />
        <Footer/>
    </div>
  )
}

export default UserDetail