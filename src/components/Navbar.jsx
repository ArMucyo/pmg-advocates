import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/pmg-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const navLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.practiceAreas'), href: '#practice-areas' },
    { name: t('navbar.attorneys'), href: '#attorneys' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-1 flex items-center justify-center md:justify-start">
              <div className="flex-shrink-0">
                <a href="#home" className="flex items-center">
                  <img 
                    src={logo} 
                    alt="PMG Advocates Logo" 
                    className="h-12 sm:h-13 md:h-14 w-auto hover:opacity-80 transition-opacity duration-200 mt-3.5"
                  />
                </a>
              </div>
              {/* Desktop Navigation and Language Selector */}
              <div className="hidden md:flex md:items-center md:justify-between md:flex-1">
                <div className="md:ml-6 lg:ml-8 flex space-x-4 lg:space-x-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`${
                        isScrolled 
                          ? 'text-[#1a4b6e] hover:text-[#0583d4]' 
                          : 'text-white hover:text-white/80'
                      } px-2 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#0583d4] after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                {/* Desktop Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className={`flex items-center ${
                      isScrolled 
                        ? 'text-[#1a4b6e] hover:text-[#0583d4]' 
                        : 'text-white hover:text-white/80'
                    } px-2 lg:px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200`}
                  >
                    {i18n.language.toUpperCase()}
                    <svg
                      className={`ml-1 lg:ml-2 h-4 lg:h-5 w-4 lg:w-5 transition-transform duration-200 ${
                        isLangDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {/* Desktop Language Dropdown */}
                  {isLangDropdownOpen && (
                    <div className="absolute right-0 mt-1 lg:mt-2 w-20 lg:w-24 bg-white shadow-lg py-1 z-50 rounded-lg">
                      <button
                        onClick={() => toggleLanguage('en')}
                        className={`block w-full text-left px-2 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base rounded-md ${
                          i18n.language === 'en'
                            ? 'text-[#0583d4] bg-[#f8f9fa]'
                            : 'text-[#1a4b6e] hover:bg-[#f8f9fa]'
                        }`}
                      >
                        {t('language.en')}
                      </button>
                      <button
                        onClick={() => toggleLanguage('fr')}
                        className={`block w-full text-left px-2 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base rounded-md ${
                          i18n.language === 'fr'
                            ? 'text-[#0583d4] bg-[#f8f9fa]'
                            : 'text-[#1a4b6e] hover:bg-[#f8f9fa]'
                        }`}
                      >
                        {t('language.fr')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 ${
                  isScrolled 
                    ? 'text-[#1a4b6e] hover:text-[#0583d4]' 
                    : 'text-white hover:text-white/80'
                } focus:outline-none transition-colors duration-200`}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen 
                      ? 'w-6 rotate-45 translate-y-2 bg-[#0583d4]' 
                      : 'w-6'
                  }`}></div>
                  <div className={`h-0.5 bg-current ml-auto transition-all duration-300 ${
                    isOpen 
                      ? 'w-0 opacity-0' 
                      : 'w-4'
                  }`}></div>
                  <div className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen 
                      ? 'w-6 -rotate-45 -translate-y-2 bg-[#0583d4]' 
                      : 'w-6'
                  }`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#0583d4] active:text-[#0583d4] hover:bg-white/10 active:bg-white/10 px-6 py-3 text-lg font-medium transition-all duration-200 text-center rounded-md"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="pt-4 mt-4 border-t border-white/20">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    toggleLanguage('en');
                    setIsOpen(false);
                  }}
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    i18n.language === 'en'
                      ? 'bg-[#0583d4] text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    toggleLanguage('fr');
                    setIsOpen(false);
                  }}
                  className={`px-6 py-2 rounded-md transition-all duration-200 ${
                    i18n.language === 'fr'
                      ? 'bg-[#0583d4] text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 