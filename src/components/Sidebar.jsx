import { Select,Text } from "@chakra-ui/react";
import { useEffect, useState ,useRef} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams] =useSearchParams()
  const initialAccountStatus=searchParams.get("initialOrder")
  const [accountStatus,setAccountStatus]= useState(initialAccountStatus,"")
  const initialOrder=searchParams.get("order")
  const [order,setOrder]= useState(initialOrder||"")

useEffect(()=>{
const params={
  
}
accountStatus && (params.accountStatus=accountStatus)
order && (params.order = order)

setSearchParams(params)
},[accountStatus,order])

  const handleaccountStatus = (e) =>{
    setAccountStatus(e.target.value)
    
  }
  const dispatch= useDispatch();
  const handleSort=(e)=>{
    const {value} = e.target;
    setOrder(value)
  }
  return (
    <div className="filters" style={{minWidth:'100px',marginTop: '3rem', paddingLeft: '3rem',  marginRight: '-2rem'}} > 
      <div className="stye">
      <Text as='h2' fontSize='13px' pl='2px'>Filter by Account Status</Text>
      <Select bg='#fff' m='5px 0' minW='100px' onChange={handleaccountStatus}>
        <option value="">Select</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="DORMANT">DORMANT</option>
      </Select>
      </div>


      <Text as='h2' fontSize='13px' pl='2px' >Sort By Credit Limit</Text>

        <Select minW='100px' bg='#fff' m='5px 0' onChange={handleSort}>
          <option value="">Sort</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        </div>
  );
};

