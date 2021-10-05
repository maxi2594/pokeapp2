import React from 'react';
import PropTypes from "prop-types";

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

PokeList.propTypes = {
    results: PropTypes.array.isRequired
}