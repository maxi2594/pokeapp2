import React from 'react'
import PropTypes from 'prop-types';

import { ExelColums } from '../../../commons/ExelColums';

export const DamageStacs = ({ damage }) => {

    const damageArr = Object.entries(damage)

    return (
        <div className='typeStacs'>
            <div className='statsTitle'>
                <h4>Damage Stacs</h4>
            </div>
            {
                damageArr.map(elem =>
                (<ExelColums
                    key={elem[0]}
                    item={elem[0]}
                    values={elem[1]}
                />)
                )
            }

        </div>
    )
}
DamageStacs.propTypes = {
    damage: PropTypes.object.isRequired
}