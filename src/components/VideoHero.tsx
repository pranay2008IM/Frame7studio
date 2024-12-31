import React from 'react';

const VideoHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="\src\videos\samsung flip 3 5g .mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoHero;