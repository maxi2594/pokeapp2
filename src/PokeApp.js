import React, { memo, useEffect, useReducer } from 'react'
import { AppRouter } from './routes/AppRouter'
import  "./index.css";
import { pokeContext } from './context/pokeContext';
import { useFetchPokes } from './hooks/useFetchPokes';



export const PokeApp = () => {


    const inicialUrl = localStorage.getItem('url') || 
    `https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`;
    
    const [ state, 
            url, 
            handleSetUrL, 
            stopLoading,
            startLoading ] =  useFetchPokes(inicialUrl);

    useEffect(() => {

        localStorage.setItem('url', url)
        
    }, [url])

    
    return (


        <pokeContext.Provider value={{ 
            state, 
            url, 
            handleSetUrL, 
            stopLoading,
            startLoading }}
        >

                <AppRouter/>

        </pokeContext.Provider>
        // <>
        // <button onClick={()=>stopLoading()}> stop </button> 
        // <button onClick={()=>startLoading()}> start </button> 
        // </>
    )
}
