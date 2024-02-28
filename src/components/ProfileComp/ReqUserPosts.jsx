import React, { useEffect, useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiBookMarkLine, RiVideoAddLine } from 'react-icons/ri'
import ReqUserPostCard from './ReqUserPostCard';
import { findReqUserPostsAction } from '../../Redux/Post/Action';
import { useDispatch, useSelector } from 'react-redux';


const ReqUserPosts = ({user}) => {

    const [activeTab,setactiveTab]=useState("POSTS");
    const jwttoken = localStorage.getItem ("token");
    const dispatch = useDispatch();
    const { post} = useSelector((store) => store);

      useEffect(() => {
        if(user.reqUser?.id){
      const data = {
        token: jwttoken,
        userId: user.reqUser?.id,
      };
      dispatch(findReqUserPostsAction(data));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user,post.createdPost]);
  


    const tabs= [

        {tabname:"POSTS",icon:<AiOutlineTable/>},
        {tabname:"REELS",icon:<RiVideoAddLine/>},
        {tabname:"SAVED",icon:<RiBookMarkLine/>},
        {tabname:"TAGGED",icon:<AiOutlineUser/>},

    ]
  return (
    <div>
      

      <div className='flex items-center space-x-20 justify-center   border-t relative mb-3'>
        {
            tabs.map((item)=>(
                <div key={item.tabname} className={`${item.tabname===activeTab?"border-t border-black":"opacity-50"} ' flex items-center cursor-pointer ' `} onClick={()=>{setactiveTab(item.tabname)}}
                    
                >
                    {item.icon}
                    <p className='mx-2'>{item.tabname}</p>
                </div>
            ))
        }
      </div>
      {
        // console.log(user)
        
      }

      <div className="grid grid-cols-3 gap-1">
      {post.reqUserPost?.length > 0 &&
            activeTab==="POSTS"? post.reqUserPost?.map((item, index) => (
              <ReqUserPostCard post={item} key={index} />
            )):activeTab==="SAVED"?user.reqUser?.savedPosts?.map((item, index) => (
              <ReqUserPostCard post={item} key={index} />
            )):
            ""}
    </div>

    
    </div>
  )
}

export default ReqUserPosts
