import { FOLLOW_USER, GET_USER_BY_USERID, GET_USER_BY_USERNAME, GET_USER_BY_USER_IDS, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";

const initialValues = {

  reqUser: null,
  findByUsername: null,
  findByUserId: null,
  findUsersByIds: [],
  followUser: null,
  unfollowUser: null,
  updatedUser: null,
  searchUser: []

}

export const UserReducer = (store = initialValues, action) => {

  if (action.type === REQ_USER) {

    return { ...store, reqUser: action.payload }

  } else if (action.type === GET_USER_BY_USERNAME) {

    return { ...store, findByUsername: action.payload }

  } else if (action.type === GET_USER_BY_USERID) {

    return { ...store, findByUserId: action.payload }

  } else if (action.type === GET_USER_BY_USER_IDS) {

    return { ...store, findUsersByIds: action.payload }


  } else if (action.type === FOLLOW_USER) {
    return { ...store, followUser: action.payload }


  } else if (action.type === UNFOLLOW_USER) {

    return { ...store, unfollowUser: action.payload }
  } else if (action.type === UPDATE_USER) {

    return { ...store, updatedUser: action.payload }

  } else if (action.type === SEARCH_USER) {

    return { ...store, searchUser: action.payload }
  }

  return store;

}