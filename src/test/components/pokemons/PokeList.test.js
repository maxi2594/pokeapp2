import { shallow } from 'enzyme'
import React from 'react'
import { PokeList } from '../../../components/pokemons/PokeList'


describe('Test in <PokeLis/>', () => {

    const pokeArray = [
        {name: 'charmander'},
        {name: 'pikachu'},
        {name: 'bolbasor'},
        {name: 'baltoy'},

    ]
    const wrapper = shallow( <PokeList results={ pokeArray }/>)
    
    test('should show same number of items in result parm', () => {
    
        const ul = wrapper.find('ul').children();
        expect( ul.length).toEqual( pokeArray.length)
    })
    
})
