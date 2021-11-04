import { render, screen, cleanup, waitFor} from "@testing-library/react";
import { shallow, ShallowWrapper } from "enzyme";
import { MemoryRouter } from "react-router";
import { CharacterScreen } from "../../../../components/pokemons/characterScreen/CharacterScreen"
// import { getPokes } from "../../../../helpers/getPokesApi";
import { data } from "../../../fakeData/fakeData";
import { useParams } from 'react-router'
import { act } from "react-dom/test-utils";
import { ShallowRenderer } from "react-test-renderer/shallow";

<<<<<<< HEAD


describe('test in <CharacterScreen/>', () => {

=======
jest.mock('react-router', () => ({
    useParams: () => ({ id : 1})
}));


describe('test in <CharacterScreen/>', () => {
>>>>>>> 02cc99ca3d304e7c5f6ea9cff2ea4788f3b444ad

    beforeEach(() => {
        String.replaceAll = jest.fn()
    })

    afterEach(() => jest.clearAllMocks());


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

<<<<<<< HEAD
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
=======
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
>>>>>>> 02cc99ca3d304e7c5f6ea9cff2ea4788f3b444ad
    })

})

