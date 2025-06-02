import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Main = ({ children }) => {
  useEffect(() => {
    // 페이지 로딩 시 부드러운 스크롤 설정
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.main 
        id="main" 
        role="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        <motion.div 
          className="page-transition-overlay"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "var(--black)",
            transformOrigin: "top",
            zIndex: 9999
          }}
        />
      </motion.main>
    </AnimatePresence>
  );
};

export default Main;
