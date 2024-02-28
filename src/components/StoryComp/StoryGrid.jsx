import React, { useEffect } from 'react'
import StoryCircleUser from './StoryCircleUser'
import { useDispatch, useSelector } from 'react-redux';
import StoryCircle from './StoryCircle';
import { getFollowingUsersStoryAction, getReqUserStoryAction } from '../../Redux/Story/Action';

const StoryGrid = () => {

    const {user}=useSelector(store=>store);

    const dispatch=useDispatch();
    const jwttoken = localStorage.getItem("token");


    const {story}=useSelector(store=>store);

  return (
    <div className='story-div flex space-x-3 border p-4 rounded-md justify-start w-full mx-auto '>
    {

        <StoryCircleUser key={"user-curr"} />
    }
    {
      console.log(story)
    }

    {
         story.foll_stories?.map((item,i) =>
            <StoryCircle key={i}  storyitem={item} />
        )

    }
</div>
  )
}

export default StoryGrid
