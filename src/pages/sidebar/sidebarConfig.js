import { AiFillHome ,AiOutlineHome , AiOutlineSearch , AiOutlineCompass , AiFillCompass,AiOutlineMessage,AiFillMessage,AiFillHeart,AiOutlineHeart, AiFillPlusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import { RiVideoLine } from "react-icons/ri";
import { RiVideoFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
export const menu= [

    {
        title:"Home",
        icon:<AiOutlineHome className="mr-5 text-3xl"/>,
        activeicon: <AiFillHome className="mr-5 text-3xl"/>
    },
    
    {
        title:"Search",
        icon:<AiOutlineSearch className="mr-5 text-3xl"/>,
        activeicon: <AiOutlineSearch className="mr-5 text-3xl"/>
    },
    
    {
        title:"Explore",
        icon:<AiOutlineCompass className="mr-5 text-3xl"/>,
        activeicon: <AiFillCompass className="mr-5 text-3xl"/>
    },
    
    {
        title:"Reels",
        icon:<RiVideoLine className="mr-5 text-3xl"/>,
        activeicon: <RiVideoFill className="mr-5 text-3xl"/>
    },
    
    {
        title:"Messages",
        icon:<AiOutlineMessage className="mr-5 text-3xl"  />,
        activeicon:<AiFillMessage className="mr-5 text-3xl"/>
    },
    
    {
        title:"Notifications",
        icon:<AiOutlineHeart className="mr-5 text-3xl"/>,
        activeicon: <AiFillHeart className="mr-5 text-3xl"/>
    },
    
    {
        title:"Create",
        icon:<AiOutlinePlusCircle className="mr-5 text-3xl"/>,
        activeicon: <AiFillPlusCircle className="mr-5 text-3xl"/>
    },
    
    {
        title:"Profile",
        icon:<CgProfile className="mr-5 text-3xl"/>,
        activeicon: <CgProfile className="mr-5 text-3xl"/>
    },

]