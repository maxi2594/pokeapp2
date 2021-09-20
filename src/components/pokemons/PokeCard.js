import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchPokes } from '../../hooks/useFetchPokes';

export const PokeCard = ({ pokemon, sprites }) => {
    
    const styles = {
        cardCenter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgb(63,67,71)',
            borderRadius: '100px'
        },
        cardStyles: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            border: '2px solid grey',
            backgroundColor: '#FAFAFA',
            maxWidth: '400px',
            margin: '5px',
            padding: '10px'
        },
        cardImg: {
            width: '150px',
            height: '150px',
        }
    }

    return (
        
        <div className="card col-sm-6 mb-2 animate__animated animate__fadeIn animate__delay-.5s" style={ styles.cardStyles} >
            <div className="col-md-6">
                <div style={styles.cardCenter}>

                    <img
                        style={ styles.cardImg}
                        src={ sprites.front_default } 
                        className="card-img"
                        alt={ pokemon.name }/>

                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">

                    <h2
                        style={{textAlign: 'center'}}
                    > { pokemon.name } 
                    </h2>

                    <hr></hr>    
                </div>
            </div>
        </div>
)
}

