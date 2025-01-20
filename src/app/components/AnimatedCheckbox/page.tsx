"use client"

import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface AnimatedCheckboxProps {
  label: string;
  onChange?: (checked: boolean) => void;
}

const AnimatedCheckbox: React.FC<AnimatedCheckboxProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
    controls.start(isChecked ? "unchecked" : "checked");
  };

  const boxVariants = {
    unchecked: { 
      scale: [1, 0.9, 1],
      rotate: [0, -10, 0],
      boxShadow: "0px 0px 0px rgba(139, 92, 246, 0)",
      transition: { duration: 0.4, ease: "easeInOut" } 
    },
    checked: { 
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
      boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.5)",
      transition: { duration: 0.4, ease: "easeInOut" } 
    },
  };

  const checkVariants = {
    unchecked: { pathLength: 0, opacity: 0 },
    checked: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 0.3, ease: "easeOut" } 
    },
  };

  const labelVariants = {
    unchecked: { x: 0, opacity: 0.7 },
    checked: { 
      x: 5, 
      opacity: 1, 
      transition: { duration: 0.2, ease: "easeOut" } 
    },
  };

  const rippleVariants = {
    checked: {
      scale: [0, 1.5],
      opacity: [0.5, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.label 
      className="flex items-center space-x-3 cursor-pointer select-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden
                    ${isChecked ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white border-2 border-gray-300'}
                    transition-colors duration-300`}
        variants={boxVariants}
        animate={controls}
        onClick={handleToggle}
      >
        <AnimatePresence>
          {isChecked && (
            <motion.div
              className="absolute inset-0 bg-white opacity-30"
              variants={rippleVariants}
              initial="unchecked"
              animate="checked"
              exit="unchecked"
            />
          )}
        </AnimatePresence>
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M3 8L7 12L13 4"
            stroke={isChecked ? "white" : "#A0AEC0"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={checkVariants}
            animate={controls}
            initial="unchecked"
          />
        </motion.svg>
      </motion.div>
      <motion.span
        className="text-gray-800 font-medium text-lg"
        variants={labelVariants}
        animate={controls}
      >
        {label}
      </motion.span>
    </motion.label>
  );
};

export default AnimatedCheckbox;

