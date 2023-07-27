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

export const EmployeInfo = () => {
  return (
    <div style={{border:"1px solid #ccc" , padding:"2%",width:"100%"}} >
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
            <p>Your CIBIL Score and Report is 46 days old. <span style={{color:"#0071e9",textDecoration:"underline"}}> Check your latest CIBIL score & Report now</span></p>
        </div>
        <TableContainer className='table emp-table'>
            <Table variant='simple'>
                {/* <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>DOB</Th>
                    <Th>GENDER by</Th>
                </Tr>
                </Thead> */}
                <Tbody className='table-body'>
                <Tr>
                    <Td className='td'>Account Type</Td>
                    <Td >Credit Card</Td>
                </Tr>
                <Tr>
                    <Td className='td'>Date Reported</Td>
                    <Td >25/04/2023</Td>
                </Tr>
                <Tr>
                    <Td className='td'>Occupation</Td>
                    <Td >Other</Td>
                </Tr>
                <Tr>
                    <Td className='td'>Income</Td>
                    <Td >-</Td>
                </Tr>
                <Tr>
                    <Td className='td'>Annual Income</Td>
                    <Td >-</Td>
                </Tr>
                <Tr>
                    <Td className='td'>Gross Income</Td>
                    <Td >-</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}
