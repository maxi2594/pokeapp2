import React from 'react';
import PropTypes from "prop-types";
import './pokeList.css'

import { PokeCard } from './pokeCard/PokeCard';


export const PokeList = ({ results }) => {

    const styles = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    return (
        <div className="listContainer">
            <ul style={styles}>

                {
                    results &&
                    (results.map(character => (
                        <PokeCard
                            {...character}
                            key={character.name}
                        />
                    )))
                }
            </ul>
        </div>
    )
}

PokeList.propTypes = {
    results: PropTypes.array.isRequired
}