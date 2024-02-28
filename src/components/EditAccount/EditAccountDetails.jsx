import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadToCloudinary } from '../../config/UploadtoCloud';
import { getUserProfileAction, updateUserAction } from '../../Redux/User/Action';
import { useToast } from '@chakra-ui/react';

const EditAccountDetails = () => {
    const toast = useToast();
    const { user } = useSelector((store) => store);

    const dispatch=useDispatch();

    const jwttoken=localStorage.getItem("token");

    const [mobileNumber, setMobileNumber] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('NA');
    const [profilePhoto, setProfilePhoto] = useState(null);

    useEffect(() => {
        dispatch(getUserProfileAction(jwttoken));
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [jwttoken]);

     
    // Function to handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();
        // Perform form submission logic here
        const reqdata={
            id:user.reqUser?.id,
        }

        if(mobileNumber!==''){
            reqdata.mobile=mobileNumber;
        }
        if(bio!==''){
            reqdata.bio=bio;
        }
        if(gender!=="NA"){
            reqdata.gender=gender
        }
        if(profilePhoto!==null){
            const imgurl=await uploadToCloudinary(profilePhoto);
            reqdata.image=imgurl;
        }

        const data={
            token:jwttoken,
            data:reqdata
        }

        // console.log(reqdata);

        dispatch(updateUserAction(data));
        // console.log("---------------------------")
        setBio('')
        setGender("NA")
        setMobileNumber('')
        setProfilePhoto(null)
        toast({
            title: "User Profile Updated "  ,
            status: "success",
            duration: 5000, // Toast will be visible for 5 seconds
            isClosable: true,
        });


      


    };

    return (
        <div className='w-full p-4 '>
            <div className='w-full h-[75vh] flex  rounded border'>
                <div className='w-1/3  flex flex-col justify-center items-center '>
                    <img
                        src={
                            (profilePhoto && URL.createObjectURL(profilePhoto)) ||
                            user.reqUser?.image ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        }

                        className='w-48 h-48 rounded-full'
                        alt="" />

                </div>

                <div className='w-full   flex flex-col justify-center items-center'>
                    <form onSubmit={handleSubmit} className="w-2/3 w-full mx-auto mt-8">
                        <div className="mb-4">
                            <label htmlFor="profilePhoto" className="block mb-1"> Update Profile Photo:</label>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="profilePhoto"
                                accept="image/*"
                                onChange={(e) => setProfilePhoto(e.target.files[0])}
                                className="hidden"
                            />
                            {/* Button to trigger file input */}
                            <button
                                type="button"
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                                onClick={() => document.getElementById('profilePhoto').click()}
                            >
                                Choose Photo
                            </button>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobileNumber" className="block mb-1">Mobile Number:</label>
                            <input
                                type="text"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bio" className="block mb-1">Bio:</label>
                            <textarea
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block mb-1">Gender:</label>
                            <select
                                id="gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            >
                                <option value="NA">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditAccountDetails
