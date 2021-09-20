import { getPokes } from "../helpers/getPokesApi";

import React, { useEffect, useState } from 'react'

const incialState = {
    data: {},
    loading: true,
    error: null,
}
export const useFetchPokes = ( inicialUrl  ) => {
    

    const [url, setUrl] = useState(inicialUrl)
    const [state, setState] = useState(incialState);
    
    
    const handleSetUrL = (url) => (setUrl( url ))

    const stopLoading = () => {
        setState( s => ({
            ...s,
            loading: false
        }))
    }
    const startLoading = () => {
        setState( s => ({
            ...s,
            loading: true
        }))
    }

    useEffect(()=>{
        
        console.log(url);
        const data = getPokes(url);
            data.then( pokes => {

                setState( s => ({
                    ...s,
                    data: pokes
                }))
            })
            .catch( err => {
                setState(s =>({
                    ...s,
                    loading: false,
                    error: err
                }))
            })

    }, [url] )
        
    return [state, url, handleSetUrL, stopLoading,startLoading ];
}

    