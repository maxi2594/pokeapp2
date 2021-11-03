import React, { useEffect, useState } from 'react'
import PropTypes, { instanceOf } from "prop-types";
import { getPokes } from '../../../helpers/getPokesApi'
import { DamageStacs } from './stacs/DamageStacs';
import { MoveStacs } from './stacs/MoveStacs';

export const TypeStacs = ({ src }) => {

    const [state, setState] = useState({
        data: null,
        error: null
    })


    useEffect(() => {
        if (src !== '') {

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
                (state.data) ?
                    (<MoveStacs {...state.data} />)
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
