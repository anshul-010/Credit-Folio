import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_USER_SUCCESS,LOGIN_ADMIN_SUCCESS, LOGOUT } from "../actionTypes"

let temp= localStorage.getItem("LoginUserLS");
    temp= JSON.parse(temp);

    let Authls
    if(temp){
        Authls=true
    }

const initialState ={
    isLoading: false,
    isError: false,
    isAuth: Authls ||false,
    isAdmin: false,
    User: temp || {},
  }

  export const reducer =(state=initialState,{type,payload})=>{
        switch(type){
            case LOGIN_REQUEST:{
                return {
                    ...state,
                    isLoading:true,
                }
            }
            case LOGIN_USER_SUCCESS :{
                return{
                    ...state,
                  isLoading: false,
                  isError: false,
                  isAuth: true,
                  isAdmin:false,
                  User:payload
                }
            }
            case LOGIN_ADMIN_SUCCESS :{
                return{
                    ...state,
                  isLoading: false,
                  isError: false,
                  isAuth: true,
                  isAdmin:true,
                  User:payload
                }
            }
            case LOGIN_FAILURE:{
                return{
                    ...state,
                    isError:true,
                    isLoading:false,
                }
            }
            case LOGOUT:{
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    isAuth: false,
                    isAdmin: false,
                }
            }
            
            default:
                return state;
        }

  }