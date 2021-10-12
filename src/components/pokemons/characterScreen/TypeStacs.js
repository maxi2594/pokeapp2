import React, { useEffect, useState } from 'react'
import { getPokes } from '../../../helpers/getPokesApi'

export const TypeStacs = ({ src }) => {

    const [data, setdata] = useState({
        data: null,
        error: null
    })

    // useEffect(() => {
    //     getPokes(src).then(data => data.damage_relations.double_damage_from.map(elem=> console.log(elem)))
    // }, [src]);

    return (
        data ?
            (<div className='typeStacs'>
                <div className='stats'>
                    <h3 style={{ width: '100%' }}>Damage Relations</h3>
                    <label> Doble Damage From: </label>
                    {/* {
                    data.damage_relations.double_damage_from.map( damage => (
                     <span>{damage.name}</span>       
                    ))
                } */}
                </div>
            </div>)
            :
            null
    )
}
