import * as actionsType from "../contants/userinfo"

export function login(data){
    return{
        type:actionsType.LOGIN,
        data
    }
}