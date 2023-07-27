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

export const ContactInfo = () => {
  
    const user = useSelector((store)=>store.authReducer.User)

  return (
   <div style={{border:"1px solid #ccc", padding:"2%",width:"100%"}} >
        <div className='top'>
            <div className='top-left'>
                Control Number: 5,980,650,023 
            </div>
            <div className='top-right'>
                (e) INDICATES THE VALUE PROVIDED BY BANK WHEN YOU APPLIED FOR A CREDIT FACILITY
            </div>
        </div>
        <div className="info-text">
            Contact Information
        </div>
        <div className='cibil-day'>
            <p>Your CIBIL Score and Report is 46 days old. <span style={{color:"#0071e9",textDecoration:"underline"}}> Check your latest CIBIL score & Report now</span></p>
        </div>
        <TableContainer className='table'>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Address</Th>
                    <Th>Category</Th>
                    <Th isNumeric>Residence Code</Th>
                    <Th>Date Reported</Th>
                </Tr>
                </Thead>
                <Tbody className='table-body'>
                <Tr>
                    <Td>Nagar A-34 Sec. 14 UP</Td>
                    <Td>Office Address</Td>
                    <Td isNumeric>001</Td>
                    <Td >20/04/2022</Td>
                </Tr>
                <Tr>
                    <Td>Nagar C-24 Sec. 03 UP</Td>
                    <Td>Residence Address</Td>
                    <Td isNumeric>203</Td>
                    <Td >20/04/2022</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
        <TableContainer className='table'>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>TELEPHONE NUMBER TYPE</Th>
                    <Th>TELEPHONE NUMBER</Th>
                    <Th>TELEPHONE EXTENSION</Th>
                </Tr>
                </Thead>
                <Tbody className='table-body'>
                <Tr>
                    <Td>Office Phone</Td>
                    <Td>7850410235</Td>
                    <Td >-</Td>
                </Tr>
                <Tr>
                    <Td>Home Phone</Td>
                    <Td>087456023236985</Td>
                    <Td >-</Td>
                </Tr>
                <Tr>
                    <Td>Mobile Phone</Td>
                    <Td>{`${user.mobile}`}</Td>
                    <Td >-</Td>
                </Tr>
                </Tbody>
            </Table>
        </TableContainer>
        <TableContainer className='table'>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th>Email Address</Th>
                </Tr>
                </Thead>
                <Tbody className='table-body'>
                <Tr>
                    <Td>{user.email}</Td>
                </Tr>
                
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}
