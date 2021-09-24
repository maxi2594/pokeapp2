import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPokes } from '../../../helpers/getPokesApi'
import  "./characterScreen.css";

export const CharacterScreen = () => {

    const [data, setData] = useState(null)

    const { id } = useParams()
    
    
    
    useEffect(() => {
        
        const data = getPokes(`https://pokeapi.co/api/v2/pokemon-form/${ id }`)
        data.then( data => setData( data ))

    }, [id])

    console.log([...data?.sprites]);

    return (
        <div className='flexContainer'>
            <div className='imageContainer'>
                <img 
                    style={{width: 200}}
                    src={ data.sprites.front_default}
                    alt={ data.pokemon.name}
                />
                <div className="imageSelector">
                    <ul>
                        <button>hola</button>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
