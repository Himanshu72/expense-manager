import React,{createContext,useReducer} from "React";
import AppReducer from "./AppReducer"
const initalState={
    isAuth:false,
    expenses:[],
    user:undefined,
    token:undefined
}

export const GlobalContex=createContext(initalState);
export const GlobalProvider =({children})=>{
const [state,dispatch]=useReducer(AppReducer,initalState);
return (
    <GlobalContex.Provider value={{
        expenses:state.expenses,
        isAuth:state.isAuth,
        user:state.user,
        token:state.token
    }}>
        {children}
    </GlobalContex.Provider>
)  
}