
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  tag: string;
  type: 'image' | 'video';
}

export interface ServiceItem {
  title: string;
  description: string;
  points: string[];
}
