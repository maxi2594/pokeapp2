import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import './pokeCard.css'

export const PokeCard = ({ pokemon, sprites, id }) => {


    return (

        <div className="card col-sm-6 mb-2 cardStyles animate__animated animate__fadeIn animate__delay-.5s">
            <div className="col-md-6">
                <div className='cardCenter'>

                    <Link to={`/pokes/character/${id}`}>
                        <img
                            className='cardImg card-img'
                            src={sprites.front_default}
                            alt={pokemon.name}
                        />
                    </Link>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">

                    <h2
                        style={{ textAlign: 'center' }}
                    > {pokemon.name}
                    </h2>

                    <hr></hr>
                </div>
            </div>
        </div>

    )
}

PokeCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    sprites: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}
