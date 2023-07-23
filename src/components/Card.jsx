import React from 'react'
import { styled } from 'styled-components'

const Card = (props) => {
  return (
    
        <DIV >
          <img src={props.img} alt={props.productName} />
     <h2>{props.id} : {props.productName}  </h2>
     <p>Credit Limit : ₹{props.creditLimit}</p>
     <p>Last Payment Amount : ₹{props.lastPaymentAmount}</p>
     <p>Last Payment Date : {props.lastPaymentDate}</p>
     <p>Payment Due Amount : ₹{props.paymentDueAmount}</p>
     <p>Account Status : {props.accountStatus}</p>

     {/* CREDIT CARD SPECIFIC */}
     {props.cashAdvanceLimit && <p>Cash Advance Limit :  ₹{props.cashAdvanceLimit}</p>}

              </DIV> 
    
  )
}

export default Card

const DIV = styled.div`
width: 380px;
height:580px;
/* border: 1px solid black; */
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
p{
  font-size: 20px;
}
img{
  margin-top: 10px;
  height: 200px;
  width: 300px;
}
  
`;



