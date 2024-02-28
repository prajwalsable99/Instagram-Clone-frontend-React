import React, { useEffect } from 'react'
import ProfileUserDetails from '../../components/ProfileComp/ProfileUserDetails'
import ReqUserPosts from '../../components/ProfileComp/ReqUserPosts'
import { useDispatch, useSelector } from 'react-redux';
import { findReqUserPostsAction } from '../../Redux/Post/Action';
import { getUserProfileAction } from '../../Redux/User/Action';

const Profile = () => {

  

  const dispatch = useDispatch();
  const { post,user} = useSelector((store) => store);
  const jwttoken = localStorage.getItem ("token");



  useEffect(()=>{
    
    dispatch(getUserProfileAction(jwttoken))
  
  },[])





  return (
    <div className='px-20'>
      <div className=''>
        <ProfileUserDetails user={user} />
      </div>
      <div className=''>
        <ReqUserPosts user={user}  />
      </div>
    </div>
  )
}

export default Profile
