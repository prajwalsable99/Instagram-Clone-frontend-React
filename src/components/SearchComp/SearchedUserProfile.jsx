import {  Modal, ModalBody, ModalContent,  ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  isFollowingFunc } from '../../config/logics';
import { followUserAction, unfollowUserAction } from '../../Redux/User/Action';

const SearchedUserProfile = ({ isOpen, onClose, userdet ,onOpen}) => {

    const reqUser=useSelector(store=>store.user.reqUser);
    const dispatch =useDispatch();
    const jwttoken=localStorage.getItem("token");
    const [isfollowing,setisFollowing]=useState( isFollowingFunc(reqUser,userdet));

    useEffect(() => {
        setisFollowing(isFollowingFunc(reqUser, userdet));
    }, [reqUser, userdet]);

    

    const handleFollow=()=>{
        const reqdata={
            token :jwttoken,
            userId:userdet.id
        }
        dispatch(followUserAction(reqdata));
        setisFollowing(true);


    }

    const handleUnfollow=()=>{
        const reqdata={
            token :jwttoken,
            userId:userdet.id
        }
        dispatch(unfollowUserAction(reqdata));
        setisFollowing(false);
        
    }
   

    
    return (
        <div>
            <Modal size={"2xl"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>"profiile"</ModalHeader> */}
                    <ModalBody>
                        <div className='p-4 border'>
                            <div className='flex items-center  space-x-20 my-2  p-4'>
                                {/* profile image */}
                                <div>
                                    <img src={userdet?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} className='w-32 h-32 rounded-full' alt="profile img" />
                                </div>
                                {/* username and name */}
                                <div>
                                    <p className='font-bold'>{userdet?.username}</p>
                                    <p className='font-thin'>{userdet?.name}</p>

                                </div>


                            </div>

                            <div className='p-3 '>
                                <p className='font-thin text-sm'>{userdet?.bio}</p>
                            </div>

                            <div className='p-3'>
                              {
                                isfollowing?
                                <div className='px-4 py-2 font-thin '>
                                <p className='pb-2'>already following </p>
                                <button 
                                onClick={handleUnfollow}
                                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600' >Unfollow user</button>

                                </div>
                                :
                                <button 
                                onClick={handleFollow}
                                className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600' >Follow user</button>
                              }

                                
                            </div>


                        </div>



                    </ModalBody>

                </ModalContent>
            </Modal>
        </div >
    )
}

export default SearchedUserProfile
