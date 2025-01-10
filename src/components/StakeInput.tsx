import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

interface StakeInputProps {
  stake: number;
  onStakeChange: (value: number) => void;
  potentialPayout: number;
  disabled: boolean;
}

export function StakeInput({ stake, onStakeChange, potentialPayout, disabled }: StakeInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-white" />
        <input
          type="number"
          min="0"
          step="0.1"
          value={stake}
          onChange={(e) => onStakeChange(Math.max(0, parseFloat(e.target.value) || 0))}
          disabled={disabled}
          className="bg-white/10 text-white rounded-lg px-3 py-2 w-32
                   focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="text-lg font-semibold text-emerald-400"
      >
        Potential Win: ${potentialPayout.toFixed(2)}
      </motion.div>
    </div>
  );
}