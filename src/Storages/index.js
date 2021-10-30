import { createStore, combineReducers } from "redux"
import data from "./Reducers/Data"

const reducer = combineReducers({
    data,
})

const configStore = () => createStore(reducer)

export default configStore