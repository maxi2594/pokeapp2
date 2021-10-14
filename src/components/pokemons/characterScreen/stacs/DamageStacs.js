import { element } from 'prop-types';
import React from 'react'

export const DamageStacs = ({ damage }) => {

    let damageArr = Array.from(damage);
    console.log(damageArr);

    // ((obj) => {
    //     for (const key in obj) {
    //         if (obj.hasOwnProperty.call(obj, key)) {
    //             const element = obj[key];
    //             return (<span>{element}</span>)
    //         }
    //     }
    // })(damage)



    return (
        <div className='typeStacs'>
            <div className='statsTitle'>
                <h4>Damage Stacs</h4>
            </div>
            <div>
                {
                }
            </div>
        </div>
    )
}
