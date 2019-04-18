import * as actionsType from "../contants/city"

const initState = {};
export default function city(state = initState,action){
    switch(action.type){
        case actionsType.INIT_CITY:
            return state = action.city;
        case actionsType.UPDATE_CITY:
            return state = action.city;
        default:
            return state;
    }
}