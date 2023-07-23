

import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  console.log("isAdmin", isAdmin);
  const navigate = useNavigate();
  const editHandler = () => {
    navigate("/admin/edit/:id");
  };
  const pStyle = {
    fontSize: "15px",
    paddingLeft: "2rem",
    color: "#333",
    lineHeight: "25px",
  };
  const imgStyle = {
    margin: "10px auto",
    display: "block",
    height: "auto",
    width: "150px",
  };
  const spanStyle = {
    color: "#007ad6",
  };
  const divStyle = {
    width: "300px",
    display: "flex",
    justifyContent: "center",
    textAlign: "left",
    flexDirection: "column",
    height: "fit-content",
    padding: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
 
  return (
    <div style={divStyle}>
      <img src={props.img} style={imgStyle} alt={props.productName} />
      <h2 style={{ ...pStyle, fontWeight: "500" }}>
        {props.id} : {props.productName}{" "}
      </h2>
      <p style={pStyle}>
        Credit Limit : <span style={spanStyle}>₹{props.creditLimit} </span>{" "}
      </p>
      <p style={pStyle}>
        Last Payment Amount :{" "}
        <span style={spanStyle}> ₹{props.lastPaymentAmount} </span>
      </p>
      <p style={pStyle}>
        Last Payment Date :{" "}
        <span style={spanStyle}>{props.lastPaymentDate} </span>{" "}
      </p>
      <p style={pStyle}>
        Payment Due Amount :
        <span style={spanStyle}> ₹{props.paymentDueAmount} </span>
      </p>
      <p style={pStyle}>
        Account Status : <span style={spanStyle}>{props.accountStatus} </span>{" "}
      </p>

      {/* CREDIT CARD SPECIFIC */}
      {props.cashAdvanceLimit && (
        <p style={pStyle}>
          Cash Advance Limit :{" "}
          <span style={spanStyle}> ₹{props.cashAdvanceLimit} </span>
        </p>
      )}
      {isAdmin && (
        
        <button
          style={{
            background: "#23AAF2",
            borderRadius: "6px",
            width: "fit-content",
            margin: "8px auto",
            padding: "5px 30px",
            color: "#fff",
          }}
          
        >
          <Link to={`/admin/edit/credit/${props.id}`}>Edit</Link>
        </button>
      )}
    </div>
  );
};

export default Card;



