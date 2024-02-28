import { useDisclosure } from '@chakra-ui/react';
import React from 'react'
import SearchedUserProfile from './SearchedUserProfile';

const SearchUserRes = ({user}) => {


    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className='flex items-center my-2 cursor-pointer ' onClick={onOpen}>
            <div>
                <img className='h-8 w-8 rounded-full mr-4'   src={ user.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />
 
                

            </div>

            <div className='flex flex-col'>
                <div>
                    <p className='font-semibold text-sm '>{user.username}</p>
                    <p className='text-sm font-thin '>{user.name}</p>
                </div>

                


            </div>

            <SearchedUserProfile onOpen={onOpen}  isOpen={isOpen} onClose={onClose} userdet={user} />
        </div>
    )
}

export default SearchUserRes
