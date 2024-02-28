import React, { useEffect, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const StoryRect = ({ isOpen, onClose }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const { story } = useSelector(store => store)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            // Reset progress when a story is completed
            setCurrentIndex((prevIndex) => (prevIndex + 1) % story.curr_story?.length);
            return 0;
          }
          return prevProgress + (100 / (5000/ 1000 * 10)); // Adjusted for better visual effect
        });
      }, 100); // Update every 100 milliseconds
    }

    return () => clearInterval(timer);
  }, [currentIndex, isOpen, story?.curr_story]);

  useEffect(() => {
    if (progress >= 100 && currentIndex === story.curr_story?.length - 1) {
      // Close the modal when all stories are completed
      onClose();
      setProgress(0);
      setCurrentIndex(0);
    }
  }, [progress, currentIndex, onClose, story?.curr_story?.length]);

  


  const handleclick = () => {

    if (currentIndex !== story?.curr_story?.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(0);
    }


  }



  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent
      //  bg="black"
      >
        <ModalBody>
          {
            story.curr_story.length<0?
            
            <p>no story </p>
            :

            <div onClick={handleclick}>
              <div className="h-1 w-full bg-neutral-700 dark:bg-neutral-600">
                <div className="h-1 bg-white" style={{ width: `${progress}%` }}></div>
              </div>
              <img className="w-full max-h-full" src={
                

                
                story.curr_story[currentIndex]?.storyimage
                ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                
                } alt="" />
              {/* <p>{progress}</p> */}
            </div>
          }


        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StoryRect;
