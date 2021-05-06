export interface Result {
    name: string
    url: string
}

type Ability = Result

export interface Resource {
    isHidden: boolean
    slot: number
    ability: Ability
}

export interface Pokemon {    
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Resource[]
}

export interface PokemonResults {
    count:number
    next:string
    previous:string
    results: Result[]
}

export interface PokemonDetail extends Pokemon{
    sprites:{
        other: {
            dream_world:{
                front_default: string
            }
        }
    },
    height: number
    weight: number
}