import React, { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Modal } from './Modal';

interface TopBarProps {
  balance: number;
  onDeposit: (amount: number) => void;
  isPlaying: boolean;
  onCashout: () => void;
}

export function TopBar({ balance, onDeposit, isPlaying, onCashout }: TopBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (amount > 0) {
      onDeposit(amount);
      setDepositAmount('');
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-b border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Mines Game</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg">
              <Wallet className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-bold">${balance.toFixed(2)}</span>
            </div>
            
            {isPlaying ? (
              <button
                onClick={onCashout}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg
                         transition-colors duration-200"
              >
                Cash Out
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg
                         transition-colors duration-200"
              >
                Deposit
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Deposit Funds</h2>
          <div className="mb-6">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg text-xl
                       placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              min="0"
              step="0.01"
            />
          </div>
          <button
            onClick={handleDeposit}
            disabled={!depositAmount || parseFloat(depositAmount) <= 0}
            className="w-full px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg
                     hover:bg-indigo-700 transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Deposit
          </button>
        </div>
      </Modal>
    </>
  );
}