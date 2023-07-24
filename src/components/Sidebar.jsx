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

        <select onChange={handleSort}>
          <option value="">Sort</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

      {/* <div className="sorting" onChange={handleSort}>

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
      </div> */}

    </DIV>
  );
};

const DIV = styled.div`
display: flex;
flex-direction: column;
/* width: 15%; */
/* background: red; */
  /* border-right: 1px solid gray; */

  .filer input{
    margin-left: 20px;
  }
  
  h3{
    font-size: 14px;
    margin-top: 10px;
    color: #333

  }
  .stye{
    display: flex;
flex-direction: column;
  }
  select{
    /* text-align: center; */
    size: 22px;
    height: 40px;
    font-size: 16px;
    margin-right: 1rem;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  input label{
    font-size: 20px;
  }
`;
