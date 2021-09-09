// const defaultUrl = `https://pokeapi.co/api/v2/pokemon-form/?limit=5&offset=5`

export const getPokes = async ( url ) => {


        try {
            
            const resp = await fetch(url)
            const data = await resp.json();
            return data;

        } 
        catch (error) 
        {
            console.log(error);
        }
    

        // const gifts = data.map( elem => ({

        //     id: elem.id,
        //     title: elem.title,  
        //     url: elem.images?.downsized_medium.url,
        // }));
        
}