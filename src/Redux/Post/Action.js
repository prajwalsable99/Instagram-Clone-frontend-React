import { CREATE_NEW_POST, DELETE_POST, GET_OTHER_USER_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

export const createPostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },
                    body: JSON.stringify(data.data)

                }
            );

            const post = await res.json();
            console.log("post created", post)
            dispacth({ type: CREATE_NEW_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }


export const findUserPostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/following/${data.userIds}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const posts = await res.json();
            console.log("following posts", posts)
            dispacth({ type: GET_USER_POST, payload: posts });

        } catch (error) {
            console.log(error)
        }

    }

export const findReqUserPostsAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/all/${data.userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const posts = await res.json();
            console.log("req users posts", posts)
            dispacth({ type: REQ_USER_POST, payload: posts });

        } catch (error) {
            console.log(error)
        }

    }


export const findOtherOneUserPostsAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/all/${data.userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const posts = await res.json();
            console.log(" other one users posts", posts)
            dispacth({ type: GET_OTHER_USER_POST, payload: posts });

        } catch (error) {
            console.log(error)
        }

    }

export const likePostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/like/${data.postId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const post = await res.json();
            console.log("post liked", post)
            dispacth({ type: LIKE_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }


export const unlikePostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/unlike/${data.postId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const post = await res.json();
            console.log("post unliked", post)
            dispacth({ type: UNLIKE_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }

export const savePostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/savepost/${data.postId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const post = await res.json();
            console.log("post saved", post)
            dispacth({ type: SAVE_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }

export const unsavePostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/unsavepost/${data.postId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const post = await res.json();
            console.log("post unsaved", post)
            dispacth({ type: UNSAVE_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }

export const findPostByPostIdAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/${data.postId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const posts = await res.json();
            // console.log("upost id", posts)
            dispacth({ type: GET_SINGLE_POST, payload: posts });

        } catch (error) {
            console.log(error)
        }

    }

export const deletePostAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/posts/delete/${data.postId}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },


                }
            );

            const post = await res.json();
            console.log("delete post ", post)
            dispacth({ type: DELETE_POST, payload: post });

        } catch (error) {
            console.log(error)
        }

    }