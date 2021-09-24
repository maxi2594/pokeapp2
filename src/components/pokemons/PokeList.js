import React, { useContext, useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { pokeContext } from '../../context/pokeContext';
import { getCharactersData } from '../../helpers/getPokesApi';
import { useFetchPokes } from '../../hooks/useFetchPokes';
import { PokeCard } from './pokeCard/PokeCard';


export const PokeList = ({results}) => {
    
    const styles = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    return (
            <ul style={ styles }>


                {
                    results &&
                    (results.map( character => (
                        <PokeCard 
                            {...character }
                            key={ character.name }
                            />
                    )))
                }
            </ul>
    )
}
