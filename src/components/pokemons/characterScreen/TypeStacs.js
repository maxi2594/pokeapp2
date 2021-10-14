import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { getPokes } from '../../../helpers/getPokesApi'
import { DamageStacs } from './stacs/DamageStacs';

export const TypeStacs = ({ src }) => {

    const [state, setState] = useState({
        data: null,
        error: null
    })
    const { data, error } = state;


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
                data &&
                (
                    <DamageStacs damage={data?.damage_relations} />
                )
            }
            {
                error && (<h2>{error}</h2>)
            }
        </div>
    )
}

TypeStacs.propTypes = {
    src: PropTypes.string.isRequired
}
