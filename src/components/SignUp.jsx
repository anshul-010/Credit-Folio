

import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

const SignUp = () => {
const [SignUpStatus, setSignUpStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Shashi',
    PAN:`SJDHI7654H`,
    email: 'Bob@example.com',
    password: 'bob'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    console.log(formData);
    
    axios.post('http://localhost:8080/Auth', formData)
      .then((response) => {
        setSignUpStatus(true)
        console.log('Sign up successful:', response.data);
      })
      .catch((error) => {
       
        console.error('Sign up failed:', error);
      });
  };

  return (
    <DIV>
      {SignUpStatus ? <h3>Successfully SignUp</h3> : <h2>SignUp Page</h2> }
      <form onSubmit={handleSubmit}>
        <div className='boxx'>
          {/* <label>Name:</label> */}
          <input type="text" name="name" placeholder='name' value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>PAN-Card:</label> */}
          <input type="text" name="name" placeholder='PAN' value={formData.PAN} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>Email:</label> */}
          <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </DIV>
  );
};

export default SignUp;

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  /* .boxx{
    display: flex;
  } */

  input {
    width: 100%;
    margin-bottom: 10px;
    height: 30px;
    font-size: larger;
    /* border: ${({err})=> err==="true" ? "2px solid red" : "1px solid grey"}; */
  }
  button {
    width: 100%;
    height: 30px;
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
