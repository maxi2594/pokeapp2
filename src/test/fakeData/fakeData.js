
export const fakeData = {
    count: 1283,
    next: "https://pokeapi.co/api/v2/pokemon-form/?offset=10&limit=5",
    previous: "https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=5",
    results: [
        {
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon-form/6/"
        },
        {
            name: "squirtle",
            url: "https://pokeapi.co/api/v2/pokemon-form/7/"
        },
        {
            name: "wartortle",
            url: "https://pokeapi.co/api/v2/pokemon-form/8/"
        },
        {
            name: "blastoise",
            url: "https://pokeapi.co/api/v2/pokemon-form/9/"
        },
        {
            name: "caterpie",
            url: "https://pokeapi.co/api/v2/pokemon-form/10/"
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
        front_default: 'http://fakeUrl/front_default',
        back_default: 'http://fakeUrl/back_default',

    },
    damage_relations: {
        double_damage_from: [
          {
            name: "fighting",
            url: "https://pokeapi.co/api/v2/type/2/"
          },
          {
            name: "ground",
            url: "https://pokeapi.co/api/v2/type/5/"
          },
          {
            name: "steel",
            url: "https://pokeapi.co/api/v2/type/9/"
          },
          {
            name: "water",
            url: "https://pokeapi.co/api/v2/type/11/"
          },
          {
            name: "grass",
            url: "https://pokeapi.co/api/v2/type/12/"
          }
        ],
        "double_damage_to": [
          {
            name: "flying",
            url: "https://pokeapi.co/api/v2/type/3/"
          },
          {
            name: "bug",
            url: "https://pokeapi.co/api/v2/type/7/"
          },
          {
            name: "fire",
            url: "https://pokeapi.co/api/v2/type/10/"
          }]
    }
}
