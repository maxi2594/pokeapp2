import { render, screen, } from "@testing-library/react";
import { useParams } from 'react-router'

import { data } from "../../../fakeData/fakeData";
import { CharacterScreen } from "../../../../components/pokemons/characterScreen/CharacterScreen"
import { ImageContainer } from "../../../../components/pokemons/characterScreen/ImageContainer";
import { TypeStacs } from "../../../../components/pokemons/characterScreen/TypeStacs";




jest.mock('react-router', () => ({
    useParams: () => ({ id: 1 })
}));


jest.mock("../../../../components/pokemons/characterScreen/TypeStacs", () => ({
    TypeStacs: () => <div />
}))


jest.mock("../../../../components/pokemons/characterScreen/ImageContainer", () => ({
    ImageContainer: () => <div />
}))



describe('test in <CharacterScreen/>', () => {

    beforeEach(() => {

        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: jest.fn(() =>
                    Promise.resolve(data)
                )
            });
        })

        String.replaceAll = jest.fn();

    })


    test('should show properly', async () => {

        render(<CharacterScreen />)

        expect(await screen.findByText(new RegExp(data.name, 'i'))).toBeInTheDocument()

    })

})