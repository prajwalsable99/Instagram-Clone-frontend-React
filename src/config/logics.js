

export const isPostLikedByUser = (post, userId) => {

    for (let user of post?.likedByUsers) {
        if (user.id === userId) {
            return true;
        }
    }
    return false;

}

export const isCommentLikedByUser = (comment, userId) => {

    for (let user of comment?.likedByUsers) {
        if (user.id === userId) {
            return true;
        }
    }
    return false;

}



export const isPostSavedByUser = (user, postId) => {



    for (let post of user?.savedPosts) {
        if (post.id === postId) {
            return true;
        }
    }
    return false;

}

export const isFollowingFunc = (reqUser, user2) => {

    if (reqUser && user2) {


        for (let x of user2.followers) {
            if (x.id === reqUser.id) {

               
                return true;
            }
        }
    }
    return false;

}

export const timeDiff = (timestamp) => {

    if(timestamp===null){
        return "10 years ago";

    }

    const date = new Date(timestamp);

    const diff = Date.now() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 24);

    if (weeks > 0) {
        return weeks + " week" + (weeks === 1 ? "" : "s") + " ago";
    } else if (days > 0) {
        return days + " day" + (days === 1 ? "" : "s") + " ago";
    } if (hours > 0) {
        return hours + " hour" + (hours === 1 ? "" : "s") + " ago";
    } if (minutes > 0) {
        return minutes + " minute" + (minutes === 1 ? "" : "s") + " ago";
    }  if(seconds>0){
        return seconds + " second" +(seconds===1?"":"s") + " ago";
    }





}
