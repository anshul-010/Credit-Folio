import { useEffect, useState ,useRef} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  const [searchParams,setSearchParams] =useSearchParams()
  const initialAccountStatus=searchParams.get("initialOrder")
  const [accountStatus,setAccountStatus]= useState(initialAccountStatus,"")
  const initialOrder=searchParams.get("order")
  const [order,setOrder]= useState(initialOrder||"")
  // console.log(searchParams);

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
    <DIV> 
      <div className="stye">
      <h3>Filter by Account Status</h3>
      <select name="" onChange={handleaccountStatus}>
        <option value="">Select</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="DORMANT">DORMANT</option>
      </select>
      </div>


      <h3>Sort By Credit Limit</h3>
      <div className="sorting" onChange={handleSort}>
        <input  type="radio" name="order" value={"asc"}
        defaultChecked={order==="asc"}
        />
        <label style={{
            fontSize:"20px"
        }}>Ascending</label>
        <br />
        
        <input
          
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order==="desc"}
        />
        <label style={{
            fontSize:"20px"
        }}>Descending</label>
      </div>

    </DIV>
  );
};

const DIV = styled.div`
display: flex;
flex-direction: column;
width: 15%;
  /* border-right: 1px solid gray; */

  .filer input{
    margin-left: 20px;
  }
  
  
  .stye{
    display: flex;
flex-direction: column;
  }
  select{
    size: 22px;
    height: 40px;
    font-size: 20px;
  }
  input label{
    font-size: 20px;
  }
`;
