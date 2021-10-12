import { shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import { ImageContainer } from "../../../../components/pokemons/characterScreen/ImageContainer"
import { data } from "../../../fakeData/fakeData"


describe('test inj <ImageContainer/>', () => {

    const wrapper = shallow(
        <MemoryRouter initialEntries={[{ location: { key: 'oa23iu' } }]}>
            <ImageContainer data={data} />
        </MemoryRouter>
    )

    test('should show properly', () => {

        expect(wrapper).toMatchSnapshot()
        console.log(wrapper.find('div').length);
    })

})
