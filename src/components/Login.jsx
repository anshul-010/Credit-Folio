import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/AuthReducer/action";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");

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
      navigate('/home', { replace: true });
    });
  };

  return (
    <DIV>
      {isAuth ? <h3>Successfully Logged In</h3> : <h2>Login Page</h2>}

      {isAuth && <h3> User: {user.name}</h3>}
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
  );
};
export default Login;

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  gap: 15px;
  border: 1px solid #ccc;
  align-items: center;

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
    padding: 6px;
    font-size: large;
    background-color: orange;
    color: #fff;
    border-radius: 6px;
    font-size: 22px;
    border: none;
  }
  h3 {
    color: #00ad00;
    font-weight: 500;
    line-height: 30px;
    font-size: 24px;
  }
`;
