import React from 'react'
import CreditCard from './CreditCard'
import Loan from './Loan'
import Postpaid from './Postpaid'
import { useState } from 'react'


const CreditInfo = () => {
  const [credit, setCredit] =useState(true)
  const [active, setActive] = useState(1)
  const [loan,setLoan]=useState(false)
  const [postpaid,setPostpaid]=useState(false)

  const handleClickCredit =()=>{
   setCredit(true)
    setLoan(false)
    setPostpaid(false)
    setActive(1)
  }
  const handleClickLoan =()=>{
    setPostpaid(false)
    setCredit(false)
    setLoan(true)
    setActive(2)
  }
  const handleClickPostpaid =()=>{
    setCredit(false)
    setLoan(false)
    setPostpaid(true)
    setActive(3)
  }
  const btnStyle = {
    width: '180px',
    padding:  '8px 15px',
    color: '#333',
    border:  '#ccc 1px  solid ',
    backgroundColor: '#fff',
    marginRight: '0px',
    fontSize: '16px200px',
   }

  return (
    <div >
      <div style={{display: 'flex' , justifyContent: 'center', margin: '.7rem 0'}}>
      <button style={btnStyle} className={active==1?'active-acc-tab':''} onClick={handleClickCredit}>CREDIT CARD</button>
      <button style={btnStyle} className={active==2?'active-acc-tab':''} onClick={handleClickLoan}>LOANS</button>
      <button style={btnStyle} className={active==3?'active-acc-tab':''} onClick={handleClickPostpaid}>POSTPAID</button>
      </div>
      {credit &&  <CreditCard />}
      {loan &&  <Loan />}
      {postpaid && <Postpaid />}
    </div>
  )
}


export default CreditInfo

