import React, { useCallback, useContext, useEffect, useState } from 'react'
import { pokeContext } from '../../context/pokeContext'
import { getCharactersData } from '../../helpers/getPokesApi'
import { NavigateButtons } from '../UI/buttons/NavigateButtons'
import { LoadIcon } from '../UI/loading/LoadIcon'
import { PokeList } from './PokeList'


export const PokeScreen = () => {

    const styles = {
        display: 'flex',
        alignItems : 'center',
        backgroundColor: 'rgb(43,47,51)',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '2rem',
        width: '100%',
        height: '100%'
    }

    const {state, handleSetUrL, stopLoading, startLoading } = useContext(pokeContext);
    const { data, loading, error} = state;
    
    const {results, next, previous } = data

    const [characters, setstate] = useState([])

    const getData = useCallback(
        async () => {
            if (results) {
                
                const data =  await getCharactersData(results)
                return data
            }
                            
        },
        [results],
    );

    useEffect(() => {
        startLoading()
        getData().then( data => {

            setTimeout(() => {
                
                setstate( data )
                stopLoading();
            }, 1000);
            
        })
    }, [getData])

    return (
        <div style={ styles }>
            <NavigateButtons 
                        handleSetUrL={ handleSetUrL }
                        next={ next }
                        previous={ previous }
            />
            { (loading) ? 
                (<LoadIcon/>)
                :
                (<>
                    
                    <PokeList results={characters} />
                    
                </>
                )
            }
            <NavigateButtons 
                        handleSetUrL={ handleSetUrL }
                        next={ next }
                        previous={ previous }
            />
            { 
                (error) && (alert( error ))
            }
        </div>
    )
}
