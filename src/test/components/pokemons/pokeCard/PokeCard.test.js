import { shallow } from 'enzyme'
import React from 'react'
import { PokeCard } from '../../../../components/pokemons/pokeCard/PokeCard'


describe('Test in <PokeCard/>', () => {

    const values = {
        pokemon: { name: 'charizard' },
        sprites: { front_default: 'https://fakeUrl' },
        id: 45
    }

    const wrapper = shallow(<PokeCard {...values} />)

    test('should shown properly', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('should have an img tag(html) and src / alt props', () => {

        const props = wrapper.find('img').props();

        expect(wrapper.find('img').exists()).toBe(true);

        expect(props.src).toBe(values.sprites.front_default);
        expect(props.alt).toBe(values.pokemon.name);
        expect(wrapper.find('h2').text().trim()).toBe(values.pokemon.name);

    })

})
