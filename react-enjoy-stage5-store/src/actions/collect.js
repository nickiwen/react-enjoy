import * as actionsType from "../contants/collect"

export function setCollect(data){
    return{
        type:actionsType.COLLECT,
        data
    }
}

export function cancelCollect(data){
    return{
        type:actionsType.UNCOLLECT,
        data
    }
}