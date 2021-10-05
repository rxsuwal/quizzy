import * as actionType from './actionType'

export const signUp =(payload) =>{
    return{
        type:actionType.SIGN_UP,
        payload:payload
    }
}