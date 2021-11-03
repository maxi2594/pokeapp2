import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import { getPokes } from '../../helpers/getPokesApi';
import { entriesLoop } from '../../helpers/heplsFn';

export const DescriptionBox = ({ data, description = 'effect' }) => {

    const [desc, setDesc] = useState('')

    const { name, url } = data;

    useEffect(() => {

        getPokes(url)
            .then(data => {
                const description = entriesLoop(data, 'version_group');
                setDesc(description)
            })
            .catch(err => console.log(err))

    }, [url])

    return (
        <div className='descriptionBox'>

            <span className='title'> {name} </span>

            <p className='descriptionText'>
                {desc}
            </p>
        </div>
    )
}

DescriptionBox.propTypes = {
    data: PropTypes.object.isRequired
}