import { ADD_STORY, FOLLOWING_STORY, USER_STORY } from "./ActionType";

const initialValues = {

    addstory:null,
    curr_story:[],
    foll_stories:[]

}

export const StoryReducer = (store = initialValues, action) => {

  if (action.type === ADD_STORY) {

    return { ...store, addstory: action.payload }

  } else if (action.type === USER_STORY) {

    return { ...store, curr_story: action.payload }

  } else if (action.type === FOLLOWING_STORY) {

    return { ...store, foll_stories: action.payload }

  } 

  return store;

}