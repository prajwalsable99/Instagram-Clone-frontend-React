import React, { useEffect, useState } from 'react'
import './PostCommentsModalCard.css'
import { BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import {
    Modal,
    ModalOverlay,
    ModalContent,

    ModalBody,

} from '@chakra-ui/react';
import CommentCard from './CommentCard';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { createCommentAction } from '../../Redux/Comment/Action';
import { findPostByPostIdAction } from '../../Redux/Post/Action';
import { useNavigate, useParams } from 'react-router-dom';
import { timeDiff } from '../../config/logics';
const PostCommentsModalCard = (props) => {

    const {  isLiked, isSaved, handleLike,handleunLike,handleunSave, handleSave, isOpen, onClose ,postData} = props;
    const navigate=useNavigate();

    const jwttoken = localStorage.getItem("token");
    const dispatch = useDispatch();
    const {post,comment}=useSelector(store=>store);
  

    const [commentcontent, setCommentContent] = useState("");
    const { postId } = useParams();
    const reqdata = {
        postId: postId,
        token: jwttoken,
        data: {
            content: commentcontent
        }
    }
    const rdata = {
        token: jwttoken,
        postId: postId

    }

    
 

    useEffect(() => {

        // console.log(post)

      

        if (postId) {
            dispatch(findPostByPostIdAction(rdata));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId,comment?.createdComment ])

    const handleClose=()=>{
        onClose()
        navigate("/")
      }

    return (
        <Modal isOpen={isOpen} onClose={handleClose} isCentered size={"5xl"} closeOnEsc={true} >
            <ModalOverlay />
            <ModalContent>

                <ModalBody>
                    <div className='flex h-[75vh]'>
                        {/* post */}
                        <div className='w-[50%] flex flex-col justify-center bg-black'>
                            <img src={postData.image} alt="" className='w-full max-h-full' />
                        </div>

                        <div className='w-[50%] ml-3'>

                            {/* // post owner info */}

                            <div className='flex justify-between items-center py-3 px-5 w-full border '>



                                <div className='flex items-center'>
                                    <div>
                                        <img className='h-12 w-12 rounded-full' src={ postData.user.userimage ||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" }alt="" />

                                    </div>

                                    <div className='mx-2'>
                                        <p className='font-semibold text-sm items-center'>{postData.user.username}</p>


                                    </div>
                                </div>

                                <div className='dropdown'>
                                    <BsThreeDots className='dots' />
                                    <div className='dropdown-content'>



                                    </div>


                                </div>

                            </div>

                            {/* //comments  */}


                            <div className="h-[60%] overflow-hidden" style={{ overflowY: 'scroll', scrollbarWidth: 'thin' }}>
                                {
                                    post.singlePost?.comments.map((item, index) => (
                                        <CommentCard key={index}  comment={item}/>
                                    ))
                                }
                            </div>

                            {/* like share comment svave */}

                            <div className='w-full flex justify-between items-center px-4 py-2 border-t' >
                                <div className='flex items-center space-x-2'>
                                    {
                                        isLiked ?
                                            <FaHeart fill='red' onClick={handleunLike} className='text-2xl cursor-pointer' />
                                            :
                                            <FaRegHeart onClick={handleLike} className='text-2xl cursor-pointer' />
                                    }

                                    <FaRegComment className='text-2xl cursor-pointer hover:opacity-50' />

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

                            <div className='w-full px-4 py-2'>
                                <p className='font-semibold'>{post.singlePost?.likedByUsers.length} likes</p>

                                <p className='font-thin text-sm cursor-pointer'>{timeDiff(post.singlePost?.createdat)}</p>
                            </div>

                            {/* add a comment */}

                            <div className='flex w-full justify-between items-center px-2'>

                                <BsEmojiSmile className='text-2xl mr-4' />
                                <input
                                    onChange={(e) => { setCommentContent(e.target.value) }}
                                    onKeyPress={
                                        (e) => {
                                            if (e.key === "Enter") {

                                                dispatch(createCommentAction(reqdata))
                                                setCommentContent("")
                                            }


                                        }
                                    }
                                    value={commentcontent}

                                    type='text'
                                    placeholder='Add a comment...'
                                    className='commentbox ' ></input>


                            </div>


                        </div>
                    </div>
                </ModalBody>

            </ModalContent>
        </Modal>
    )
}

export default PostCommentsModalCard
