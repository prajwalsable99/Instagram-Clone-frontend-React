import React, { useEffect, useState } from 'react'
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { isCommentLikedByUser, timeDiff } from '../../config/logics';
import { useDispatch, useSelector } from 'react-redux';
import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action';

const CommentCard = ({ comment }) => {

    const [isCommentLiked, setIsCommentLiked] = useState(false);

    const dispatch=useDispatch();

    const jwttoken=localStorage.getItem("token");
    const reqdata={
        commentId:comment.id,
        token:jwttoken
    }

    const {user}=useSelector(store=>store);
    // const  {unlikeComment,likeComment} =useSelector(store=>store.comment);


    useEffect(()=>{
        setIsCommentLiked(isCommentLikedByUser(comment,user.reqUser?.id))
    },[comment, user.reqUser])

    const handlecommentLike = () => {
        setIsCommentLiked(true);
        // console.log("clicked like comment")
        dispatch(likeCommentAction(reqdata))

    }

    const handlecommentunLike = () => {
        // console.log("clicked unlike comment")
        setIsCommentLiked(false);
        dispatch(unlikeCommentAction(reqdata))
    }


    return (
        <div className='flex justify-between items-center py-3 px-5 w-full '>



            <div className='flex items-center'>
                <div>
                    <img className='h-9 w-9 rounded-full' src={comment.user.userimage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />

                </div>

                <div className='mx-2'>
                    <div>
                        <span className='font-semibold text-sm mr-2'>{comment.user.username}</span>
                        <span className='text-sm '>{comment.content}</span>
                    </div>

                    <div className='text-xs'>
                        <span>{timeDiff(comment.createdat)}</span>
                        <span className='pl-2'>{comment.likedByUsers.length} likes</span>
                    </div>


                </div>
            </div>

            <div className='text-md'>
                {
                    isCommentLiked ?
                         <AiFillHeart onClick={handlecommentunLike} fill='red' /> :
                        <AiOutlineHeart onClick={handlecommentLike} />
                }



            </div>


        </div>


    )
}

export default CommentCard
