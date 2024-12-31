import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

const VideoModal = ({ project, onClose }: VideoModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
      >
        <X size={32} />
      </button>
      
      <div className="w-full max-w-4xl">
        <video
          controls
          
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          className="w-full rounded-lg shadow-2xl"
        >
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;