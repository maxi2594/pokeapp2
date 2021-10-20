import { element } from 'prop-types';
import React, { useEffect, useState } from 'react'
import { getPokes } from '../../helpers/getPokesApi';

export const DescriptionBox = ({ data, description = 'effect' }) => {

    const [desc, setDesc] = useState('')

    const { name, url } = data;

    function entriesLoop(data, keyword) {

        for (var key in data) {

            if (key === 'effect') {
                console.log('encontre!!');
                return data[key]
            }
            if (data[key] === null || typeof data[key] !== 'object') {
                continue
            }
            if (Array.isArray(data[key])) {
                for (let i = 0; i < data[key].length; i++) {
                    const element = data[key][i];

                    console.log(keyword);
                    return entriesLoop(element, keyword)
                }
            }
            if (typeof data[key] === 'object') {
                entriesLoop(data[key], keyword)
            }
            else {
                return data
            }

        }

        // for (const key in obj) {
        //     if (Object.hasOwnProperty.call(obj, key)) {
        //         const element = obj[key];

        //         console.log(key);

        //         if (key === 'effect') {
        //             return console.log('lo encontre!!');
        //         }

        //         if (element === null || typeof element !== 'object') {
        //             continue;
        //         }

        //         if (Array.isArray(element)) {
        //             for (let i = 0; i < element.length; i++) {
        //                 const elem = element[i];
        //                 console.log('array iteration');
        //                 return entriesLoop(elem);
        //             }
        //         }

        //         if (typeof element === 'object') {
        //             return entriesLoop(element);
        //         }
        //     }
        //     return obj;
        // }
    }

    useEffect(() => {

        getPokes(url)
            .then(data => {
                const description = entriesLoop(data, 'version_group');
                console.log(description);
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
