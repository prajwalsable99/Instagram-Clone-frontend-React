import { CREATE_COMMENT, GET_POST_COMMENTS, LIKE_COMMENT, UNLIKE_COMMENT } from "./ActionType";

export const createCommentAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/comments/create/${data.postId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },
                    body: JSON.stringify(data.data)

                }
            );

            const comment = await res.json();
            console.log("comment created", comment)
            dispacth({ type: CREATE_COMMENT, payload: comment });

        } catch (error) {
            console.log(error)
        }

    }

//api not implemneted in bakcend
export const findPostCommentsAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/comments/${data.postId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const comments = await res.json();
            console.log("comments", comments)
            dispacth({ type: GET_POST_COMMENTS, payload: comments });

        } catch (error) {
            console.log(error)
        }

    }

export const likeCommentAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/comments/like/${data.commentId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const comment = await res.json();
            console.log("comment liked", comment)
            dispacth({ type: LIKE_COMMENT, payload: comment });

        } catch (error) {
            console.log(error)
        }

    }

export const unlikeCommentAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/comments/unlike/${data.commentId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const comment = await res.json();
            console.log("comment unliked", comment)
            dispacth({ type: UNLIKE_COMMENT, payload: comment });

        } catch (error) {
            console.log(error)
        }

    }
