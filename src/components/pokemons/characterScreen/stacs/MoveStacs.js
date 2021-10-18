import React, { useState } from 'react'
import PropTypes from "prop-types";

import { ExelColums } from '../../../commons/ExelColums';
import { DescriptionBox } from '../../../commons/DescriptionBox';

export const MoveStacs = ({
    move_damage_class: classMove,
    moves,
}) => {

    const [activeMove, setactiveMove] = useState({
        name: moves[0].name,
        url: moves[0].url
    })

    const handleClick = (elem) => {
        setactiveMove(s => ({
            ...s,
            name: elem.name,
            url: elem.url
        }))
    }
    return (
        <div className='typeStacs'>

            <div className='statsTitle'>
                <h4>Moves</h4>
            </div>

            <ExelColums
                key={classMove.name}
                item={'Damage Class'}
                values={[classMove]}
            />
            <div className='movesBox'>
                {
                    moves.map(elem =>
                    (<button
                        // className={(typeStacs.type === elem.type.name) ? 'active' : ''}
                        key={elem.name}
                        onClick={() => handleClick(elem)}
                    >{elem.name}</button>)
                    )
                }
            </div>

            <DescriptionBox data={activeMove} />
        </div>
    )
}

MoveStacs.propTypes = {
    move_damage_class: PropTypes.object.isRequired,
    moves: PropTypes.array.isRequired
}
