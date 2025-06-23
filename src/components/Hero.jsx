import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import courtroomHammer from '../assets/images/courtroom hammer.jpg';
import highCourt from '../assets/images/high court.jpg';
import handshake from '../assets/images/handshake.jpg';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: courtroomHammer,
      overlayOpacity: '0.4',
      specialOverlay: true,
    },
    {
      image: highCourt,
      overlayOpacity: '0.6',
      specialOverlay: false,
    },
    {
      image: handshake,
      overlayOpacity: '0.6',
      specialOverlay: false,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out transform ${
            currentSlide === index
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
          style={{ zIndex: currentSlide === index ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Regular overlay */}
          <div 
            className="absolute inset-0 bg-black"
            style={{ opacity: slide.overlayOpacity }}
          ></div>

          {/* Special gradient overlay for first slide */}
          {slide.specialOverlay && (
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"
              style={{ height: '30%' }}
            ></div>
          )}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <p className="font-playfair text-3xl md:text-5xl lg:text-6xl mb-4 max-w-4xl leading-tight font-medium">
          {t('hero.subtitle')}
        </p>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          {t('hero.tagline')}
        </p>
        
        <a
          href="#contact"
          className="bg-[#1a4b6e] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#1a4b6e]/90 transition-colors duration-300 shadow-lg"
        >
          {t('hero.cta')}
        </a>

        {/* Location indicators */}
        <div className="absolute bottom-8 flex gap-8 text-white/90 font-montserrat text-sm tracking-wider">
          <span>KIGALI</span>
          <span>•</span>
          <span>PARIS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero; 