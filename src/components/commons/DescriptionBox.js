import React, { useEffect, useState } from 'react'
import { getPokes } from '../../helpers/getPokesApi';

export const DescriptionBox = ({ data, description = 'effect' }) => {

    const [desc, setDesc] = useState('')

    const { name, url } = data;

    function entriesLoop(obj) {

        let value;

        if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                const element = obj[i];
                entriesLoop(element)
            }
        }
        else {
            for (const key in obj) {
                if (typeof (obj[key]) === 'object') {
                    entriesLoop(obj[key]);
                }
                else {
                    if (key === description) {
                        value = obj[key]
                    }
                }
            }
        }
        return value;
    }

    useEffect(() => {

        getPokes(url)
            .then(data => {
                console.log(entriesLoop(data));
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='descriptionBox'>

            <span className='title'> {name} </span>

            <p className='descriptionText'>
                {desc}
            </p>
        </div>
    )
}
