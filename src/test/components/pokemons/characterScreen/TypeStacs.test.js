import { render, act, screen, } from "@testing-library/react";

import { TypeStacs } from "../../../../components/pokemons/characterScreen/TypeStacs";
import { DamageStacs } from "../../../../components/pokemons/characterScreen/stacs/DamageStacs";
import { MoveStacs } from "../../../../components/pokemons/characterScreen/stacs/MoveStacs";

import { data } from "../../../fakeData/fakeData";

describe('test in <TypeStacs/>', () => {

    beforeEach(() => {
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                json: jest.fn(() =>
                    Promise.resolve(data)
                )
            });
        })

        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    test('should shown propterrty', async () => {

        const damageTest = data.damage_relations.double_damage_from[0].name;

        act(() => {

            render(<TypeStacs src='fakeSrc' />)
        })

        // screen.debug()

        act(() => {

            jest.advanceTimersByTime(5000)
        })

        expect(await screen.findByRole('heading', { name: /moves/i })).toBeInTheDocument();

        expect(await screen.findByRole('heading', { name: /damage stacs/i })).toBeInTheDocument();

        expect(await screen.findByText(
            new RegExp(damageTest, 'i')
        )).toBeInTheDocument()

    })
})
