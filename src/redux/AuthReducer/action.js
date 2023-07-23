import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_USER_SUCCESS,LOGIN_ADMIN_SUCCESS, LOGOUT } from "../actionTypes"


import axios from "axios";

const loginrequest=()=>{
  return {type : LOGIN_REQUEST}
}

const loginUsersuccess=(user)=>{
  return {type : LOGIN_USER_SUCCESS,payload : user}
}
const loginAdminsuccess=(user)=>{
  return {type : LOGIN_ADMIN_SUCCESS,payload : user}
}


const loginfailure=()=>{
    return {type :LOGIN_FAILURE}
}
const userLogout=()=>{
  return{type :LOGOUT}
}




export const login = (email,password) =>(dispatch)=> { 
 if(email,password){
dispatch(loginrequest())
 return axios.get('https://mock-api-credit-card.onrender.com/Auth')
 .then((response) => {

   const users = response.data;
  
   const matchedUser = users.find((user) => user.email === email && user.password === password);
  //  console.log(matchedUser);
   
   if(matchedUser){
    if (matchedUser.name==="admin") {
      dispatch(loginAdminsuccess(matchedUser))
    }else{
    dispatch(loginUsersuccess(matchedUser)); 
    }
   }
 })
 .catch((err)=>{
  console.log(err.message);
  dispatch(loginfailure())
 })



 }
};

export const logout=()=>(dispatch)=>{
  dispatch(userLogout())
}

