/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import StoryCircle from '../../components/StoryComp/StoryCircle'
import HomeRight from '../../components/HomeRight/HomeRight'
import PostCard from '../../components/PostComp/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { findUserPostAction } from '../../Redux/Post/Action'
import { getUserProfileAction } from '../../Redux/User/Action'
import StoryCircleUser from '../../components/StoryComp/StoryCircleUser'
import StoryGrid from '../../components/StoryComp/StoryGrid'
import { getFollowingUsersStoryAction, getReqUserStoryAction } from '../../Redux/Story/Action'
// import { useNavigate } from 'react-router-dom'


const HomePage = () => {

   


    const [userIds,setUserIds]=useState([]);

    const {user,post}=useSelector(store=>store);

    
    
    const jwttoken =localStorage.getItem("token");

    const reqUser = useSelector(store=>store.user.reqUser);
    const usersPost = useSelector(store=>store.post.usersPost);

    

    const dispatch=useDispatch();
    
    // const navigate=useNavigate();

 


    useEffect(()=>{
        dispatch( getUserProfileAction(jwttoken));
     },[jwttoken])

   

    useEffect(()=>{

        if(reqUser){
            const newIds=user.reqUser?.following.map((user)=>user.id);
            setUserIds([...newIds,reqUser?.id]);

        }

       

    },[reqUser])


    

    useEffect(()=>{

        const reqdata={
            token:jwttoken,
            
            userIds:userIds.join(",")
        }
      
        if(userIds.length>0){
            dispatch(findUserPostAction(reqdata));

          }

          const stodata = {
            token: jwttoken,
            userId: user.reqUser?.id
          }
  
         if(user.reqUser?.id){
          dispatch(getReqUserStoryAction(stodata))
          dispatch(getFollowingUsersStoryAction(stodata))
  
         }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userIds,post.createdPost,post.deletedPost])

  

    


    return (

        <div className='flex  justify-center w-[100%] mt-10'>

            {/* /// home left --------------------------------------------------------------------*/}
            <div className='px-10 w-[45%] '>

               <StoryGrid/>

                <div className='space-y-10 w-full mt-5 '>
                    {/* posts */}
                    {
                       usersPost?.length>0  && post.usersPost?.map((item) => (
                            <PostCard key={item.id} post={item} />
                        ))
                    }
                </div>


            </div>

            {/* /// home right----------------------------------------------------------------------------------------- */}

            <div className='w-[30%]'>

                <HomeRight />
            </div>

        </div>


    )
}

export default HomePage
