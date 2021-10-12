import { instanceOf } from 'prop-types';
import { getPokes, getCharactersData } from '../../helpers/getPokesApi';
import { fakeData } from '../fakeData/fakeData';

describe('tests in getPokesApi getPokes funcs', () => {

    beforeEach(() =>
        jest.clearAllMocks()
    )

    test('should getPokes work', async () => {

        window.fetch = jest.fn((e) =>
            Promise.resolve({
                json: () => Promise.resolve({ ...fakeData })
            })
        )

        const data = await getPokes('https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5');

        expect(data).toEqual(fakeData);
        expect(fetch).toHaveBeenCalledTimes(1)
    })

    test('should getPokes rejection work', async () => {

        global.alert = jest.fn((e) => { })

        window.fetch = jest.fn((e) =>
            Promise.reject('API failed to load data')
        )

        await getPokes('https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5');

        expect(fetch).toHaveBeenCalledTimes(1)
        expect(alert).toHaveBeenCalledTimes(1)
        expect(alert).toHaveBeenCalledWith('Error: API failed to load data')

    })


})

describe('tests in getPokesApi getCharactersData funcs', () => {

    beforeEach(() =>
        jest.clearAllMocks()
    )

    test('should getCharactersData resolve work', async () => {

        window.fetch = jest.fn((url) =>
            Promise.resolve({
                json: () => Promise.resolve({ url: url })
            })
        )
        const data = await getCharactersData(fakeData.results);

        expect(data.length).toEqual(fakeData.results.length);
        expect(window.fetch).toHaveBeenCalledTimes(fakeData.results.length)
    })

    test('should getCharactersData rejection work', async () => {

        window.fetch = jest.fn((url) =>
            Promise.reject('failed to load')
        )
        const data = await getCharactersData(fakeData.results);

        expect(data instanceof Error).toBe(true)
        expect(data.message).toBe('fail to load api')

    })

})

