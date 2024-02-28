import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { FaPhotoVideo } from 'react-icons/fa';
import { FaRegSmile } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { createPostAction } from '../../Redux/Post/Action';
import { uploadToCloudinary } from '../../config/UploadtoCloud';
const CreatePostModal = ({ onClose, isOpen }) => {

    const jwttoken =localStorage.getItem("token")

    const dispatch=useDispatch();
   
    const user= useSelector(store=>store.user);
    const [isDragOver, setIsDragOver] = useState(false);
    const [droppedFile, setDroppedFile] = useState(null);

    const [caption, setCaption] = useState('');
    const [loc, setloc] = useState('');
    const [imageurl, setImageurl] = useState('');
    
    const handleCaption = (event) => {
        setCaption(event.target.value);
      };

      const handleloc = (event) => {
        setloc(event.target.value);
      };


    const handleOnDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        setIsDragOver(true);
    };

    const handleOnDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };

    const handleOnDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            setDroppedFile(file);
        } else {
            setDroppedFile(null)
        }
        console.log("file dropped :",file)
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            setDroppedFile(file);
        } else {
            setDroppedFile(null)
        }
        console.log("file dropped :",file)

    }

    const doOnClose=()=>{
        setDroppedFile(null);
        setCaption('')
        setloc('')
        onClose()
        
    }


   

    const handleCreatePost=async(e)=>{
            // console.log(caption);
            // console.log(loc);
            // console.log(droppedFile)

            if(droppedFile!==null){
                const imgurl=await uploadToCloudinary(droppedFile);
                setImageurl(imageurl);

                const reqdata={

                    token : jwttoken,
                    data:{
                        image:imgurl,
                        caption:caption,
                        location:loc
                    }

                }
                
                     dispatch(createPostAction(reqdata))
                     doOnClose();
            }
        

       

      
    }





    return (
        <Modal size={'5xl'} onClose={doOnClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>

                    {/* //title */}
                    <div className='w-full items-center flex justify-between border-b'>
                        <p className='font-bold'>Create New Post</p>
                        <Button
                         onClick={handleCreatePost}
                        colorScheme='blue' variant={'ghost'}>
                            Share
                        </Button>
                    </div>

                    {/*  */}
                    {/*  */}

                    <div className='w-full h-[75vh] flex border-b'>

                        {/* // to upload or uploaded */}
                        {
                            !droppedFile ?
                                <div className={`${isDragOver ? 'opacity-50' : ''} w-1/2 border flex flex-col justify-center items-center `}
                                    onDragOver={handleOnDragOver} onDragLeave={handleOnDragLeave} onDrop={handleOnDrop}
                                >
                                    <div>
                                        <FaPhotoVideo size={'100'} />
                                    </div>
                                    <p className='font-thin text-lg'>Drag photos and videos here</p>

                                    <label onChange={handleFileChange} className='px-2 text-white py-1 bg-blue-500 border rounded-md ' htmlFor="img-up">Select From Computer</label>
                                    <input onChange={handleFileChange} className='hidden' type="file" id='img-up' accept="image/*,video/*" />




                                </div>
                                :
                                <div className=' w-1/2 flex flex-col justify-center items-center  bg-black border p-4'>
                                    <img className='w-full max-h-full '
                                        src={URL.createObjectURL(droppedFile)}
                                        alt="Selected File"

                                    />
                                </div>

                        }




                        <div className='w-1/2 border px-4 py-2'>
                            {/* // owner info */}
                            <div className='flex items-center px-2 pt-2 space-x-3 '>
                                <div className=''>
                                    <img className='h-9 w-9 rounded-full' 
                                    src={ user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" }alt="" />

                                </div>

                                <div className='mx-2'>
                                    <p className='font-semibold text-sm items-center'>{user.reqUser?.username}</p>


                                </div>


                            </div>
                            {/* caption */}
                            <textarea placeholder='write a caption' onChange={handleCaption}  name="caption" id="caption" className='outline-none px w-full my-4 p-2 scollable h-[30vh] border-b'  ></textarea>
                            <div className='flex justify-between px-4'>
                                <FaRegSmile/>
                                <p className='font thin'>{caption.length}</p>
                            </div>
                            
                             <div className='flex w-full justify-between items-center p-2 border'>

                                <input type='text' onChange={handleloc} name='loc' id='loc' placeholder='Add location' className='commentbox ' ></input>
                                <CiLocationOn className='text-2xl mr-4' />


                            </div>

                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CreatePostModal;
