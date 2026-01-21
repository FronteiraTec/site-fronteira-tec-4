import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onToggle}
      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
        isDark 
          ? 'bg-white/10 hover:bg-white/20 text-yellow-400' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
}