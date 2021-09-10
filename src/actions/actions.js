import { useContext } from "react";
import { getPokes } from "../helpers/getPokesApi";
import { types } from "../types/types";


export const fetchPokes = ( url, dispatch ) => {
    

    const defaultUrl = `https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`;

    const data = getPokes( url || defaultUrl);
                data.then( pokes => (
                    setTimeout(()=>{

                        dispatch({type: types.setData, payload: pokes})
                        dispatch({type: types.stopLoading});
                    }
                    , 1000)
                    
                ))
                .catch( err => {
                    dispatch({type: types.setError, payload: err});
                    dispatch({type: types.stopLoading});
                })
} 