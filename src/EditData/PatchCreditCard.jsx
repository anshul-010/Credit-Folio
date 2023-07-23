import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Select
  } from '@chakra-ui/react'

export const PatchCreditCard = () => {
  return (
    <div style={{border:"1px solid gray",width:"50%",padding:"5%",textAlign:"center",margin:"auto"}} >
       <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:"3%" ,width:"55%",margin:"auto"}}>
            <FormControl p="2%">
                <FormLabel>Credit Limit</FormLabel>
                <Input type='number' w="300px" placeholder={"creditLimit"} />
                <FormLabel>Last Payment Amount</FormLabel>
                <Input type='number' w="300px" placeholder={"lastPaymentAmount"} />
                <FormLabel>Last Payment Date</FormLabel>
                <Input type='date' w="300px" placeholder={"lastPaymentDate"} />
                <FormLabel>Payment Due Amount</FormLabel>
                <Input type='number' w="300px" placeholder={"paymentDueAmount"} />
                <FormLabel>Account Status</FormLabel>
                <Select>
                    <option value='ACTIVE'>ACTIVE</option>
                    <option value='DORMANT'>DORMANT</option>
                </Select>
                <FormLabel>Cash Advance Limit</FormLabel>
                <Input type='number' w="300px" placeholder={"cashAdvanceLimit"} />
                <Button p="6%" bgColor={"orange"} m="10%" >Update</Button>
            </FormControl>        
       </div>
    </div>
  )
}
