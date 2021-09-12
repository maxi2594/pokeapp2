import React, { useContext, useEffect, useMemo, useState } from 'react'
import { pokeContext } from '../../context/pokeContext';
import { getPokes } from '../../helpers/getPokesApi';
import { useFetchPokes } from '../../hooks/useFetchPokes';
import { PokeCard } from './PokeCard';


export const PokeList =  ({results}) => {
    console.log(results);
   
    

    return (
        <div>
            <ul>
                    {
                        results.map( character => (
                            <PokeCard {...character } />
                        ))
                    }
            </ul>
        </div>
    )
}
