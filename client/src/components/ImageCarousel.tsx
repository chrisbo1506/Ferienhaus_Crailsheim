import React, { useState } from 'react';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  onImageClick: (src: string, alt: string) => void;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  onImageClick, 
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={`relative ${className}`}>
      {/* Hauptbild */}
      <div className="relative group">
        <div 
          className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-300 hover:shadow-2xl" 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}
          onClick={() => onImageClick(currentImage.src, currentImage.alt)}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Navigation Buttons - nur anzeigen wenn mehr als ein Bild */}
        {images.length > 1 && (
          <>
            {/* Vorheriges Bild Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ color: '#325670' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            {/* Nächstes Bild Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ color: '#325670' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Mini-Vorschaubilder - nur anzeigen wenn mehr als ein Bild */}
      {images.length > 1 && (
        <div className="mt-4">
          {/* Bildnummer Anzeige */}
          <div className="text-center mb-3">
            <span className="text-sm text-gray-600 font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          
          {/* Mini-Vorschaubilder */}
          <div className="flex justify-center items-center space-x-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 ${
                  index === currentIndex 
                    ? 'ring-3 ring-[#325670] ring-opacity-70 shadow-lg scale-105' 
                    : 'ring-1 ring-gray-200 hover:ring-gray-300 hover:shadow-md'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-16 h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;