import React, { useState } from 'react'

export const ImageContainer = ({ data }) => {

    const [imageSrc, setImageSrc] = useState(data.sprites.front_default)


    const sprites = (Object.keys( data.sprites ).map( key => ({
        sprite: [key],
        src: data.sprites[key]
    }))) 

    return (
        <div className='imageContainer'>
            <img 
                style={{width: 250}}
                src={ imageSrc }
                alt={ data.pokemon.name}
            />
            <div className="imageSelector">
                <ul>
                    {
                        sprites.map( elem => (
                            elem.src ?
                            (<button
                                onClick={ ()=> setImageSrc(elem.src)}
                            >{elem.sprite}</button>)
                            :
                            null
                            )
                        )
                    }
                </ul>
            </div>
        </div>
)
}
