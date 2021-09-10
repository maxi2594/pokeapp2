import React, { useReducer } from 'react'
import { AppRouter } from './routes/AppRouter'
import  "./index.css";
import { pokeReducer } from './reducers/pokeReducer';
import { pokeContext } from './context/pokeContext';



export const PokeApp = () => {


    
    return (



            <AppRouter/>



    )
}
