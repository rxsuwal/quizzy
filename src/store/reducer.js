import * as actionType from './actionType'

const initialState = {
    token:false,
    user:null
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case actionType.SIGN_UP :
        return { 
            ...state,
            user: action.payload

        }
        case actionType.SIGN_IN :
            return { }

    default:
        return state
    }
}

export default reducer
