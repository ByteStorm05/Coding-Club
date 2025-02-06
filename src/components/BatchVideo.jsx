import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BatchReviews = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  
  const videos = [
    "878595620",
    "878595591",
    "878595562",
    "878595541",
    "878595506",
    "878595461",
    "878595432",
    "878595401",
    "878584406",
  ];

  const nextMobileSlide = () => {
    setMobileIndex((prev) => (prev + 1) % videos.length);
  };

  const prevMobileSlide = () => {
    setMobileIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextDesktopSlide = () => {
    setDesktopIndex((prev) => (prev + 3 <= videos.length - 1) ? prev + 3 : 0);
  };

  const prevDesktopSlide = () => {
    setDesktopIndex((prev) => (prev - 3 >= 0) ? prev - 3 : Math.floor((videos.length - 1) / 3) * 3);
  };

  const getVisibleDesktopVideos = () => {
    return videos.slice(desktopIndex, desktopIndex + 3);
  };

  return (
    <div className="container mx-auto px-4 ">
      
      
      {/* Mobile Carousel (< lg screens) */}
      <div className="lg:hidden relative mt-8">
        <div className="relative w-full max-w-2xl mx-auto" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://player.vimeo.com/video/${videos[mobileIndex]}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"
            title={`Video ${mobileIndex + 1}`}
          />
        </div>
        
        <button 
          onClick={prevMobileSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextMobileSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === mobileIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Carousel (lg+ screens) */}
      <div className="hidden lg:block relative mt-8 max-w-7xl mx-auto">
        <div className="flex gap-6">
          {getVisibleDesktopVideos().map((video, index) => (
            <div key={index} className="flex-1 relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://player.vimeo.com/video/${video}?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture"
                className="absolute top-0 left-0 w-full h-full"
                title={`Video ${desktopIndex + index + 1}`}
              />
            </div>
          ))}
        </div>

        <button 
          onClick={prevDesktopSlide}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextDesktopSlide}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(videos.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setDesktopIndex(index * 3)}
              className={`w-2 h-2 rounded-full ${
                Math.floor(desktopIndex / 3) === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default BatchReviews;