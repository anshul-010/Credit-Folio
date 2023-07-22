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

export const Personalinfo = () => {
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
                    <Th>Name</Th>
                    <Th>DOB</Th>
                    <Th>GENDER by</Th>
                </Tr>
                </Thead>
                <Tbody className='table-body'>
                <Tr>
                    <Td>{"demo"}</Td>
                    <Td>11/06/2000</Td>
                    <Td >Male</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
        <TableContainer className='table'>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Identification Type</Th>
                    <Th>Number</Th>
                    <Th>ISSUE DATE</Th>
                    <Th>EXPIRATION DATE</Th>
                </Tr>
                </Thead>
                <Tbody className='table-body'>
                <Tr>
                    <Td>Number(PAN)</Td>
                    <Td>{}</Td>
                    <Td >{}</Td>
                    <Td >{}</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}
