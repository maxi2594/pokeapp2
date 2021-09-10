import React, { useContext, useEffect, useMemo } from 'react'
import { pokeContext } from '../../context/pokeContext';
import { getPokes } from '../../helpers/getPokesApi';
import { useFetchPokes } from '../../hooks/useFetchPokes';
import { PokeCard } from './PokeCard';


export const PokeList = ({results}) => {

    const characterList  = useMemo(() => [], []);


    useEffect(() => {
        results.map( elem => {
            const poke = getPokes(elem.url);
            poke.then( poke => {
                const {name:poekeName, sprites } = poke
                characterList.push({poekeName, sprites})
            })
        }
        
        )
        console.log(characterList);
    }, [results, characterList])


    return (
        <div>
            <ul>
                    {
                        characterList.map( character => (
                            <PokeCard {...character } />
                        ))
                    }
            </ul>
        </div>
    )
}
