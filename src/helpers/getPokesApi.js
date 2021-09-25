// const defaultUrl = `https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`

export const getPokes = async ( url ) => {

    try 
    {
        const resp = await fetch(url)
        const data = await resp.json();
        return data

    } 
    catch (error) 
    {
        alert(`Error: ${ error }`)
    }
        
}
export const getCharactersData = async (arr) => {
    const fetchArr = arr.map(({url}) => fetch(url))

    try 
    {
        const promises = await Promise.all(fetchArr);
        const result = await Promise.all(promises.map((resp) => resp.json()));
        const data = await result;
    
        return data;

    } 
    catch (error) 
    {
       return new Error('fail to load api')
    }
    

}