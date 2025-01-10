export interface GameState {
  blocks: boolean[];
  revealed: boolean[];
  gameOver: boolean;
  score: number;
  stake: number;
  multiplier: number;
  potentialPayout: number;
  mineCount: number;
  balance: number;
  isPlaying: boolean;
  isLockedIn: boolean;
}

export interface GameSettings {
  gridSize: number;
  maxMines: number;
  baseMultiplier: number;
  riskFactor: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}