export const calculateOdds = (totalBlocks: number, mineCount: number, revealedCount: number): number => {
  const remainingBlocks = totalBlocks - revealedCount;
  const remainingMines = mineCount;
  return (remainingBlocks - remainingMines) / remainingBlocks;
};

export const calculateMultiplier = (
  baseMultiplier: number,
  riskFactor: number,
  successfulClicks: number
): number => {
  return baseMultiplier * Math.pow(1 + riskFactor, successfulClicks);
};

export const calculatePotentialPayout = (stake: number, multiplier: number): number => {
  return stake * multiplier;
};