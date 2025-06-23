import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo from '../assets/images/pmg-logo.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('navbar.home'), href: '#home' },
    { name: t('navbar.practiceAreas'), href: '#practice-areas' },
    { name: t('navbar.attorneys'), href: '#attorneys' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  const practiceAreas = [
    { name: 'Corporate Law', href: '#practice-areas' },
    { name: 'Business Law', href: '#practice-areas' },
    { name: 'Litigation', href: '#practice-areas' },
    { name: 'Intellectual Property', href: '#practice-areas' },
  ];



  return (
    <footer className="bg-[#1a4b6e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,20 100,100 0,80" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={logo} 
                  alt="PMG Advocates Logo" 
                  className="h-10 w-auto mr-3"
                />
                <span className="text-xl font-semibold">PMG Advocates</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                {t('footer.description')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Practice Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">{t('footer.practiceAreas')}</h3>
              <ul className="space-y-3">
                {practiceAreas.map((area) => (
                  <li key={area.name}>
                    <a
                      href={area.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {area.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/70">
              <p>© {currentYear} PMG Advocates. {t('footer.allRightsReserved')}</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {t('footer.privacyPolicy')}
                </a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  {t('footer.termsOfService')}
                </a>
              </div>
            </div>
            
            {/* Office Locations */}
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kigali
              </span>
              <span>•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Paris
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 