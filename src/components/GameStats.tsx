import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Percent } from 'lucide-react';

interface GameStatsProps {
  odds: number;
  multiplier: number;
  score: number;
}

export function GameStats({ odds, multiplier, score }: GameStatsProps) {
  return (
    <div className="flex gap-8 items-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="flex items-center gap-2"
      >
        <Trophy className="w-6 h-6 text-yellow-400" />
        <span className="text-2xl font-bold text-white">{score}</span>
      </motion.div>
      
      <div className="flex items-center gap-2 text-white">
        <Percent className="w-5 h-5" />
        <span className="text-lg">
          {(odds * 100).toFixed(1)}%
        </span>
      </div>

      <div className="text-lg text-emerald-400 font-semibold">
        {multiplier.toFixed(2)}x
      </div>
    </div>
  );
}