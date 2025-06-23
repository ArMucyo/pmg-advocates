import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';

const PracticeAreas = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);

  const practiceAreas = [
    {
      id: 1,
      title: 'practiceAreas.corporateLaw.title',
      description: 'practiceAreas.corporateLaw.description',
      longDescription: 'practiceAreas.corporateLaw.longDescription',
    },
    {
      id: 2,
      title: 'practiceAreas.businessLaw.title',
      description: 'practiceAreas.businessLaw.description',
      longDescription: 'practiceAreas.businessLaw.longDescription',
    },
    {
      id: 3,
      title: 'practiceAreas.litigation.title',
      description: 'practiceAreas.litigation.description',
      longDescription: 'practiceAreas.litigation.longDescription',
    },
    {
      id: 4,
      title: 'practiceAreas.intellectualProperty.title',
      description: 'practiceAreas.intellectualProperty.description',
      longDescription: 'practiceAreas.intellectualProperty.longDescription',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#1a4b6e] mb-4">
            {t('practiceAreas.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('practiceAreas.subtitle')}
          </p>
        </div>

        <LayoutGroup>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {practiceAreas.map((area) => (
              <motion.div
                layout
                key={area.id}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group relative overflow-hidden"
                style={{ 
                  minHeight: expandedId === area.id ? 'auto' : '200px'
                }}
                transition={{
                  layout: { duration: 0.4, ease: "easeInOut" }
                }}
              >
                {/* Static Background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0583d4]/5 rounded-bl-full transform translate-x-16 -translate-y-16" />

                {/* Motion Content Container */}
                <div className="relative pt-3">
                  <motion.div layout>
                    <motion.h3 
                      layout
                      className="text-xl font-semibold text-[#1a4b6e] group-hover:text-[#0583d4] transition-colors duration-300"
                    >
                      {t(area.title)}
                    </motion.h3>
                    
                    <motion.p 
                      layout
                      className="mt-2 text-base text-gray-600 leading-relaxed"
                    >
                      {t(area.description)}
                    </motion.p>

                    {/* Expanded Content */}
                    <AnimatePresence mode="popLayout">
                      {expandedId === area.id && (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 text-base text-gray-600 leading-relaxed"
                        >
                          {t(area.longDescription)}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Plus/Minus Button */}
                    <motion.div 
                      layout
                      className="flex justify-end mt-3"
                    >
                      <button
                        onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
                        className="w-7 h-7 rounded-full border-2 border-[#1a4b6e] hover:border-[#0583d4] flex items-center justify-center text-[#1a4b6e] hover:text-[#0583d4] transition-colors duration-300"
                        aria-label={expandedId === area.id ? "Show less" : "Show more"}
                      >
                        {expandedId === area.id ? (
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                          </svg>
                        ) : (
                          <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                          </svg>
                        )}
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default PracticeAreas; 