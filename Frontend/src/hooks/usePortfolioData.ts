import data from '../data/portfolio.json';

export type PortfolioData = typeof data;

export function usePortfolioData(): PortfolioData {
  return data;
}
