import { mount, shallow } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router'
import { PokeScreen } from '../../../components/pokemons/PokeScreen'
import { pokeContext } from '../../../context/pokeContext'

describe('test in <PokeScreen/>', () => {

    const startLoading = jest.fn();
    const stopLoading = jest.fn();
    const getData = jest.fn();


    const componentProps = {
        state: {
            data: {
                results: [], 
                next: 'next', 
                previous: 'previous'
            }, 
            loading: true, 
            error: null
        },
        url: '',
        handleSetUrL: jest.fn(),
        stopLoading: jest.fn(),
        startLoading:jest.fn() 
    } 

    const wrapperFn = (props) => {
        return (
            mount(
                <pokeContext.Provider value={{...props}}>
                    <MemoryRouter>
                        <PokeScreen/>
                        </MemoryRouter>
                </pokeContext.Provider>
            )
        )
    }

    test('should be shown properly', () => {
        const wrapper = wrapperFn(componentProps)
        expect(wrapper).toMatchSnapshot()
    })

    test('should contain 2 NavigateButtons & LoadIcon', () => {
        const wrapper = wrapperFn(componentProps)
        expect(wrapper.find('NavigateButtons').length).toEqual(2)
        expect(wrapper.find('LoadIcon').exists()).toBe(true)
    })

    test('should contain PokeList', () => {
        const componentProps2 = {
            ...componentProps,
            state: {
                data: {
                    results: [], 
                    next: 'next', 
                    previous: 'previous'
                }, 
                loading: false, 
                error: null
            }
        }
        // console.log(componentProps2);
        const wrapper = wrapperFn(componentProps2)

        expect(wrapper.find('PokeList').exists()).toBe(true)       
    })
    
})
