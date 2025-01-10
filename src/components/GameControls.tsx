import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent, Bomb, RotateCcw, Lock } from 'lucide-react';

interface GameControlsProps {
  stake: number;
  onStakeChange: (value: number) => void;
  potentialPayout: number;
  disabled: boolean;
  odds: number;
  multiplier: number;
  mineCount: number;
  onMineCountChange: (value: number) => void;
  maxMines: number;
  isPlaying: boolean;
  onCashout: () => void;
  onNewGame: () => void;
  gameOver: boolean;
  onLockIn: () => void;
  isLockedIn: boolean;
}

export function GameControls({
  stake,
  onStakeChange,
  potentialPayout,
  disabled,
  odds,
  multiplier,
  mineCount,
  onMineCountChange,
  maxMines,
  isPlaying,
  onCashout,
  onNewGame,
  gameOver,
  onLockIn,
  isLockedIn,
}: GameControlsProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm w-80 flex flex-col gap-6">
      <div className="text-3xl font-bold text-white text-center mb-4">
        Controls
      </div>

      {/* Mine Count Slider */}
      <div className="bg-red-600/30 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Bomb className="w-6 h-6 text-red-400" />
            <label className="text-white text-lg">Mines</label>
          </div>
          <span className="text-2xl font-bold text-white">{mineCount}</span>
        </div>
        <input
          type="range"
          min="1"
          max={maxMines}
          value={mineCount}
          onChange={(e) => onMineCountChange(parseInt(e.target.value))}
          disabled={disabled || isLockedIn}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-red-500
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-moz-range-thumb]:w-4
                   [&::-moz-range-thumb]:h-4
                   [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:bg-red-500
                   [&::-moz-range-thumb]:border-0"
        />
      </div>

      {/* Stake Input */}
      <div className="bg-indigo-600/30 p-4 rounded-lg">
        <label className="text-white text-lg mb-2 block">Your Stake</label>
        <div className="flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-white" />
          <input
            type="number"
            min="0"
            step="0.1"
            value={stake}
            onChange={(e) => onStakeChange(Math.max(0, parseFloat(e.target.value) || 0))}
            disabled={disabled || isLockedIn}
            className="bg-white/10 text-white text-2xl font-bold rounded-lg px-4 py-3 w-full
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Potential Win */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        className="bg-emerald-600/30 p-4 rounded-lg"
      >
        <div className="text-lg text-emerald-400 mb-1">Potential Win</div>
        <div className="text-3xl font-bold text-white">
          ${potentialPayout.toFixed(2)}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="bg-indigo-600/30 p-4 rounded-lg flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-white" />
            <span className="text-white">Odds</span>
          </div>
          <span className="text-2xl font-bold text-white">
            {(odds * 100).toFixed(1)}%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white">Multiplier</span>
          <span className="text-2xl font-bold text-emerald-400">
            {multiplier.toFixed(2)}x
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        {!isPlaying && !gameOver && (
          <button
            onClick={onLockIn}
            disabled={isLockedIn}
            className="w-full px-6 py-4 bg-indigo-600 text-white text-xl font-bold rounded-lg
                     hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105
                     disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Lock className="w-5 h-5" />
            Lock In Settings
          </button>
        )}
        
        {isPlaying && (
          <button
            onClick={onCashout}
            className="w-full px-6 py-4 bg-emerald-600 text-white text-xl font-bold rounded-lg
                     hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Cash Out
          </button>
        )}
        
        {gameOver && (
          <button
            onClick={onNewGame}
            className="w-full px-6 py-4 bg-blue-600 text-white text-xl font-bold rounded-lg
                     hover:bg-blue-700 transition-all duration-300 transform hover:scale-105
                     flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            New Game
          </button>
        )}
      </div>
    </div>
  );
}