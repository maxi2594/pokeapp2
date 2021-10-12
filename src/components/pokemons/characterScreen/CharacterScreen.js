import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getPokes } from '../../../helpers/getPokesApi'
import { ImageContainer } from './ImageContainer';
import { TypeStacs } from './TypeStacs';
import "./characterScreen.css";

export const CharacterScreen = () => {

    const [data, setData] = useState(null)
    const [typeStacs, settypeStacs] = useState({
        show: true,
        src: ''
    })

    const { id } = useParams()

    const handeSetTypeStac = (src) => {
        settypeStacs(s => ({
            ...s,
            src
        }))
    }

    useEffect(() => {

        const data = getPokes(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
        data.then(data => {
            setData(data)
        })

    }, [id])

    return (
        data
        &&
        (<div className='flexContainer'>

            <ImageContainer data={data} />

            <div className='statsContainer'>
                <div className='stats'>
                    <label> name : </label>
                    <p data-testid="name">{data.name.toUpperCase()}</p>
                </div>

                <div className='stats'>
                    <label>Battle Only :</label>
                    <p> {data.is_battle_only ? 'SI' : 'NO'}</p>
                </div>

                <div className='stats'>
                    <label>Types:</label>
                    <div>
                        {
                            data.types.map(elem =>
                            (<button
                                key={elem.slot}
                                onClick={() => handeSetTypeStac(elem.type.url)}
                            >{elem.type.name}</button>)
                            )
                        }
                    </div>
                </div>
                {
                    typeStacs.show && (<TypeStacs src={data.types[0].type.url} />)
                }

            </div>
        </div>

        )
    )
}
