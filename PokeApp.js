import React, { memo, useEffect, useReducer } from 'react'
import { AppRouter } from './routes/AppRouter'
import  "./index.css";
import { pokeContext } from './context/pokeContext';
import { useFetchPokes } from './hooks/useFetchPokes';



export const PokeApp = () => {

    const [
        state, 
        handleSetUrL, 
        url, 
        startLoading, 
        stopLoading ] =  useFetchPokes();

    
    useEffect(() => {
        const localUrl = localStorage.getItem('url') || null;
        if (localUrl) {
            handleSetUrL(localUrl)
        }
        else{
            localStorage.setItem('url', url)
        }
        
    }, [ url, handleSetUrL ])
    
    return (


        <pokeContext.Provider value={{ state, handleSetUrL, url, stopLoading}}>

                <AppRouter/>

        </pokeContext.Provider>



    )
}
