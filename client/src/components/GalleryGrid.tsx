import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  mainImageIndex?: number; // Optional: Index des Hauptbilds (wird größer angezeigt)
  mainImageHeight?: number; // Optional: Höhe des Hauptbilds in Pixeln
  regularImageHeight?: number; // Optional: Höhe der regulären Bilder in Pixeln
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ 
  images, 
  mainImageIndex = 0, 
  mainImageHeight = 400, 
  regularImageHeight = 250 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Wenn nur ein Bild vorhanden ist, zeigen wir es als Hauptbild an
  if (images.length === 1) {
    return (
      <div className="mb-6">
        <div 
          className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: `${mainImageHeight}px` 
          }}
          onClick={() => handleImageClick(0)}
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        {selectedImageIndex !== null && (
          <ImageModal
            isOpen={selectedImageIndex !== null}
            onClose={closeModal}
            imageSrc={images[selectedImageIndex].src}
            imageAlt={images[selectedImageIndex].alt}
          />
        )}
      </div>
    );
  }

  // Wenn mehrere Bilder da sind, zeigen wir das Hauptbild größer und die anderen kleiner an
  return (
    <div className="mb-6">
      {/* Hauptbild */}
      <div 
        className="rounded-xl overflow-hidden shadow-xl cursor-pointer mb-6 transform transition-transform hover:scale-[1.01]"
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: `${mainImageHeight}px` 
        }}
        onClick={() => handleImageClick(mainImageIndex)}
      >
        <img
          src={images[mainImageIndex].src}
          alt={images[mainImageIndex].alt}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
      
      {/* Weitere Bilder - nebeneinander und mittig */}
      <div className="flex justify-center flex-wrap gap-4" style={{ maxWidth: '95%', margin: '0 auto' }}>
        {images.filter((_, index) => index !== mainImageIndex).map((image, idx) => {
          const originalIndex = images.findIndex(img => img.src === image.src);
          return (
            <div 
              key={idx}
              className="rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-transform hover:scale-[1.01]"
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: `${regularImageHeight}px`,
                width: '32%',
                minWidth: '250px',
                maxWidth: '300px'
              }}
              onClick={() => handleImageClick(originalIndex)}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Modal für vergrößerte Ansicht */}
      {selectedImageIndex !== null && (
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={closeModal}
          imageSrc={images[selectedImageIndex].src}
          imageAlt={images[selectedImageIndex].alt}
        />
      )}
    </div>
  );
};

export default GalleryGrid;