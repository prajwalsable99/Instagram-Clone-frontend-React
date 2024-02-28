import { SIGN_IN, SIGN_UP } from "./ActionType"


const initialValues={

    signup:null,
    signin:null,

}

export const AuthReducer=(store=initialValues,action)=>{

    if(action.type===SIGN_IN){

        return {...store,signin:action.payload}
    }else if(action.type===SIGN_UP){

        return {...store,signup:action.payload}
    }

    return store;

}