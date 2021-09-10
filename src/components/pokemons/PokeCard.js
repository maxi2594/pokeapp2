import React from 'react'
import { Link } from 'react-router-dom';

export const PokeCard = ({character}) => {

    const {poekeName, sprites :{ back_default }} = character;

    return (
        <div className="card col-sm-6 mb-2" style={{maxWidth: 540}} >
            <h1>algoo</h1>
            <div className="row ">
                <div className="col-md-4">
                    <img
                        src={back_default} 
                        className="card-img"
                        alt={ poekeName }/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
    
                        <h2> { poekeName } </h2>
                        <hr></hr>
                        {/* <h4> { alter_ego }</h4>
    
                        <div className="text-muted">
                            { first_appearance }
                        </div>
    
                        <Link 
                            to={`/heroe/${ id }`}
                        > Mas...</Link> */}
    
                    </div>
                </div>
            </div>
        </div>
    )
}

