import React, { useState, useRef, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  apartment: 'wohnung1' | 'wohnung2';
  name: string;
  email: string;
  phone: string;
  persons: number;
  arrival: string;
  departure: string;
  message: string;
  privacy: boolean;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    apartment: 'wohnung1',
    name: '',
    email: '',
    phone: '',
    persons: 2,
    arrival: '',
    departure: '',
    message: '',
    privacy: false
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    // Validate required fields
    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.persons || formData.persons < 1 || formData.persons > 6) {
      errors.persons = t('personRange');
      isValid = false;
    }

    if (!formData.arrival) {
      errors.arrival = 'Arrival date is required';
      isValid = false;
    }

    if (!formData.departure) {
      errors.departure = 'Departure date is required';
      isValid = false;
    }

    // Validate dates
    if (formData.arrival && formData.departure) {
      const arrivalDate = new Date(formData.arrival);
      const departureDate = new Date(formData.departure);
      
      if (departureDate <= arrivalDate) {
        errors.departure = t('dateAfterArrival');
        isValid = false;
      }
      
      // Validate minimum stay (2 nights)
      const diffTime = Math.abs(departureDate.getTime() - arrivalDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 2) {
        errors.departure = t('minStayRequired');
        isValid = false;
      }
    }

    if (!formData.privacy) {
      errors.privacy = 'Privacy policy must be accepted';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real implementation, this would send the form data to a server
      // For now, we'll just show a success message
      toast({
        title: t('inquirySent'),
        description: `${formData.name}, ${formData.email}, ${formData.persons} persons, ${formData.arrival} - ${formData.departure}`,
      });
      
      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
        setFormData({
          apartment: 'wohnung1',
          name: '',
          email: '',
          phone: '',
          persons: 2,
          arrival: '',
          departure: '',
          message: '',
          privacy: false
        });
      }
    } else {
      // Show first error
      const firstError = Object.values(formErrors)[0];
      toast({
        title: 'Validation Error',
        description: firstError,
        variant: 'destructive'
      });
    }
  };

  return (
    <section id="kontakt" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-primary mb-8">{t('contactBooking')}</h2>
        
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md p-6">
          <p className="mb-6">{t('contactText')}</p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="apartment" className="block mb-2 font-medium">{t('apartmentSelect')}</label>
              <select 
                id="apartment" 
                name="apartment" 
                value={formData.apartment}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="wohnung1">{t('apartment1')}</option>
                <option value="wohnung2">{t('apartment2')} ({t('comingSoon')})</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                {t('name')}{t('required')}
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className={`w-full px-4 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                {t('email')}{t('required')}
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className={`w-full px-4 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">{t('phone')} ({t('optional')})</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="persons" className="block mb-2 font-medium">
                {t('numPersons')}{t('required')}
              </label>
              <input 
                type="number" 
                id="persons" 
                name="persons" 
                min="1" 
                max="6" 
                value={formData.persons}
                onChange={handleChange}
                required 
                className={`w-full px-4 py-2 border ${formErrors.persons ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <p className="text-sm text-gray-600 mt-1">{t('maxPersons')}</p>
              {formErrors.persons && <p className="text-red-500 text-sm mt-1">{formErrors.persons}</p>}
            </div>
            
            <div>
              <label htmlFor="arrival" className="block mb-2 font-medium">
                {t('arrivalDate')}{t('required')}
              </label>
              <input 
                type="date" 
                id="arrival" 
                name="arrival" 
                value={formData.arrival}
                onChange={handleChange}
                required 
                className={`w-full px-4 py-2 border ${formErrors.arrival ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {formErrors.arrival && <p className="text-red-500 text-sm mt-1">{formErrors.arrival}</p>}
            </div>
            
            <div>
              <label htmlFor="departure" className="block mb-2 font-medium">
                {t('departureDate')}{t('required')}
              </label>
              <input 
                type="date" 
                id="departure" 
                name="departure" 
                value={formData.departure}
                onChange={handleChange}
                required 
                className={`w-full px-4 py-2 border ${formErrors.departure ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <p className="text-sm text-gray-600 mt-1">{t('minNights')}</p>
              {formErrors.departure && <p className="text-red-500 text-sm mt-1">{formErrors.departure}</p>}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block mb-2 font-medium">{t('message')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="flex items-start mb-4">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  checked={formData.privacy}
                  onChange={handleChange}
                  required 
                  className="mt-1 mr-2"
                />
                <label htmlFor="privacy" className="text-sm">
                  {t('privacy')}{t('required')}
                </label>
              </div>
              {formErrors.privacy && <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>}
            </div>
            
            <div className="md:col-span-2">
              <button 
                type="submit" 
                style={{ backgroundColor: '#325670' }}
                className="text-white px-6 py-3 rounded-md hover:opacity-90 transition duration-200"
              >
                {t('send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
