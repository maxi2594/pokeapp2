// const defaultUrl = `https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`

export const getPokes = async (url) => {
    try {
        const resp = await fetch(url)
        const data = await resp.json();
        return data

    }
    catch (error) {
<<<<<<< HEAD

        throw error
=======
        throw Error('failed')
>>>>>>> 365dd972c8dba7ba147d324100b1d48fe92bf2af
    }
}
export const getCharactersData = async (arr) => {
    const fetchArr = arr.map(({ url }) => fetch(url))

    try {
        const promises = await Promise.all(fetchArr);
        const result = await Promise.all(promises.map((resp) => resp.json()));
        const data = await result;

        return data;

    }
    catch (error) {
        throw error
    }
}

export const getData = async (results) => {
    if (results) {

        const data = await getCharactersData(results)
        return data
    }
}