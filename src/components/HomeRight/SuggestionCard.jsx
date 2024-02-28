import React from 'react'

const SuggestionCard = () => {
    return (
        <div>

            <div className='flex justify-between p-2'>

                <div className='flex  space-x-4'>
                    <img src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg" className='w-12 h-12 rounded-full' alt="" />
                    <div>
                        <p className='font-semi-bold text-sm'>user_123</p>
                        <p className='font-thin text-sm'>Followed by user456</p>
                    </div>

                </div>

                <div className='pr-2 flex flex-col justify-center '>
                    <p className='text-blue-400 font-bold cursor-pointer' >Follow</p>
                </div>

            </div>

        </div>
    )
}

export default SuggestionCard
