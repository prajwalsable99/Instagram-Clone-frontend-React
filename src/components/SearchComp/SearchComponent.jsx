import React, { } from 'react'
import SearchUserRes from './SearchUserRes'
import { useDispatch, useSelector } from 'react-redux';
import { searchUserAction } from '../../Redux/User/Action';

const SearchComponent = () => {


  const dispatch = useDispatch();
  const jwttoken = localStorage.getItem("token");
  const { user } = useSelector((store) => store);

  const handlequery=(e)=>{
    const reqdata={
      token:jwttoken,
      query:e.target.value
    }
    dispatch(searchUserAction(reqdata))
  }

 
  return (
    <div>
      <div className='border-l flex  center flex-col  h-full p-2 mt-3'>
        <h1 className='text-3xl font-semibold'>Search</h1>
        <input
         type="text"
          placeholder='search'
       
          onChange={handlequery}
           className="rounded-md bg-gray-200 px-4 py-2 focus:outline-none mt-5 " />

        <div className='mt-5'>

          {
            user.searchUser?.map((item,i) => (

              <SearchUserRes key={i} user={item} />
            )

            )
          }
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
