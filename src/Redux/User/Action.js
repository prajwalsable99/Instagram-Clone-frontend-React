import { FOLLOW_USER, GET_USER_BY_USERID, GET_USER_BY_USERNAME, GET_USER_BY_USER_IDS, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER } from "./ActionType";

export const getUserProfileAction = (jwt) =>

    async (dispacth) => {

        try {

            const res = await fetch(
                "http://localhost:8080/api/users/req",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + jwt,
                    }

                }
            );

            const reqUser = await res.json();
            dispacth({ type: REQ_USER, payload: reqUser });


        } catch (error) {

            console.log(error)
        }
    }

export const findUserByUserNameAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/username/${data.username}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const user = await res.json();
            console.log("find by username :", user)
            dispacth({ type: GET_USER_BY_USERNAME, payload: user });

        } catch (error) {
            console.log(error)
        }

    }

export const findUserByUserIdAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/id/${data.userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const user = await res.json();
            console.log("find by user id :", user)
            dispacth({ type: GET_USER_BY_USERID, payload: user });

        } catch (error) {
            console.log(error)
        }

    }

export const findMulUserByUserIdsAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/m/${data.userIds}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const users = await res.json();
            console.log("find mul users :", users)
            dispacth({ type: GET_USER_BY_USER_IDS, payload: users });

        } catch (error) {
            console.log(error)
        }

    }



export const followUserAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/follow/${data.userId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const user = await res.json();
            console.log("follow:", user)
            dispacth({ type: FOLLOW_USER, payload: user });

        } catch (error) {
            console.log(error)
        }

    }

export const unfollowUserAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/unfollow/${data.userId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const user = await res.json();
            console.log("unfollow:", user)
            dispacth({ type: UNFOLLOW_USER, payload: user });

        } catch (error) {
            console.log(error)
        }

    }
export const searchUserAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/search?q=${data.query}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    }

                }
            );

            const users = await res.json();
            console.log("searched :", users)
            dispacth({ type: SEARCH_USER, payload: users });

        } catch (error) {
            console.log(error)
        }

    }

export const updateUserAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/users/account/edit`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },
                    body: JSON.stringify(data.data),
                },

            );

            const user = await res.json();
            console.log("updated :", user)
            dispacth({ type: UPDATE_USER, payload: user });

        } catch (error) {
            console.log(error)
        }

    }

