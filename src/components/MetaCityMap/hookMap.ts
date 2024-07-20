import { useMemo } from 'react';

// Define an interface for the rank
interface RankColor {
  [key: string]: string;
}

// Define the colors for each rank
const rankColors: RankColor = {
  diamond: '#490254',  // Light green
  ruby: '#81001F',     // Light red
  gold: '#7B5010',     // Gold yellow
  sapphire: '#146377', // Dark blue
  silver: '#3B3A4C',   // Silver grey
};

// Custom hook to get color based on rank
const useRankColor = (rank: string): string => {
  return rankColors[rank.toLowerCase()] || '#3B3A4C';
};

export default useRankColor;
