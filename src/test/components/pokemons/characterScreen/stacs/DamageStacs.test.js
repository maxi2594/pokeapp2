import { render } from "@testing-library/react"
import { shallow } from "enzyme"
import { DamageStacs } from "../../../../../components/pokemons/characterScreen/stacs/DamageStacs"
import { data } from "../../../../fakeData/fakeData"



describe('prubas en <DamageStacs />', () => {

    test('should render properly', () => {

        const wrapper = shallow(
            <DamageStacs damage={{ ...data.damage_relations }} />
        )

        expect(wrapper).toMatchSnapshot()
    })

    test('should have every damage titles and values', (done) => {

        const { getByText, container } = render(
            <DamageStacs damage={{ ...data.damage_relations }} />
        )

        const titles = Object.keys(data.damage_relations);

        titles.forEach((elem) => {
            expect(getByText(new RegExp(elem.toString(), 'i'))).toBeInTheDocument()
        })

        titles.forEach((elem) => {
            const spans = container.getElementsByClassName(elem);
            const dataValues = data.damage_relations[elem];

            expect(spans.length).toEqual(dataValues.length)
        })

        done()
    })


})
