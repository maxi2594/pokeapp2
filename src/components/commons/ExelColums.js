import React from 'react'
import PropTypes from "prop-types";

export const ExelColums = ({ item, values }) => {


    return (
        <div className='rowStat'>

            <div className='columnItem'>
                <span>{item.replace('/_/g', ' ')}</span>
            </div>

            <div className='columnValue'>
                {
                    values.map(elem =>
                    (<span
                        className={item}
                        key={elem.name}
                    >{elem.name}</span>)
                    )
                }
            </div>
        </div>
    )
}

ExelColums.propTypes = {
    item: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired
}