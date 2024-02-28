import React from 'react'
import SuggestionCard from './SuggestionCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HomeRight = () => {
  const navigate=useNavigate();

  const { user } = useSelector((store) => store);
  return (
    <div className=']'>
      <div>
        <div className='flex justify-between p-2'>

          <div className='flex  space-x-4'>
            <img src={ user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}className='w-12 h-12 rounded-full' alt="" />
             

            <div>
              <p className='font-semi-bold text-sm'>{user.reqUser?.username || "username"}</p>
              <p className='font-thin text-sm'>{user.reqUser?.name || "name"}</p>
            </div>

          </div>

          <div className='pr-2 flex flex-col justify-center '>
            <p 
             onClick={

              ()=>{
                localStorage.removeItem("token");
                navigate("/signin")

              }
            } 

            className='text-blue-400 font-bold cursor-pointer' >Switch</p>
          </div>

        </div>

        <div className='flex justify-between mt-2 px-4 pt-2'>
            <p>Suggested for you</p>
            <p className='font-bold'>See all</p>
        </div>

        <div className='p-5'>
         {/* {
           [1,2,3,4,5,6,7].map((item)=>(
            <SuggestionCard key={item}/>
           ))
         } */}
        <hr />
        <p className='font-thin mt-2'> No suggestions technology at the moment</p>

        </div>

      </div>
    </div>
  )
}

export default HomeRight 
