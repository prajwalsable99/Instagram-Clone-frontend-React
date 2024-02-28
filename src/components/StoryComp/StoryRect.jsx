import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

const StoryRect = ({ isOpen, onClose, stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleNextStory = () => {
    setCurrentStoryIndex((prevIndex) => {
      if (prevIndex === stories.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevStory = () => {
    setCurrentStoryIndex((prevIndex) => {
      if (prevIndex === 0) {
        return stories.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={handlePrevStory}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
            >
              &lt;
            </button>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={stories[currentStoryIndex]?.storyimage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                alt="Story"
                className="w-full h-auto"
              />
            </div>
            <button
              onClick={handleNextStory}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full"
            >
              &gt;
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`w-2 h-2 bg-gray-500 rounded-full mx-1 ${
                    index === currentStoryIndex ? 'bg-white' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StoryRect;
