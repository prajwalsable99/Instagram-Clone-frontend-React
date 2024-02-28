import { ADD_STORY, FOLLOWING_STORY, USER_STORY } from "./ActionType";

export const addStoryAction = (data) =>
    async (dispacth) => {

        try {

            const res = await fetch(
                `http://localhost:8080/api/stories/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },
                    body: JSON.stringify(data.data),
                },

            );

            const story = await res.json();
            console.log("story added :", story)
            dispacth({ type: ADD_STORY, payload: story });

        } catch (error) {
            console.log(error)
        }

    }

export const getReqUserStoryAction = (data) =>
    async (dispacth) => {

        // console.log(data.userId)

        try {

            const res = await fetch(
                `http://localhost:8080/api/stories/${data.userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },

                },

            );

            const story = await res.json();
            console.log("story of curr user :", story)
            dispacth({ type: USER_STORY, payload: story });

        } catch (error) {
            console.log(error)
        }

    }

export const getFollowingUsersStoryAction = (data) =>
    async (dispacth) => {

        // console.log(data.userId)

        try {

            const res = await fetch(
                `http://localhost:8080/api/stories/following/${data.userId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + data.token,
                    },

                },

            );

            const story = await res.json();
            console.log("following user stories :", story)
            dispacth({ type:FOLLOWING_STORY, payload: story });

        } catch (error) {
            console.log(error)
        }

    }