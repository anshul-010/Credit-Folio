import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_USER_SUCCESS,LOGIN_ADMIN_SUCCESS, LOGOUT } from "../actionTypes"


const initialState ={
    isLoading: false,
    isError: false,
    isAuth: false,
    isAdmin: false,
    User:{},
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