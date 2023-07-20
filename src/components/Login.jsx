import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
// import { login } from "../redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

const [email,setEmail]= useState("admin@gmail.com")
const [password,setPassword]= useState("admin")
const [loginStatus, setLoginStatus] = useState(false);

const handleLogin=()=>{
  
  console.log(email,password);
  

  axios.get('http://localhost:8080/Auth')
      .then((response) => {

        const users = response.data;
        const matchedUser = users.find((user) => user.email === email && user.password === password);
        console.log(matchedUser);
        if (matchedUser) {
          setLoginStatus(true);
        } else {
          setLoginStatus(false);
        }
      })
      
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoginStatus('Login Failed');
      });
  
}





  return (
    <DIV >
      {/* {isAuth ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2> } */}

      {loginStatus ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2> }
      
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
    /* border: ${({err})=> err==="true" ? "2px solid red" : "1px solid grey"}; */
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
