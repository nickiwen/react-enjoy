import * as actionsType from "../contants/collect"

const initState = [];
export default function collect(state = initState,action){
    switch(action.type){
        case actionsType.COLLECT:
            state.push(action.data); // [{0:"2342352342352"}]
            return state;
        case actionsType.UNCOLLECT:
            return state.filter((element) => {
                if(element.id !== action.data.id){
                    return element;
                }
            })
        default:
            return state;
    }
}