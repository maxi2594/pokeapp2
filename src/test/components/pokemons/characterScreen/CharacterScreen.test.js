import { render, screen, act, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { CharacterScreen } from "../../../../components/pokemons/characterScreen/CharacterScreen"
import { data } from "../../../fakeData/fakeData";

describe('test in <CharacterScreen/>', () => {



    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => ({ ...data })
            })
        )
        global.alert = jest.fn((e) =>
            console.log({ error: e })
        )
        String.replaceAll = jest.fn()
    })

    afterEach(cleanup);


    test('should show properly', async () => {

        const wrapper = shallow(
            <MemoryRouter>
                <CharacterScreen />
            </MemoryRouter>
        )

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('div').length).toEqual(0);
    })

    test('should have content after state update', async () => {
        await act(async () =>
            render(
                <MemoryRouter>
                    <CharacterScreen />
                </MemoryRouter>
            ))

        expect(screen.getByText(data.name.toUpperCase()))
            .toBeInTheDocument();
    })

})

