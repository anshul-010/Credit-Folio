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
import { useSelector } from 'react-redux'

export const Personalinfo = () => {
    const user = useSelector((store)=>store.authReducer.User)
  return (
    <div style={{border:"1px solid #555", padding:"2%",width:"100%"}} >
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
                    <Td>{`${user.name}`}</Td>
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
                    <Td>{`${user.PAN}`}</Td>
                    <Td >{}</Td>
                    <Td >{}</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}
