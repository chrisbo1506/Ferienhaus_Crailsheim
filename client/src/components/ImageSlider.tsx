import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sicherstellen, dass der Index immer gültig ist
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Sicherstellen, dass wir einen gültigen Index haben
  const validIndex = currentIndex < images.length ? currentIndex : 0;

  return (
    <div className="relative h-full w-full">
      <div 
        className="w-full h-full rounded-lg overflow-hidden shadow-lg relative flex items-center justify-center"
        style={{ minHeight: '200px' }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={images[validIndex].src} 
            alt={images[validIndex].alt}
            className="transition-all duration-500 ease-in-out"
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>
        
        {/* Bildnummer Indikator */}
        <div 
          className="absolute top-4 right-4 bg-white bg-opacity-75 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)', color: '#463A22' }}
        >
          {validIndex + 1} / {images.length}
        </div>
      
        {/* Pfeil-Buttons innerhalb des Bildcontainers */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 shadow-md z-10" 
          onClick={goToPrevious}
          aria-label="Vorheriges Bild"
          style={{ color: "#4A4A4A" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-300 shadow-md z-10"
          onClick={goToNext}
          aria-label="Nächstes Bild"
          style={{ color: "#4A4A4A" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Punkte-Navigation */}
      <div className="flex justify-center mt-4">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`rounded-full mx-1 transition-all duration-300`}
            style={{ 
              backgroundColor: validIndex === slideIndex ? '#606C38' : '#D6D3C9',
              width: validIndex === slideIndex ? '12px' : '8px',
              height: '8px'
            }}
            aria-label={`Gehe zu Bild ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;