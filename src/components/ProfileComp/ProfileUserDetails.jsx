import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { CiCircleMore } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserfollList from './UserfollList';
import { useState } from 'react';
const ProfileUserDetails = ({ user }) => {


    const navigate = useNavigate();
    const { post } = useSelector((store) => store);

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isFF, setIsFF] = useState(null);
    const [FFN, setFFN] = useState('');

    const handlefollowing = (e) => {
        setIsFF(user.reqUser?.following)
        onOpen()
        setFFN('following')

    }

    const handlefollowers = (e) => {
        setIsFF(user.reqUser?.followers)
        onOpen()
        setFFN('followers')

    }


    return (
        <div className='py-10'>
            {/* details */}
            <div className='flex items-center  space-x-20'>
                <div>
                    <img src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} className='w-32 h-32 rounded-full' alt="profile img" />
                </div>

                <div className='space-y-5'>

                    <div className='flex items-center space-x-10'>
                        <p className='font-bold'>{user.reqUser?.username}</p>
                        <button className='bg-gray-100 rounded-md p-2'

                            onClick={() => navigate("/account/edit")}
                        >Edit profile</button>
                        <CiCircleMore className='text-3xl' />
                    </div>

                    <div className='flex items-center space-x-10'>
                        <div>
                            <span className='font-semibold mr-1'> {post?.reqUserPost?.length || 0}</span>
                            <span >posts</span>
                        </div>
                        <div onClick={handlefollowers} className='cursor-pointer'>
                            <span className='font-semibold mr-1'>{user.reqUser?.followers.length} </span>
                            <span>followers</span>
                        </div>
                        <div   onClick={handlefollowing} className='cursor-pointer'>
                            <span className='font-semibold mr-1'>{user.reqUser?.following.length} </span>
                            <span>following</span>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold'>{user.reqUser?.name}</p>
                        <p className='font-thin text-sm'>{
                            user.reqUser?.bio
                        }

                        </p>
                    </div>


                </div>
            </div>

            <UserfollList flist={isFF} flistname={FFN} isOpen={isOpen} onClose={onClose} />



        </div>
    )
}

export default ProfileUserDetails
