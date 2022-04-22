import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import {positionReducer} from "./positionReducer";
import {userReducer} from "./userReducer";
import thunk from "redux-thunk";
import {tokenReducer} from "./tokenReducer";
import {loadReducer} from "./loadReducer";
import {newUserReducer} from "./newUserReducer";


const rootReducer = combineReducers({
    usersInfo: userReducer,
    positions: positionReducer,
    token : tokenReducer,
    loadingStatus: loadReducer,
    status: newUserReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))