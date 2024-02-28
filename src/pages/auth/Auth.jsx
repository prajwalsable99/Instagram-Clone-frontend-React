import React from 'react'
import './Auth.css'
import sigin_img from '../../assets/images/signin_img.jpg';
import Signin from '../../components/Rester/Signin';
import { useLocation } from 'react-router-dom';
import Signup from '../../components/Rester/Signup';
const Auth = () => {

  const location = useLocation();
  return (
    <div className="">

      {
        location.pathname === "/signin" &&
        (
          <div className='flex h-screen bg-gray-100 justify-center items-center '>

            <div className='flex w-1/2 h-4/6 space-x-10'>
              <img src={sigin_img} className='' alt="" />

              <Signin />

            </div>

          </div>
        )

      }

      {

        location.pathname === "/signup" &&
        (
          <div className='flex h-screen bg-gray-100 justify-center items-center '>

          <div className='flex w-1/4 h-4/6 space-x-10'>
          

            <Signup />

          </div>

        </div>
          
        )


      }


    </div>


  );
}


export default Auth
