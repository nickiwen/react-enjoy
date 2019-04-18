import * as actionsType from "../contants/userinfo"

const initState = {};

export default function userinfo(state = initState,action){
    switch(action.type){
        case actionsType.LOGIN:
            return state = action.data;
        default:
            return state;
    }
}