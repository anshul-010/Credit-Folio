import React from 'react'
import "../CSS/personalinfo.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const EnquiryInfo = () => {
  return (
        <div style={{border:"1px solid", padding:"2%",width:"60%"}} >
            <div className='top'>
                <div className='top-left'>
                    Control Number: 5,980,650,023 
                </div>
                <div className='top-right'>
                    (e) INDICATES THE VALUE PROVIDED BY BANK WHEN YOU APPLIED FOR A CREDIT FACILITY
                </div>
            </div>
            <div className="info-text">
                Personal Information
            </div>
            <div className='cibil-day'>
                <p>Your CIBIL Score and Report is 46 days old.<span style={{color:"blue",textDecoration:"underline"}}> Check your latest CIBIL score & Report now</span></p>
            </div>
            <TableContainer className='table'>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Member Name</Th>
                        <Th>Date of Enquiry</Th>
                        <Th>Enquiry Purpose</Th>
                    </Tr>
                    </Thead>
                    <Tbody className='table-body'>
                    <Tr>
                        <Td>ICICI BANK</Td>
                        <Td>06/06/2023</Td>
                        <Td>Personal Loan</Td>
                    </Tr>
                    <Tr>
                        <Td>HDFC BANK</Td>
                        <Td>04/04/2023</Td>
                        <Td>Home Loan</Td>
                    </Tr>
                    <Tr>
                        <Td>AXIS BANK</Td>
                        <Td>11/02/2023</Td>
                        <Td>Credit Card</Td>
                    </Tr>
                    <Tr>
                        <Td>UNION BANK</Td>
                        <Td>12/10/2022</Td>
                        <Td>Credit Card</Td>
                    </Tr>
                    <Tr>
                        <Td>SBI BANK</Td>
                        <Td>12/08/2022</Td>
                        <Td>Consumer Loan</Td>
                    </Tr>
                    <Tr>
                        <Td>IDFC FIRST BANK</Td>
                        <Td>24/06/2022</Td>
                        <Td>Car Loan</Td>
                    </Tr>
                    <Tr>
                        <Td>ICICI BANK</Td>
                        <Td>06/09/2021</Td>
                        <Td>Personal Loan</Td>
                    </Tr>
                    <Tr>
                        <Td>HDFC BANK</Td>
                        <Td>15/05/2021</Td>
                        <Td>Credit Card</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
    </div>
  )
}
