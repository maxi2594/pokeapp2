import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { pokeContext } from '../../context/pokeContext'

export const Navbar = () => {

    const { handleSetUrL }=useContext(pokeContext)

    const handleInico = () => {
        handleSetUrL(`https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`);
    }


    return (
        <nav className="container-fluid navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/pokes"
                        onClick={ handleInico }
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}