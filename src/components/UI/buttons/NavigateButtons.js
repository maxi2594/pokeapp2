import React from 'react'

export const NavigateButtons = ({
    handleSetUrL,
    next,
    previous
}) => {


    const styles = {
        container: {
            display: 'flex',
            alignItems : 'center',
            backgroundColor: 'rgb(43,47,51)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: '1rem',
            marginBottom: '2rem',
        },
        button:{
            border: '2px solid grey',
            backgroundColor: 'transparent',
            marginLeft: '10px',
            marginRight: '10px',
            color: 'grey',
            width: '5rem',
            height: '2rem',
        }
    }
    return (
        <div style={ styles.container }>

            <button 
                style={ styles.button }
                onClick={ ()=> handleSetUrL(previous) }
            > 
                PREVIOS 
            </button>

            <button 
                style={ styles.button }
                onClick={ ()=> handleSetUrL(next) }
            >
                NEXT 
            </button>

        </div>
    )
}
