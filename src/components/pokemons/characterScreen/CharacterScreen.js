import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPokes } from '../../../helpers/getPokesApi'
import  "./characterScreen.css";
import { ImageContainer } from './ImageContainer';

export const CharacterScreen = () => {

    const [data, setData] = useState(null)

    const { id } = useParams()
    
    
    
    useEffect(() => {
        
        const data = getPokes(`https://pokeapi.co/api/v2/pokemon-form/${ id }`)
        data.then( data => {
            setData( data )
        })

    }, [id])

    return (
            data 
            &&
            (<div className='flexContainer'>

                <ImageContainer data={data}/>

                <div className='statsContainer'>
                    <div className='stats'>
                        <hr/>
                        <h5> caracteristic : value</h5>
                        <hr/>
                    </div>
                </div>
            </div>
            
            )
    )
}
