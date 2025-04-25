import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  title: string;
}

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [openImage, setOpenImage] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "living-room",
      image: "attached_assets/Wohnzimmer.JPG",
      alt: t('livingRoomGallery'),
      title: t('livingRoomGallery')
    },
    {
      id: "kitchen",
      image: "attached_assets/Kueche_1.JPEG",
      alt: t('kitchenGallery'),
      title: t('kitchenGallery')
    },
    {
      id: "kitchen-2",
      image: "attached_assets/Kueche_2.JPEG",
      alt: t('kitchenGallery'),
      title: t('kitchenGallery')
    },
    {
      id: "brown-bedroom",
      image: "attached_assets/braunes_Zimmer_1.JPEG",
      alt: t('brownBedroomGallery'),
      title: t('brownBedroomGallery')
    },
    {
      id: "black-bedroom",
      image: "attached_assets/schwarzes_Zimmer_1.JPG",
      alt: t('blackBedroomGallery'),
      title: t('blackBedroomGallery')
    },
    {
      id: "white-bedroom",
      image: "attached_assets/weißes_Zimmer_1.JPEG",
      alt: t('whiteBedroomGallery'),
      title: t('whiteBedroomGallery')
    },
    {
      id: "bathroom",
      image: "attached_assets/Bad_1.JPEG",
      alt: t('bathroomGallery'),
      title: t('bathroomGallery')
    },
    {
      id: "bathroom-2",
      image: "attached_assets/Bad_2.JPEG",
      alt: t('bathroomGallery'),
      title: t('bathroomGallery')
    },
    {
      id: "toilette",
      image: "attached_assets/Toilette.JPEG",
      alt: t('bathroomGallery'),
      title: t('bathroomGallery')
    }
  ];

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-heading font-semibold mb-6">{t('gallery')}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => setOpenImage(item.image)}
          >
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-60 object-cover"
            />
            <div className="p-3 bg-white">
              <p className="font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {openImage && (
            <img 
              src={openImage} 
              alt="Gallery image" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
