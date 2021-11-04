import { render, screen, cleanup, waitFor} from "@testing-library/react";
import { shallow, ShallowWrapper } from "enzyme";
import { MemoryRouter } from "react-router";
import { CharacterScreen } from "../../../../components/pokemons/characterScreen/CharacterScreen"
import { data } from "../../../fakeData/fakeData";
import { useParams } from 'react-router'
import { act } from "react-dom/test-utils";
import { ShallowRenderer } from "react-test-renderer/shallow";

jest.mock('react-router', () => ({
    useParams: () => ({ id : 1})
}));


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

        const wrapper = render(
            //<MemoryRouter>
                <CharacterScreen />
            //</MemoryRouter>
        )

        // expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find('div').length).toEqual(0);
        expect(wrapper.container.childNodes.length).toBe(0)
    })

    test('should have content after state update',  async (done) => {
        // const container = document.createElement("div");
        // document.body.appendChild(container);

        // const renderer = new ShallowRenderer()
        
        act(()=> {
            
            const continer = shallow(
            //<MemoryRouter>
                <CharacterScreen />
            //</MemoryRouter>
            )
            console.log(continer.debug());
        })
        
        // expect(container.querySelector('img')).toBeInTheDocument()
    })

})

