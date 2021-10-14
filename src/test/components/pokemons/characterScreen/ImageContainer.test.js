import { shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ImageContainer } from "../../../../components/pokemons/characterScreen/ImageContainer"
import { data } from "../../../fakeData/fakeData"


describe('test inj <ImageContainer/>', () => {

    afterEach(cleanup);

    const wrapper = shallow(
        <MemoryRouter initialEntries={[{ location: { key: 'oa23iu' } }]}>
            <ImageContainer data={data} />
        </MemoryRouter>
    )

    test('should show properly', () => {

        // expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('div').length).toBe(0);
    })
    test('should have an image', () => {

        const { container } = render(<ImageContainer data={data} />);
        expect(container.getElementsByTagName('img')[0]).toBeInTheDocument()
    })
    test('should have equal button to sprites', () => {

        const { container } = render(<ImageContainer data={data} />);

        expect(container.getElementsByTagName('button').length)
            .toEqual(Object.keys(data.sprites).length)

        expect(container.getElementsByTagName('button')[1].textContent)
            .toBe(Object.keys(data.sprites)[1])
    })
    test('should change src on click event', () => {

        const { container } = render(<ImageContainer data={data} />);

        const button = container.getElementsByTagName('button')[1];

        fireEvent.click(button);

        expect(
            container.getElementsByTagName('img')[0]
                .src
                .includes(button.textContent)
        )
            .toBe(true)
    })
})
