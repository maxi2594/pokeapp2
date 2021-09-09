import React, { useReducer, useEffect } from 'react'
import { useFetchPokes } from '../../hooks/useFetchPokes'
import { pokeReducer } from '../../reducers/pokeReducer'

const init = () => ({
    data: [],
    loading: true,
    error: null,
    url: null,
})
export const PokeScreen = () => {

    const [state, setState]= useFetchPokes(init);
    // const [state, dispatch] = useReducer(pokeReducer, {}, init)

    const { data, loading, error } = state;
    // console.log({ data, loading, error });

    
    const {results, next, previous } = data;


    const handleNext = ()=>{}


    const handlePrevious = () =>{

    }

    return (
        <div>
            { (loading) ? 
                (<h1>loading</h1>)
                 :
                (<ul>
                    {
                        results.map( (elem) => (
                            <li key={elem.name}>{elem.name}</li>
                        ))
                    }
                </ul>)
            }

            <button onClick={ handleNext }
            >
                 NEXT 
            </button>

            <button onClick={ handlePrevious }> 
                PREVIOS 
            </button>
        </div>
    )
}
