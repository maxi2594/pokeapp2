import { render, screen, act, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { CharacterScreen } from "../../../../components/pokemons/characterScreen/CharacterScreen"
// import { getPokes } from "../../../../helpers/getPokesApi";
import { data } from "../../../fakeData/fakeData";



describe('test in <CharacterScreen/>', () => {


    beforeEach(() => {
        String.replaceAll = jest.fn()
    })

    afterEach(() => jest.clearAllMocks());


    test('should show properly', async () => {

        const wrapper = shallow(
            <MemoryRouter>
                <CharacterScreen />
            </MemoryRouter>
        )

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('div').length).toEqual(0);
    })

    test('should have content after state update', (done) => {

        const getPokesApi = jest.mock('../../../../helpers/getPokesApi', () => ({
            getPokes: jest.fn()
        }))
        console.log(getPokesApi.getPokes);
        const wrapper = shallow(
            <MemoryRouter>
                <CharacterScreen />
            </MemoryRouter>
        )

        setTimeout(() => {
            wrapper.update()

            expect(getPokes).toHaveBeenCalled()

            done()
        });
    })

})

