import React from 'react'
import axios from 'axios';
import { styled } from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';
import { Sidebar } from './Sidebar';
import { useSearchParams } from 'react-router-dom';

const Postpaid = () => {
    const [postpaid,setPostpaid]=useState([])


    const [searchparams,setSearchParams] = useSearchParams()

    let paramsObj={
      params:{
        accountStatus:searchparams.get("accountStatus"),
          
          _sort:searchparams.get("order") && "creditLimit",
          _order:searchparams.get("order")
      }
  }
  useEffect(()=>{
    axios.get(`https://mock-api-credit-card.onrender.com/lineOfCreditAccountsDetails`,paramsObj)
  .then((res)=>{
      console.log(res.data);
      setPostpaid(res.data)
  })
  },[searchparams])
  console.log(postpaid);
  return (
    <DIV>
      <Sidebar />
      <div>
    <h1>Postpaid</h1>
        <div  class='item'>
        {postpaid.length>0 && postpaid.map((el)=>{
          return  <Card key={el.id} {...el}/>
        })}
        </div>
        </div>
        </DIV>
  )
}

export default Postpaid

const DIV = styled.div`
  display: flex;
  gap: 20px;
  /* justify-content: space-between; */
  .item{
    
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding-left: 10px;
    border: 1 px solid;
    gap: 20px;

  }
    h1{
    /* margin-left:300px ; */
    font-size: 18px ;
    font-weight: 500;
    color: #333;
    margin: 1rem auto ;
    width: fit-content;
  }

`;
