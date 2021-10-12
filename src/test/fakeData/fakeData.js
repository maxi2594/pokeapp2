
export const fakeData = {
    "count": 1283,
    "next": "https://pokeapi.co/api/v2/pokemon-form/?offset=10&limit=5",
    "previous": "https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=5",
    "results": [
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon-form/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon-form/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon-form/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon-form/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon-form/10/"
        }
    ]
}

export const data = {
    name: 'somepokename',
    is_battle_only: true,
    types: [
        {
            slot: 1,
            type: {
                url: 'https:/faakeUrl.com',
                name: 'name'
            }
        },
        {
            slot: 2,
            type: {
                url: 'https:/faakeUrl.com',
                name: 'name'
            }
        },
        {
            slot: 3,
            type: {
                url: 'https:/faakeUrl.com',
                name: 'name'
            }
        }
    ],
    pokemon: {
        name: 'somepokename'
    },
    sprites: {
        front_default: 'http://fakeUrl/image'
    },
    damage_relations: {
        double_damage_from: 'somePokeDamage'
    }
}