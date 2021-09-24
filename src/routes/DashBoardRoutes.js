import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CharacterScreen } from '../components/pokemons/characterScreen/CharacterScreen';
import { PokeScreen } from '../components/pokemons/PokeScreen';
import { Navbar } from '../components/UI/NavBar';


export const DashBoardRoutes = () => {

    return (
        <div>
            <Navbar/>

                <Switch>

                    <Route exact path="/pokes" render={ ()=> <PokeScreen/> }/>
                    <Route exact path="/pokes/character/:id" render={ ()=> <CharacterScreen/>}/>


                    {/* <Route exact path="/heroe/:heroeId" component={ HeroesScreen }/> */}
                    {/* <Route exact path="/marvel" component={ MarvelScreen }/> */}
                    {/* <Route exact path="/search" component={ SearchScreen }/> */}

                    <Redirect to="/pokes"/>
                </Switch>
            </div>
    )
}
