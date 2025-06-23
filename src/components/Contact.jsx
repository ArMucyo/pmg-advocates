import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import kigaliCity from '../assets/images/kigali city.jpg';
import laDefense from '../assets/images/la defense - paris.jpg';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('kigali');
  const [showMap, setShowMap] = useState(false);

  const offices = {
    kigali: {
      name: 'Kigali Office',
      address: 'ECD Plaza, 23 KN 4 Ave, Kigali, Rwanda, opposite Marriott Hotel',
      phone: '+250 788 524 528',
      email: 'contact@pmg-advocates.com',
      hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
      image: kigaliCity,
      timezone: 'CAT (UTC+2)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ECD+Plaza,+23+KN+4+Ave,+Kigali,+Rwanda',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d30.0644!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x4a87a1d8e8b6c2d5!2sECD%20Plaza%2C%20KN%204%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1635789012345!5m2!1sen!2srw'
    },
    paris: {
      name: 'Paris Office',
      address: '15 Avenue de la Grande Armée, 75016 Paris, France',
      phone: '+33 X XX XX XX XX',
      email: 'contact@pmg-advocates.com',
      hours: 'Lun - Ven: 8:00 - 17:00',
      image: laDefense,
      timezone: 'CET (UTC+1)',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=15+Avenue+de+la+Grande+Arm%C3%A9e,+75016+Paris,+France',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2!2d2.2945!3d48.8738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2s15%20Avenue%20de%20la%20Grande%20Arm%C3%A9e%2C%2075016%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1635789012345!5m2!1sen!2sfr'
    }
  };

  const services = [
    'Corporate Law',
    'Business Law',
    'Litigation',
    'Intellectual Property',
    'Tax Advisory',
    'Employment Law',
    'Real Estate',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const getCurrentTime = (timezone) => {
    const now = new Date();
    if (timezone === 'CAT (UTC+2)') {
      return now.toLocaleTimeString('en-US', { timeZone: 'Africa/Kigali', hour12: false });
    } else {
      return now.toLocaleTimeString('en-US', { timeZone: 'Europe/Paris', hour12: false });
    }
  };

  const [currentTime, setCurrentTime] = useState({
    kigali: getCurrentTime('CAT (UTC+2)'),
    paris: getCurrentTime('CET (UTC+1)')
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime({
        kigali: getCurrentTime('CAT (UTC+2)'),
        paris: getCurrentTime('CET (UTC+1)')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1a4b6e] via-[#1a4b6e] to-[#0583d4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 50,100" fill="white" fillOpacity="0.1"/>
          <polygon points="0,100 100,100 50,0" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Selector */}
            <div className="flex bg-white/15 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/30">
              {Object.keys(offices).map((office) => (
                <button
                  key={office}
                  onClick={() => setSelectedOffice(office)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    selectedOffice === office
                      ? 'bg-white text-[#1a4b6e] shadow-md'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {offices[office].name}
                </button>
              ))}
            </div>

            {/* Office Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOffice}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={offices[selectedOffice].image}
                    alt={offices[selectedOffice].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{offices[selectedOffice].name}</h3>
                    <p className="text-sm opacity-90">
                      {selectedOffice === 'kigali' ? currentTime.kigali : currentTime.paris} - {offices[selectedOffice].timezone}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-white">
                    <svg className="w-5 h-5 text-white/80 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Address</p>
                      <p className="text-white/80">{offices[selectedOffice].address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-white">
                    <svg className="w-5 h-5 text-white/80 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <a href={`tel:${offices[selectedOffice].phone}`} className="text-white/80 hover:text-white hover:underline transition-colors">
                        {offices[selectedOffice].phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-white">
                    <svg className="w-5 h-5 text-white/80 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <a href={`mailto:${offices[selectedOffice].email}`} className="text-white/80 hover:text-white hover:underline transition-colors">
                        {offices[selectedOffice].email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-white">
                    <svg className="w-5 h-5 text-white/80 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Office Hours</p>
                      <p className="text-white/80">{offices[selectedOffice].hours}</p>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button
                      onClick={() => setShowMap(!showMap)}
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 px-4 rounded-lg font-medium hover:bg-white/30 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {showMap ? 'Hide Map' : 'View on Map'}
                    </button>
                    
                    <a 
                      href={offices[selectedOffice].mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-[#1a4b6e] py-3 px-4 rounded-lg font-medium hover:bg-white/90 transition-colors duration-200 shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Get Directions
                    </a>
                  </div>

                  {/* Embedded Map */}
                  <AnimatePresence>
                    {showMap && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 overflow-hidden rounded-lg"
                      >
                        <iframe
                          src={offices[selectedOffice].embedUrl}
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {t('contact.form.title')}
            </h3>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {t('contact.form.success.title')}
                  </h4>
                  <p className="text-white/80">
                    {t('contact.form.success.message')}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-white placeholder-white/60"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-white placeholder-white/60"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-white placeholder-white/60"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-1">
                        {t('contact.form.service')}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-white"
                      >
                        <option value="" className="bg-[#1a4b6e] text-white">{t('contact.form.selectService')}</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-[#1a4b6e] text-white">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 resize-none text-white placeholder-white/60"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#1a4b6e] py-3 px-6 rounded-lg font-semibold hover:bg-white/90 focus:ring-4 focus:ring-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1a4b6e]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 