import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

interface BlockProps {
  revealed: boolean;
  isGem: boolean;
  onClick: () => void;
  disabled: boolean;
}

export function Block({ revealed, isGem, onClick, disabled }: BlockProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`
        w-20 h-20 rounded-lg relative 
        ${revealed 
          ? isGem 
            ? 'bg-gradient-to-br from-emerald-500 to-emerald-700'
            : 'bg-gradient-to-br from-red-500 to-red-700'
          : 'bg-gradient-to-br from-indigo-500 to-indigo-700'
        }
        shadow-lg hover:shadow-xl transition-all duration-300
        ${disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        border-2 border-white/10
      `}
      onClick={onClick}
      disabled={disabled}
    >
      <motion.div
        initial={false}
        animate={{
          rotateY: revealed ? 180 : 0,
          scale: revealed ? 1.2 : 1,
        }}
        transition={{ duration: 0.6, type: "spring" }}
        className="w-full h-full flex items-center justify-center"
      >
        {revealed ? (
          <div className="rotate-180">
            <Gem className={`w-8 h-8 text-white ${!isGem ? 'text-red-200' : ''}`} />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-white/10" />
        )}
      </motion.div>
    </motion.button>
  );
}