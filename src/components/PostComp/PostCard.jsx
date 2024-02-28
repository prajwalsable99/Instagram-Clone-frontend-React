import React, { useState,useEffect } from 'react'
import "./PostCard.css"
import { BsEmojiSmile } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaHeart, FaRegHeart, FaRegComment } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import PostCommentsModalCard from '../PostCommentsModal/PostCommentsModalCard';
import { useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction, savePostAction, unlikePostAction, unsavePostAction } from '../../Redux/Post/Action';
import { isPostLikedByUser, isPostSavedByUser } from '../../config/logics';
import { useNavigate } from 'react-router-dom';
const PostCard = ({post}) => {

    const [dropdown, setDropdown] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch=useDispatch();

    const {user}= useSelector(store=>store);

    const handleclick = () => {
        setDropdown(!dropdown);
    }

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const jwttoken=localStorage.getItem("token");

    const reqdata={
        token:jwttoken,
        postId:post?.id
    }

    const handleLike = () => {

        setIsLiked(true);
        dispatch(likePostAction(reqdata));
        
    }

    const handleunLike = () => {
        setIsLiked(false);
        dispatch(unlikePostAction(reqdata));
    }
    const handleSave = () => {
        setIsSaved(true);
        dispatch(savePostAction(reqdata));
    }

    const handleunSave = () => {
        setIsSaved(false);
        dispatch(unsavePostAction(reqdata));
    }


  

    useEffect(()=>{
        setIsLiked(isPostLikedByUser(post,user.reqUser.id));
        setIsSaved(isPostSavedByUser(user.reqUser,post.id))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[post.likedByUsers,user.reqUser])
    
    const navigate=useNavigate();
    const handleOpenCommentModal = () => {
        navigate(`/comments/${post.id}`);
        onOpen();
      };

    return (
        <div>
            <div className='border rounded-md w-full '>

                {/* // post account prof,name,loc---------------------------- */}

                <div className='flex justify-between items-center py-3 px-5 w-full'>



                    <div className='flex items-center'>
                        <div>
                            <img className='h-12 w-12 rounded-full'
                             src={ post.user.userimage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />

                        </div>

                        <div className='mx-2'>
                            <p className='font-semibold text-sm items-center'>{post.user.username}</p>
                            <p className='font-thin text-sm items-center'>{post.location}</p>

                        </div>
                    </div>

                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleclick} />
                        <div className='dropdown-content'>


                            {dropdown && <p className='bg-black text-white py-1 px-3 cursor-pointer rounded-md' >Delete</p>}
                        </div>


                    </div>

                </div>

                {/*post image  */}
                <div className='w-full flex justify-center'>

                    <img src={post.image} alt="" className='' />
                </div>

                {/* like share comment svave */}

                <div className='w-full flex justify-between items-center px-4 py-2'>
                    <div className='flex items-center space-x-2'>
                        {
                            isLiked ?
                                <FaHeart fill='red' onClick={handleunLike} className='text-2xl cursor-pointer' />
                                :
                                <FaRegHeart onClick={handleLike} className='text-2xl cursor-pointer' />
                        }

                        <FaRegComment onClick={handleOpenCommentModal} className='text-2xl cursor-pointer hover:opacity-50' />

                        <RiSendPlaneLine className='text-2xl cursor-pointer hover:opacity-50' />
                    </div>

                    <div >
                        {
                            isSaved ?
                                <FaBookmark onClick={handleunSave} className='text-2xl cursor-pointer ' />
                                :
                                <FaRegBookmark onClick={handleSave} className='text-2xl cursor-pointer' />
                        }
                    </div>
                </div>
                {/* likes count ,caption,comment  */}

                <div className='w-full p-2'>
                    <p className='font-semibold'>{post.likedByUsers?.length} likes</p>
                    <div className='w-full space-x-2'>
                        <span className='font-bold text-sm items-center'>{post.user.username}</span>
                        <span className=' text-sm items-center'>{post.caption}
                        </span>

                    </div>
                    <p className='font-thin cursor-pointer'>view all {post.comments?.length} comments</p>
                </div>

                {/* add a comment */}

                {/* <div className='flex w-full justify-between items-center px-2'>

                    <input  type='text'placeholder='Add a comment...' className='commentbox p-2' ></input>
                    <BsEmojiSmile className='text-xl'/>


                </div> */}


                


            </div>

                        {/* ///comment modal activate on view all comments */}
            
                    <PostCommentsModalCard
                        isSaved={isSaved}
                        isLiked={isLiked}
                        handleLike={handleLike}
                        handleunLike={handleunLike}
                        
                        handleSave={handleSave}
                        handleunSave={handleunSave}
                        onClose={onClose}
                        isOpen={isOpen}
                        
                        postData={post}

                    />

               
        </div>
    )
}

export default PostCard
