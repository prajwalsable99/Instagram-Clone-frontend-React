import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { AuthReducer } from "../Auth/Reducer";
import { thunk } from "redux-thunk";
import { UserReducer } from "../User/Reducer";
import { PostReducer } from "../Post/Reducer";
import { CommentReducer } from "../Comment/Reducer";
import { StoryReducer } from "../Story/Reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers(
    {
        auth:AuthReducer,
        user:UserReducer,
        post:PostReducer,
        comment:CommentReducer,
        story:StoryReducer,
    }
)


export const store=legacy_createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))