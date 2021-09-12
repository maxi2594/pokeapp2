import React from 'react'
import { Link } from 'react-router-dom';
import { useFetchPokes } from '../../hooks/useFetchPokes';

export const PokeCard = ({ url }) => {

    const {state} = useFetchPokes(url)
    
    return (
        <>
        {/* {
        (loading)?

        (<h1>loading</h1>)
        :
        (<div className="card col-sm-6 mb-2" style={{maxWidth: 540}} >
            <div className="row ">
                <div className="col-md-4">
                    <img
                        src={back_default} 
                        className="card-img"
                        alt={ name }/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
    
                        <h2> { name } </h2>
                        <hr></hr>    
                    </div>
                </div>
            </div>
        </div>)
        } */}
    </>
)
}

