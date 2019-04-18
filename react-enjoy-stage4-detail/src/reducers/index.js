import { combineReducers } from "redux"
import city from "./city"
import userinfo from "./userinfo"

const rootReducer = combineReducers({
    city,
    userinfo
})

export default rootReducer
