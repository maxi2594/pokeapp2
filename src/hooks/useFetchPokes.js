import { getPokes } from "../helpers/getPokesApi";

import React, { useEffect, useState } from 'react'

const incialState = {
    data: [],
    loading: true,
    error: null,
}
export const useFetchPokes = (  ) => {
    

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`)
    const [state, setState] = useState(incialState);

    const handleSetUrL = (url) => (
        setUrl( url )
    )


    useEffect(()=>{

            const data = getPokes(url);
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
                })
    
    }, [url] )

    return [state, handleSetUrL];
}

    