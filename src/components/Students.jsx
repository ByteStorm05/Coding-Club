import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { "id": 1, "title": "Jessiya Joy, Cracks Goldman Sachs", "url": "/students/student1.png" },
  { "id": 2, "title": "Chhavi Bansal, Cracks Adobe 20+ LPA", "url": "/students/student2.png" },
  { "id": 3, "title": "Samay Kar, Cracks Microsoft", "url": "/students/student3.png" },
  { "id": 4, "title": "Vidushi Agrawal, Cracks Walmart", "url": "/students/student4.png" },
  { "id": 5, "title": "Swapnil Shukla, Cracks J.P. Morgan", "url": "/students/student5.png" },
  { "id": 6, "title": "Surabhi Chaurasia, Cracks Deutsche Bank", "url": "/students/student6.png" },
  { "id": 7, "title": "Soumya Kapsime, Cracks American Express", "url": "/students/student7.png" },
  { "id": 8, "title": "Hardik Rohilla, Cracks Paytm", "url": "/students/student8.png" },
  { "id": 9, "title": "Kallupalli Sai Reddy, Cracks Oracle", "url": "/students/student9.png" },
  { "id": 10, "title": "Tejasvi Amanaganti, Cracks Deloitte", "url": "/students/student10.png" },
  { "id": 11, "title": "Samay Kar, Cracks Microsoft", "url": "/students/student11.png" },
  { "id": 12, "title": "Jyotsna, Cracks Samsung", "url": "/students/student12.png" }
]


const PhotoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-[-100px]">

        <div className="mb-14 text-center">
          <span  id= "results" className="py-1 px-4 bg-green-100 rounded-full text-xs font-medium text-green-800 text-center">
            Results
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
          From <span className='text-blue-600'>Coding Club</span> to Top Tech Giants!
          </h2>
          <p className="text-lg font-normal text-gray-700 max-w-md md:max-w-2xl mx-auto">
          Our students have cracked top packages and secured roles at Microsoft, Google, Adobe, Goldman Sachs, J.P. Morgan, Deutsche Bank, Oracle, American Express, Walmart, Paytm, and more!
          </p>
        </div>
      {/* Grid for large screens */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <HoverImage key={photo.id} photo={photo} />
        ))}
      </div>

      {/* Carousel for small and medium screens */}
      <div className="block lg:hidden relative mx-auto w-[300px]">
        <div className="relative h-[300px] w-[300px]">
          <HoverImage photo={photos[currentSlide]} />
          
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-4 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HoverImage = ({ photo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={photo.url}
        alt={photo.title}
        className={`w-full h-full object-cover transition-all duration-300 ${
          hover ? 'grayscale' : 'grayscale-0'
        }`}
      />
      {hover && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300">
          <p className="text-white text-center font-semibold p-2">{photo.title}</p>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;