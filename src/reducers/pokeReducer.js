import { types } from "../types/types";

export const pokeReducer = ( state = {}, action) => {

    switch (action.type) {

        case types.setLoading: 
            return({
                ...state,
                loading: true
            })

        case types.stopLoading: 
            return({
                ...state,
                loading: false
            })
        
        case types.setData:
            return({
                ...state,
                data: action.payload
            })
        
        case types.setError:
            return({
                ...state,
                error: action.payload
            })   
        

        default:
            return state;
    }
}