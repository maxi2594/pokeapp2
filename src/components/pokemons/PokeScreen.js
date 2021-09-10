import React, { useReducer, useEffect, useContext } from 'react'
import { fetchPokes } from '../../actions/actions'
import { pokeContext } from '../../context/pokeContext'
import { useFetchPokes } from '../../hooks/useFetchPokes'
// import { useFetchPokes } from '../../hooks/useFetchPokes'
import { pokeReducer } from '../../reducers/pokeReducer'
import { types } from '../../types/types'
import { PokeList } from './PokeList'


export const PokeScreen = () => {


    const [state, handleSetUrL ] =  useFetchPokes();
    const { data, loading, error} = state;
    
    const {results, next, previous } = data;
    return (
        <div>

            { (loading) ? 
                (<h1>loading</h1>)
                 :
                (<PokeList results={results} />)
            }

            <button 
            onClick={ ()=>handleSetUrL(next) }
            >
                 NEXT 
            </button>

            <button 
            onClick={ ()=>handleSetUrL(previous) }
            > 
                PREVIOS 
            </button>
        </div>
    )
}
