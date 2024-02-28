import React, { useEffect } from 'react'
import Sidebar from '../../pages/sidebar/Sidebar'

import Homepage from '../../pages/homepage/HomePage'
import { Route, Routes, useLocation } from 'react-router-dom'
import Profile from '../../pages/profilepage/Profile'
import Auth from '../../pages/auth/Auth'
import HomePage from '../../pages/homepage/HomePage'
import EditAccountDetails from '../EditAccount/EditAccountDetails'

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const token = localStorage.getItem('token');
      if (!token && location.pathname !== '/signup' && location.pathname !== '/signin') {
        // Redirect to sign-in page if token doesn't exist
        window.location.href = '/signin'; // Change '/signin' to your sign-in page URL
      }
    }
  }, [location.pathname]);





  return (
    <div>


  { (location.pathname !== "/signup" && location.pathname !== "/signin")&&
        (
          <div className='flex'>

          <div className='w-[27%] pl-10 border-r border-slate-400'>
  
            <Sidebar />
          </div>
  
          <div className='w-full'>
            <Routes>
              <Route path='/' element={<Homepage />} ></Route>
              <Route path="/comments/:postId" element={<HomePage />}></Route>
              <Route path='/myprofile' element={<Profile />} ></Route>
              <Route path='/account/edit' element={<EditAccountDetails />} ></Route>
            </Routes>
          </div>
  
  
        </div>
        )}


      {(location.pathname === "/signup" || location.pathname === "/signin") &&

        (<div>
          <Routes>
            <Route path='/signup' element={<Auth />} ></Route>
            <Route path='/signin' element={<Auth />} ></Route>
          </Routes>
        </div>
        )
        }

     
      

     



    </div>
  )
}

export default Router
