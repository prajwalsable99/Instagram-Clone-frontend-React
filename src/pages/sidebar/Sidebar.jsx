import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { menu } from './sidebarConfig';
import { useNavigate } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../../components/PostComp/CreatePostModal';
import SearchComponent from '../../components/SearchComp/SearchComponent';
const Sidebar = () => {

   const { isOpen, onOpen, onClose } = useDisclosure()
   const [ctab, setCtab] = useState('Home');

   const navigate = useNavigate();

   const [isSearchTab, setIsSearchTab] = useState(false);


   const handleTabCLick = (title) => {

      setCtab(title)

      if (title === "Profile") {
         navigate("/myprofile")
      } else if (title === "Home") {
         navigate("/")
      } else if (title === "Create") {
         onOpen();
      }

      // /for serach option

      if (title === "Search") {
         setIsSearchTab(true)
      } else {
         setIsSearchTab(false)
      }


   }
   return (
      <div className='sticky top-0 h-[100vh] flex'>

         <div className='flex  center flex-col justify-between h-full '>

            <div>

               {
                  !isSearchTab ? 
                  <div className='pt-10 h-32'>
                     <img src="https://i.imgur.com/zqpwkLQ.png" className='' alt="Instagram" />
                  </div>
                  :
                  <div className='pt-10 h-32'>
                     <FaInstagram className='mr-5 text-4xl font-bold'/>
                  </div>
                  
               }

               <div className='mt-10'>
                  {
                     menu.map((item) => (
                        <div key={item.title} onClick={() => { handleTabCLick(item.title) }} className='mb-7 cursor-pointer flex items-center text-xl'>
                           {item.title === ctab ? item.activeicon : item.icon}


                           {!isSearchTab && <p className={`${item.title === ctab ? "font-bold" : "font-semibold"}`} > {item.title}</p>}
                        </div>
                     ))

                  }

               </div>

            </div>

            {!isSearchTab &&
               <div className='pb-10 flex items-center cursor-pointer'>
                  <RxHamburgerMenu className="mr-5 text-4xl" />
                  <p className='ml-3 text-xl'>More</p>

               </div>

            }

         </div>

         {
            isSearchTab&& 
           <SearchComponent/>
         }

         {/* //modal to creat post */}
         <CreatePostModal onClose={onClose} isOpen={isOpen} />
      </div>
   )
}

export default Sidebar
