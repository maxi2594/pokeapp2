import React, { useState } from 'react'
import PropTypes from "prop-types";

export const ImageContainer = ({ data }) => {

    const [imageSrc, setImageSrc] = useState(data.sprites.front_default)


    const sprites = (Object.keys(data.sprites).map(key => ({
        sprite: [key],
        src: data.sprites[key]
    })))

    return (
        <div className='imageContainer'>
            <img
                style={{ width: 250 }}
                src={imageSrc}
                alt={data.pokemon.name}
            />
            <div className="imageSelector">
                <ul>
                    {
                        sprites.map(elem => (
                            elem.src ?
                                (<button
                                    key={elem.sprite}
                                    onClick={() => setImageSrc(elem.src)}
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

ImageContainer.propTypes = {
    data: PropTypes.object.isRequired
}
