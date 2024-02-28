import { CREATE_COMMENT, GET_POST_COMMENTS, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

const initialValues = {

    createdComment: null,
    postComments: null,
    likeComment: null,
    unlikeComment: null,

}

export const CommentReducer = (store = initialValues, { type, payload }) => {

    if (type === CREATE_COMMENT) {
        return { ...store, createdComment: payload };
    } else if (type === GET_POST_COMMENTS) {
        return { ...store, postComments: payload };
    } else if (type === LIKE_COMMENT) {
        return { ...store, likeComment: payload };
    }
    else if (type === UNLIKE_COMMENT) {
        return { ...store, unlikeComment: payload };
    }
    return store;

}