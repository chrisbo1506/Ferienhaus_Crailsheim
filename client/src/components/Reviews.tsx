import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGoogle, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
}

const Reviews: React.FC = () => {
  const { language, t } = useLanguage();
  
  // In Zukunft werden hier echte Bewertungen erscheinen
  const reviews: Review[] = [];

  // Google Bewertungslink - hier müsste die URL zu Ihrem Google Unternehmensprofil eingesetzt werden
  const googleReviewUrl = "https://g.page/r/[IHRE-GOOGLE-ID]/review";

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <section id="reviews" className="py-16" style={{ backgroundColor: '#F8F4E8' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#325670' }}>
            {language === 'de' ? 'Bewertungen' : 'Reviews'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Was unsere Gäste über ihren Aufenthalt bei uns sagen'
              : 'What our guests say about their stay with us'}
          </p>
        </div>
        
        <div className="text-center mb-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            {language === 'de' 
              ? 'Bewertungen werden zukünftig hier erscheinen. Momentan ist unsere Ferienunterkunft neu und sammelt erste Gästeerfahrungen.'
              : 'Reviews will appear here in the future. Currently, our vacation accommodation is new and collecting initial guest experiences.'}
          </p>
        </div>
        
        <div className="text-center">
          <a 
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button 
              className="font-medium px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center"
              style={{ 
                backgroundColor: '#4285F4',
                color: 'white',
                boxShadow: '0 4px 14px 0 rgba(66, 133, 244, 0.2)',
              }}
            >
              <FaGoogle className="mr-2" />
              {language === 'de' ? 'Bewertung auf Google schreiben' : 'Write a review on Google'}
            </Button>
          </a>
          <p className="mt-4 text-sm text-gray-500">
            {language === 'de' 
              ? 'Teilen Sie Ihre Erfahrungen mit anderen Gästen und helfen Sie uns, unseren Service zu verbessern.'
              : 'Share your experiences with other guests and help us improve our service.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;