import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { uploadToCloudinary } from '../../config/UploadtoCloud';
import { useDispatch } from 'react-redux';
import { addStoryAction } from '../../Redux/Story/Action';

const CreateStory = ({ isOpen, onClose }) => {
    const [story, setStory] = useState(null);
    const dispatch=useDispatch();
    const jwttoken=localStorage.getItem("token");

    const handleSubmit=async(e)=>{
        e.preventDefault();

       
        const data={}

        if(story!==null){
            const imgurl=await uploadToCloudinary(story);
            data.storyimage=imgurl;
        }

        const reqdata={
            token:jwttoken,
            data:data

        }
        dispatch(addStoryAction(reqdata));
        
       doOnclose()
    
        
        
    }

    const doOnclose=()=>{
        setStory(null)
        onClose()
    }

    return (
        <div>
            <Modal size={"xl"} isOpen={isOpen} onClose={doOnclose}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalHeader>"profiile"</ModalHeader> */}
                    <ModalBody>
                        <div className='w-full  flex flex-col justify-center items-center '>
                            <img
                                src={
                                    (story && URL.createObjectURL(story)) ||

                                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                }

                                className='w-48 h-48 '
                                alt="" />

                        </div>

                        <div>
                        <form onSubmit={handleSubmit} className="w-2/3 w-full mx-auto mt-8">
                        <div className="mb-4">
                            <label htmlFor="profilePhoto" className="block mb-1"> Add story</label>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="story"
                                accept="image/*"
                                onChange={(e) => setStory(e.target.files[0])}
                                className="hidden"
                            />
                            {/* Button to trigger file input */}
                            <button
                                type="button"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                                onClick={() => document.getElementById('story').click()}
                            >
                                Choose Photo
                            </button>
                        </div>
                      

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                    </form>
                        </div>



                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default CreateStory
