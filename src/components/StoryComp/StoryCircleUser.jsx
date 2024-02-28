import React, { useEffect, useState } from 'react'
import StoryRect from './StoryRect'
import { MdAddCircle } from "react-icons/md";
import { useDisclosure } from '@chakra-ui/react';
import CreateStory from './CreateStory';
import { useDispatch, useSelector } from 'react-redux';
import { getReqUserStoryAction } from '../../Redux/Story/Action';
const StoryCircleUser = () => {


  const jwttoken = localStorage.getItem("token");
  const dispatch= useDispatch();
 
 

  // const [story, setStory] = useState([]);
    // const [story, setStory] = useState([]);const {story}=useSelector(store=>store);





  //story creaet story
  const { isOpen, onOpen, onClose } = useDisclosure();



  // story view modal
  const [isOpen_, setIsOpen] = useState(false);
  const onClose_ = () => setIsOpen(false);
  const onOpen_ = () => {
    setIsOpen(true);

  }


  const { user,story } = useSelector(store => store)

  

  
  

  const openCreateModal = () => {
    onOpen();


  }


  return (

    <div className='cursor-pointer flex flex-col items-center'>
      <div className='w-16 h-16 border-2 border-pink-500 rounded-full overflow-hidden'>
        <img
          src={user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
          alt="User Profile"
          className='w-full h-full object-cover opacity-50 '
          onClick={onOpen_}
        />
      </div>
      <MdAddCircle className='mt-2' onClick={openCreateModal} />
      {/* <p>{user?.username.substring(0, 9)}..</p> */}
      <StoryRect durationInSeconds={15} stories={story.curr_story} isOpen={isOpen_} onClose={onClose_} />

      <CreateStory isOpen={isOpen} onClose={onClose}  />
    </div>

  )
}

export default StoryCircleUser

