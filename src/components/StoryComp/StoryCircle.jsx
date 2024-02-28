import React, { useState } from 'react'
import StoryRect from './StoryRect'

const StoryCircle = ({storyitem}) => {

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);


  return (
    <div className='cursor-pointer flex flex-col items-center'>
      <div className='w-16 h-16 border-2 border-pink-500 rounded-full overflow-hidden'>
        {
          storyitem
          &&
          <img
          src={ storyitem[0].user.userimage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
          alt="User Profile"
          className='w-full h-full object-cover'
          onClick={onOpen}
        />}
      </div>
      <p>{storyitem[0].user.username.substring(0,9) }..</p>
      
      <StoryRect durationInSeconds={15} stories={storyitem} isOpen={isOpen} onClose={onClose} />
    </div>

  )
}

export default StoryCircle

