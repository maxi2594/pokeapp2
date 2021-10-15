import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getPokes } from '../../../helpers/getPokesApi'
import { ImageContainer } from './ImageContainer';
import { TypeStacs } from './TypeStacs';
import "./characterScreen.css";

export const CharacterScreen = () => {

    const [data, setData] = useState(null)
    const [typeStacs, setTypeStacs] = useState({
        type: '',
        src: ''
    })

    const { id } = useParams()

    const handeSetTypeStac = ({ name, url }) => {
        setTypeStacs(s => ({
            type: name,
            src: url
        }))
    }

    useEffect(() => {

        const data = getPokes(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
        data.then(data => {
            setData(data)
            const { types } = data;
            setTypeStacs((s) => ({
                ...s,
                type: types[0]?.type.name,
                src: types[0]?.type.url
            }))
        })

    }, [id])

    return (
        data
        &&
        (<div className='flexContainer'>

            <ImageContainer data={data} />

            <div className='statsContainer'>
                <div className='stats'>
                    <label>name : </label>
                    <p data-testid="name">{data.name.toUpperCase()}</p>
                </div>

                <div className='stats'>
                    <label>Battle Only :</label>
                    <p> {data.is_battle_only ? 'SI' : 'NO'}</p>
                </div>

                <div className='stats'>
                    <label>  Types:</label>
                    <div>
                        {
                            data.types.map(elem =>
                            (<button
                                className={(typeStacs.type === elem.type.name) ? 'active' : ''}
                                key={elem.slot}
                                onClick={() => handeSetTypeStac(elem.type)}
                            >{elem.type.name}</button>)
                            )
                        }
                    </div>
                </div>
                <TypeStacs src={typeStacs.src} />
            </div>
        </div>

        )
    )
}
