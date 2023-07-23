import React from "react";
import axios from "axios";
import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

import { Sidebar } from "./Sidebar";
import { useSearchParams } from "react-router-dom";

const Loan = () => {
  const [loanData, setLoanData] = useState([]);
  const [serachInp, setSerachInp] = useState("");

  const [searchparams, setSearchParams] = useSearchParams();

  let paramsObj = {
    params: {
      accountStatus: searchparams.get("accountStatus"),

      _sort: searchparams.get("order") && "creditLimit",
      _order: searchparams.get("order"),
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://mock-api-credit-card.onrender.com/loanAccountsDetails`,
        paramsObj
      )
      .then((res) => {
        // console.log(res.data);
        setLoanData(res.data);
      });
  }, [searchparams]);
  // console.log(loanData);

  //seaching
  // const handleSearch=(inp)=>{

  //     let newData=loanData.filter((elem)=>{
  //       return elem.productName.toLowerCase().includes(inp.toLowerCase());
  //     })
  //     setLoanData(newData)
  //   }

  // useEffect(()=>{
  //   handleSearch(serachInp)
  // },[serachInp])

  return (
    <DIV>
      <Sidebar />

      <div>
        {/* <input type="text" placeholder="Search Products by title" onChange={(e)=>setSerachInp(e.target.value)}/> */}
        <h1>Loans</h1>
        <div class='item'>
          {loanData.length > 0 &&
            loanData.map((el) => {
              return <Card key={el.id} {...el} />;
            })}
        </div>
      </div>
    </DIV>
  );
};

export default Loan;

const DIV = styled.div`
  display: flex;
  gap: 20px;
  /* justify-content: space-between; */
  .item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-left: 10px;
    border: 1 px solid;
    gap: 20px;
  }
  h1 {
    /* margin-left:300px ; */
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin: 1rem auto;
    width: fit-content;
  }
`;
