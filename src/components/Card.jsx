import React from 'react'
import { styled } from 'styled-components'

const Card = (props) => {
  return (
    
        <DIV >
          <img src={props.img} alt={props.productName} />
     <h2>{props.id} : {props.productName}  </h2>
     <p>Credit Limit : <span>₹{props.creditLimit} </span> </p>
     <p>Last Payment Amount : <span> ₹{props.lastPaymentAmount} </span></p>
     <p>Last Payment Date : <span>{props.lastPaymentDate} </span> </p>
     <p>Payment Due Amount :<span> ₹{props.paymentDueAmount} </span></p>
     <p>Account Status : <span>{props.accountStatus} </span> </p>

     {/* CREDIT CARD SPECIFIC */}
     {props.cashAdvanceLimit && <p>Cash Advance Limit : <span> ₹{props.cashAdvanceLimit} </span></p>}

              </DIV> 
    
  )
}

export default Card

const DIV = styled.div`
width: 300px;
display: flex;
/* align-items: center; */
justify-content: center;
text-align: left;
flex-direction: column;
height: fit-content;
padding: 14px;
border-radius: 6px;

border: 1px solid #ccc;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

p,h2{
  font-size: 15px;
  padding-left: 2rem;
  color: #333;
  line-height: 25px;
}
h2{
  font-weight: 500;
}
span{
  color: #007ad6;
}

img{
  margin: 10px auto;
  display: block;
  height: auto;
  width: 150px;
}
  
`;



