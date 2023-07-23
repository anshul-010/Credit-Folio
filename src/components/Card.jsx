import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  useTabPanel,
} from "@chakra-ui/react";

const Card = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  function patchRequest(data, id) {
    axios.patch( `https://mock-api-credit-card.onrender.com/creditCardAccountsDetails/${id}`,data);
  }

  const [Data, setData] = useState(props);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]:
          name === "lastPaymentDate"
            ? value
            : name === "accountStatus"
            ? value
            : +value,
      };
    });
  }
let id = props.id
  function handleSubmit(e) {
    patchRequest(Data,id)
  }

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
          onClick={onOpen}
        >
          Edit
        </button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <div
              style={{
                width: "100%",
                padding: "5px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  borderRadius: "6px",
                  width: "100%",
                  padding: '10px',
                  margin: "auto",
                }}
              >
                <FormControl p='10px'>
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Credit Limit</FormLabel>
                  <Input
                  border='1px solid #ccc'
                    type='number'
                    name='creditLimit'
                    onChange={handleChange}
                    w='300px'
                    placeholder={"creditLimit"}
                    value={Data.creditLimit}
                  />
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Last Payment Amount</FormLabel>
                  <Input
                  border='1px solid #ccc'
                    type='number'
                    name='lastPaymentAmount'
                    onChange={handleChange}
                    w='300px'
                    placeholder={"lastPaymentAmount"}
                    value={Data.lastPaymentAmount}
                  />
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Last Payment Date</FormLabel>
                  <Input
                  border='1px solid #ccc'
                    type='date'
                    name='lastPaymentDate'
                    onChange={handleChange}
                    w='300px'
                    placeholder={"lastPaymentDate"}
                    value={Data.lastPaymentDate}
                  />
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Payment Due Amount</FormLabel>
                  <Input
                   border='1px solid #ccc'
                    type='number'
                    name='paymentDueAmount'
                    onChange={handleChange}
                    w='300px'
                    placeholder={"paymentDueAmount"}
                    value={Data.paymentDueAmount}
                  />
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Account Status</FormLabel>
                  <Select
                    value={Data.accountStatus}
                    name='accountStatus'
                    onChange={handleChange}
                    w='300px'
                  >
                    <option value='ACTIVE'>ACTIVE</option>
                    <option value='DORMANT'>DORMANT</option>
                  </Select>
                  <FormLabel fontSize='14px' mt='5px' color='#444'>Cash Advance Limit</FormLabel>
                  <Input
                    border='1px solid #ccc'
                    type='number'
                    name='cashAdvanceLimit'
                    onChange={handleChange}
                    w='300px'
                    placeholder={"cashAdvanceLimit"}
                    value={Data.cashAdvanceLimit}
                  />
                <Button mt='20px' colorScheme='blue' onClick={handleSubmit}>Update</Button>
                </FormControl>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Card;
