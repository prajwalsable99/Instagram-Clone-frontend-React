import {  Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const UserfollList = ({ isOpen, onOpen, onClose, flist,flistname }) => {
    return (
        <div>
            
            <Modal size={"sm"} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{flistname}</ModalHeader>
                    <ModalBody>
                        
                            {flist?.map(user => (
                                
                                    <div key={user.id}  className='w-full flex items-center my-2 cursor-pointer '>
                                        <div>
                                            <img className='h-8 w-8 rounded-full mr-4' src={user.userimage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />



                                        </div>

                                        <div className='flex flex-col'>
                                            <div>
                                                <p className='font-semibold text-sm '>{user.username}</p>
                                                <p className='text-sm font-thin '>{user.name}</p>
                                            </div>




                                        </div>
                                    </div>
                               
                            ))}
                       
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default UserfollList
