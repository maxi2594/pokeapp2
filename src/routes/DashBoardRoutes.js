import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PokeScreen } from '../components/pokemons/PokeScreen';
import { Navbar } from '../components/UI/NavBar';


export const DashBoardRoutes = () => {

    return (
        <div>
            <Navbar/>

            <div className="container-fluid">
                <Switch>

                    <Route exact path="/" render={ ()=> <PokeScreen/> }/>


                    {/* <Route exact path="/heroe/:heroeId" component={ HeroesScreen }/> */}
                    {/* <Route exact path="/marvel" component={ MarvelScreen }/> */}
                    {/* <Route exact path="/search" component={ SearchScreen }/> */}

                    {/* <Redirect to="/marvel"/> */}
                </Switch>
            </div>
        </div>
    )
}
