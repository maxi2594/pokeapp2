import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getPokes } from '../../../helpers/getPokesApi'
import { ImageContainer } from './ImageContainer';
import { TypeStacs } from './TypeStacs';
import "./characterScreen.css";

export const CharacterScreen = () => {

    const [data, setData] = useState(null)
    const [type, setType] = useState({
        type: '',
        src: ''
    })

    const { id } = useParams()

    const handeSetTypeStac = ({ name, url }) => {
        setType(s => ({
            type: name,
            src: url
        }))
    }

    useEffect(() => {

        try {
            const data = getPokes(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
            data.then(data => {
                setData(data)
                const { types } = data;
                setType((s) => ({
                    ...s,
                    type: types[0]?.type.name,
                    src: types[0]?.type.url
                }))
            })

        } catch (error) {
            setData(d => ({ ...d }))
            setType(t => ({ ...t }))
        }


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
                                className={(type.type === elem.type.name) ? 'active' : ''}
                                key={elem.slot}
                                onClick={() => handeSetTypeStac(elem.type)}
                            >{elem.type.name}</button>)
                            )
                        }
                    </div>
                </div>
                <TypeStacs src={type.src} />
            </div>
        </div>

        )
    )
}
