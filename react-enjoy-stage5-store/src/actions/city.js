import * as actionsType from "../contants/city"

export function initCity(city){
    return{
        type:actionsType.INIT_CITY,
        city
    }
}

export function updateCity(city){
    return{
        type:actionsType.UPDATE_CITY,
        city
    }
}