import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import {
  FaJava,
  FaAws,
  FaLinux,
  FaGitAlt,
  FaSlack,
  FaDatabase,
  FaServer,
  FaTools,
  FaJs,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiRedis,
  SiJunit5,
  SiIntellijidea,
} from "react-icons/si";

const techStack = [
  {
    category: "Backend",
    icon: <FaJava className="text-orange-500 text-2xl" />,
    items: ["Java / Spring Boot", "Python / Flask & FastAPI", "JavaScript / Express"],
  },
  {
    category: "Frontend",
    icon: <FaJs className="text-red-500 text-2xl" />,
    items: ["HTML & CSS", "JavaScript / React", "Dart / Flutter"],
  },
  {
    category: "DB",
    icon: <FaDatabase className="text-blue-500 text-2xl" />,
    items: ["MySQL & MariaDB", "MongoDB & Firebase Firestore", "PostgreSQL", "SQLite"],
  },
  {
    category: "Server",
    icon: <FaServer className="text-green-500 text-2xl" />,
    items: ["Nginx", "Docker"],
  },
  {
    category: "OS",
    icon: <FaLinux className="text-gray-800 text-2xl" />,
    items: ["Linux (Ubuntu 20.04 LTS)", "Windows", "macOS"],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-yellow-500 text-2xl" />,
    items: [
      "Eclipse / STS / VS Code / Xcode",
      "Git / GitHub / SourceTree",
      "Postman",
      "Slack / Notion / Zoom / Figma",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -15,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    overflow: 'hidden'
  },
  visible: { 
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Tech = () => {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // 초기 체크
    checkIsMobile();
    
    // 윈도우 크기 변경 시 체크
    window.addEventListener('resize', checkIsMobile);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // 모바일이 아닌 경우 모든 카드 펼치기
  useEffect(() => {
    if (!isMobile) {
      setExpandedCards(techStack.map((_, index) => index));
    } else {
      // 모바일에서는 첫 번째 카드만 펼치기
      setExpandedCards([0]);
    }
  }, [isMobile]);
  
  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(expandedCards.filter(i => i !== index));
    } else {
      setExpandedCards([...expandedCards, index]);
    }
  };
  
  return (
    <section id="tech">
      <div className="tech__inner">
        <h2 className="tech__title">
          <strong>{t('tech.title')}</strong>
        </h2>
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map(({ category, icon, items }, index) => (
              <motion.div
                key={category}
                className="tech-card bg-white rounded-xl shadow-md p-6 h-full flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={!isMobile ? "hover" : undefined}
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div 
                  className={`flex items-center gap-3 mb-4 ${isMobile ? 'cursor-pointer justify-between' : ''}`}
                  onClick={() => isMobile && toggleCard(index)}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-indigo-700">
                      {t(`tech.categories.${category.toLowerCase()}`)}
                    </h3>
                  </div>
                  
                  {isMobile && (
                    <motion.div
                      animate={{ rotate: expandedCards.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-indigo-700" />
                    </motion.div>
                  )}
                </div>
                
                <AnimatePresence>
                  {(!isMobile || expandedCards.includes(index)) && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
                        {items.map((item, idx) => (
                          <motion.li 
                            key={idx} 
                            className="leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (idx * 0.1) }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
