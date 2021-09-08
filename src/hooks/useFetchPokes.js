import { getPokes } from "../helpers/getPokesApi";

import React, { useEffect, useState } from 'react'


export const useFetchPokes = ( incialState ) => {

    const [state, setState] = useState(incialState);


    useEffect(()=>{
    
        const data = getPokes(state.url);
            data.then( pokes => (
                setTimeout(()=>(setState({
                    data: pokes,
                    loading: false,
                })), 1000)
                
            ))
            .catch( err => {
                setState({
                    loading: false,
                    error: err
                })
            });
    
    }, [state.url] )

    return [state, setState];
}

    