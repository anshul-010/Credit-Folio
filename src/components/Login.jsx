import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

const [email,setEmail]= useState("admin@gmail.com")
const [password,setPassword]= useState("admin")

const dispatch = useDispatch()
const isAuth= useSelector((store)=>{
  return store.authReducer.isAuth
})
const err=useSelector((store)=>store.authReducer.isError)

const user= useSelector((store)=>{
  return store.authReducer.User
})
console.log(user);

const location = useLocation()
const navigate= useNavigate()

const handleLogin=()=>{
  dispatch(login(email,password)).then(()=>{
    navigate(location.state,{replace:true})
  })
  
}





  return (

    <DIV >
      

      {isAuth ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2> }

      {isAuth && <h3>User:{user.name}</h3>}
      <input type="email"
        placeholder="Email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
      />
      <button  onClick={handleLogin}>Login</button>

      
    </DIV>
  );
};
export default Login

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border: ${({err})=> err==="true" ? "2px solid red" : "1px solid grey"};
  }
  button {
    width: 120px;
    height: 40px;
    font-size: large;
    background-color: orange;
    font-size: 22px;
    border: none;
  }
  h3{
    color: green;
    font-weight: bold;
    font-size: 26px;
  }
`;
