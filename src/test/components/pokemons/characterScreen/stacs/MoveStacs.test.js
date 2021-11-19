import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme"

import { MoveStacs } from "../../../../../components/pokemons/characterScreen/stacs/MoveStacs"
import { data } from "../../../../fakeData/fakeData"


describe('test in <MoveStacs />', () => {

    test('should render Properly', () => {

        const wrapper = shallow(<MoveStacs {...data} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('should appear data in screen', () => {

        const { getAllByRole, getByText } = render(<MoveStacs {...data} />)

        expect(getByText(
            new RegExp(data.move_damage_class.name, 'i')
        )).toBeInTheDocument()

        const buttons = getAllByRole('button');

        expect(buttons.length).toEqual(data.moves.length)
    })


})