import React, { useEffect, useState } from 'react'
import PropTypes, { instanceOf } from "prop-types";
import { getPokes } from '../../../helpers/getPokesApi'
import { DamageStacs } from './stacs/DamageStacs';

export const TypeStacs = ({ src }) => {

    const [state, setState] = useState({
        data: null,
        error: null
    })


    useEffect(() => {
        try {
            getPokes(src)
                .then(data =>
                    setState((s) => ({
                        ...s,
                        data: data
                    }))
                )

        } catch (error) {
            setState((s) => ({
                ...s,
                error: error
            }))
        }
    }, [src]);

    return (
        <div className='typeStacs'>
            {
                (state.data) ?
                (<DamageStacs damage={state.data?.damage_relations} />)
                :
                null
                
            }
            {
                state.error && (<h2>{state.error}</h2>)
            }
        </div>
    )
}

TypeStacs.propTypes = {
    src: PropTypes.string.isRequired
}
