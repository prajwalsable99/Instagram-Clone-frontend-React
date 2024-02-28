import React from 'react'
import './ReqUserPostCard.css'
const ReqUserPostCard = ({post}) => {
    return (
       

            <div

                className=" flex items-center justify-center w-full h-full  relative overflow-hidden group  cursor-pointer"
            >
                <img
                    src={post.image}
                    alt={'Img'}
                    className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:brightness-50 "
                />
            </div>

        
    )
}

export default ReqUserPostCard
