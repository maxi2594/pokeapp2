import { act, render, screen } from "@testing-library/react";
import { DescriptionBox } from "../../../components/commons/DescriptionBox";


describe('test in <DescriptionBox />', () => {

    const data = {
        name: 'power x',
        url: 'fakeurl'
    }
    const description = 'Inflicts regular damage. Has a $effect_chance% chance to lower the target s Speed by one stage.'

    beforeEach(() => {


        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: jest.fn(() =>
                    Promise.resolve({
                        effect: description
                    })
                )
            });
        })

        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    test('should show the descriptions', async () => {

        act(() => {
            render(<DescriptionBox data={data} />)
        })

        act(() => {
            jest.advanceTimersByTime(5000)
        })

        expect(await screen.findByTestId('desc')).toBeInTheDocument()
        expect(await (await screen.findByTestId('desc')).textContent).toMatch(description)
    })

})
