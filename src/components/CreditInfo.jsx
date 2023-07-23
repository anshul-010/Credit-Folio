import React from 'react'
import CreditCard from './CreditCard'
import Loan from './Loan'
import Postpaid from './Postpaid'
import { useState } from 'react'
import { styled } from 'styled-components'


const CreditInfo = () => {
  const [credit, setCredit] =useState(true)
  const [loan,setLoan]=useState(false)
  const [postpaid,setPostpaid]=useState(false)

  const handleClickCredit =()=>{
   setCredit(true)
    setLoan(false)
    setPostpaid(false)
  }
  const handleClickLoan =()=>{
    setPostpaid(false)
    setCredit(false)
    setLoan(true)
  }
  const handleClickPostpaid =()=>{
    setCredit(false)
    setLoan(false)
    setPostpaid(true)
  }
  return (
    <DIV>
      <button onClick={handleClickCredit}>CREDIT CARD</button>
    
      <button onClick={handleClickLoan}>LOANS</button>
      <button onClick={handleClickPostpaid}>POSTPAID</button>
      {credit &&  <CreditCard />}
      {loan &&  <Loan />}
      {postpaid && <Postpaid />}
    </DIV>
  )
}


export default CreditInfo

const DIV = styled.div`
 button{
  width: 200px;
  padding:  8px 15px;
  color: #fff;
  border-radius: 2px;
  border: none;
  background-color: #0BC5EA;
  margin-left: 2px;
  font-size: 16px;
 }

`;