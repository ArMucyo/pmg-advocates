import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const attorneys = [
  {
    id: 1,
    name: "Donatien Mucyo",
    title: "attorneys.positions.managingPartner",
    image: "https://placehold.co/400x600/1a4b6e/ffffff?text=D.M",
    education: [
      "LLM, International Business Law, University of Paris 1 Panthéon-Sorbonne",
      "LLB, University of Rwanda"
    ],
    languages: ["English", "French", "Kinyarwanda"],
    bio: "attorneys.mucyo.bio",
    expertise: ["Corporate Law", "International Business", "Mergers & Acquisitions"],
    barAdmissions: ["Rwanda Bar Association", "Paris Bar"],
    location: "Kigali"
  },
  {
    id: 2,
    name: "Richard Gisagara",
    title: "attorneys.positions.seniorPartner",
    image: "https://placehold.co/400x600/1a4b6e/ffffff?text=R.G",
    education: [
      "LLM, Business Law, University of Paris 2 Panthéon-Assas",
      "Master of Laws, University of Rwanda"
    ],
    languages: ["English", "French", "Kinyarwanda"],
    bio: "attorneys.gisagara.bio",
    expertise: ["Litigation", "Corporate Law", "Banking & Finance"],
    barAdmissions: ["Paris Bar", "Rwanda Bar Association"],
    location: "Paris"
  },
  {
    id: 3,
    name: "Gilles Paruelle",
    title: "attorneys.positions.seniorPartner",
    image: "https://placehold.co/400x600/1a4b6e/ffffff?text=G.P",
    education: [
      "Master in Business Law, HEC Paris",
      "LLB, Paris-Saclay University"
    ],
    languages: ["French", "English"],
    bio: "attorneys.paruelle.bio",
    expertise: ["International Business", "Corporate Law", "Tax Advisory"],
    barAdmissions: ["Paris Bar"],
    location: "Paris"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.75,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
};

const Attorneys = () => {
  const { t } = useTranslation();
  const [selectedAttorney, setSelectedAttorney] = useState(null);

  useEffect(() => {
    if (selectedAttorney) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure we restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAttorney]);

  return (
    <section id="attorneys" className="py-16 px-4 bg-gray-50">
      <div className={`${selectedAttorney ? 'h-screen overflow-hidden' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4b6e] mb-4">
            {t('attorneys.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('attorneys.subtitle')}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {attorneys.map((attorney) => (
            <motion.div
              key={attorney.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedAttorney(attorney)}
            >
              <div className="p-4">
                <div className="space-y-3">
                  <div className="aspect-[2/3] rounded-lg bg-gray-200 overflow-hidden relative">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-medium">
                        {t('attorneys.clickForMore')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a4b6e] group-hover:text-[#0583d4] transition-colors duration-300">
                      {attorney.name}
                    </h3>
                    <p className="text-[#0583d4]">{t(attorney.title)}</p>
                    <p className="text-gray-600 mt-1 text-sm">{attorney.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedAttorney && (
            <>
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setSelectedAttorney(null)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              />
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none"
              >
                <div className="bg-white rounded-xl w-full max-w-5xl min-h-[50vh] max-h-[90vh] overflow-hidden pointer-events-auto shadow-2xl relative flex flex-col md:block">
                  <button
                    onClick={() => setSelectedAttorney(null)}
                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="flex flex-col md:grid md:grid-cols-[1fr,1.5fr] min-h-full">
                    {/* Left section - Photo */}
                    <div className="relative h-[40vh] md:h-full">
                      <img
                        src={selectedAttorney.image}
                        alt={selectedAttorney.name}
                        className="w-full h-full object-cover md:sticky md:top-0"
                      />
                    </div>

                    {/* Right section - Content */}
                    <div className="p-4 md:p-6 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a4b6e] mb-1.5">
                          {selectedAttorney.name}
                        </h3>
                        <p className="text-[#0583d4] text-base md:text-lg mb-0.5">{t(selectedAttorney.title)}</p>
                        <p className="text-gray-600">{selectedAttorney.location}</p>
                      </div>
                      <div className="space-y-4 md:space-y-6 pb-6">
                        <div>
                          <h4 className="font-semibold text-[#1a4b6e] mb-2 text-base md:text-lg">
                            {t('attorneys.bio')}
                          </h4>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {t(selectedAttorney.bio)}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1a4b6e] mb-2 text-base md:text-lg">
                            {t('attorneys.education')}
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
                            {selectedAttorney.education.map((edu, index) => (
                              <li key={index}>{edu}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1a4b6e] mb-2 text-base md:text-lg">
                            {t('attorneys.barAdmissions')}
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-1">
                            {selectedAttorney.barAdmissions.map((bar, index) => (
                              <li key={index}>{bar}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1a4b6e] mb-2 text-base md:text-lg">
                            {t('attorneys.expertise')}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedAttorney.expertise.map((area, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 md:px-3 md:py-1.5 bg-[#0583d4]/10 text-[#0583d4] rounded-full text-xs md:text-sm"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#1a4b6e] mb-2 text-base md:text-lg">
                            {t('attorneys.languages')}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedAttorney.languages.map((lang, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs md:text-sm"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Attorneys; 