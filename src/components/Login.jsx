import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/AuthReducer/action";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const toast = useToast()
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => {
    return store.authReducer.isAuth;
  });
  const err = useSelector((store) => store.authReducer.isError);

  const user = useSelector((store) => {
    return store.authReducer.User;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login(email, password)).then(() => {
      if(email == 'admin@gmail.com'){
        navigate('/admin', { replace: true });
        return
      }
      navigate('/home', { replace: true });
    });
    toast({
      title: 'login successful',
      // description: "We've created your account for you.",
      position:'top',
      status: 'success',
      duration: 500,
      isClosable: true,
    })
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', gap:'2rem', marginTop: '3rem', flexWrap: 'wrap'}}>
    <div>
    <img style={{width: '350px', margin: '2rem', opacity: '0.9'}} src="./login-banner.svg" alt="" />
    </div>
    <DIV>
      {isAuth ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2>}

      {isAuth &&  <h3> User: {user.name}</h3>}
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to='/sign-up'>
        <p>
          Don't have any account{" "}
          <span style={{ color: "#24ADF3" }}>create new</span>
        </p>
      </Link>
    </DIV>
    </div>
  );
};
export default Login;

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  margin-top: 2rem;
  gap: 15px;
  border: 1px solid #ccc;
  align-items: center;
  height: fit-content;
  padding:  2rem;

  input {
    width: 80%;
    padding: 8px;
    color: #333;
    font-size: larger;
    border-radius: 6px;
    border: ${({ err }) =>
      err === "true" ? "2px solid red" : "1px solid #ccc"};
  }
  button {
    width: 120px;
    padding: 7px;
    font-size: medium;
    background-color: #32A9ED;
    color: #fff;
    border-radius: 6px;
    font-weight: 300;
    font-size: 17px;
    border: none;
  }
  h3 {
    color: #00ad00;
    font-weight: 500;
    line-height: 30px;
    font-size: 24px;
  }
`;
