
import { PortfolioItem, ServiceItem } from './types';

export const COLORS = {
  primaryBlue: '#2563eb',
  deepBlack: '#0a0a0a',
  cleanWhite: '#ffffff',
};

export const LOGOS = [
  'Basttl Auto India',
  'Void Craft Studios',
  'The Founder Show',
  'Cabai',
  'King Dry Fruits',
  'Ozzo',
  'Doorderma',
  'Vasavi Group'
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Graphic Projects',
    description: 'Striking visuals that define brand authority.',
    points: ['Social Media Posts', 'Product Shoots', 'Brand Identity Design']
  },
  {
    title: 'UGC Content',
    description: 'Authentic connection through real storytelling.',
    points: ['User-Generated Reviews', '3D Animations', 'Visual Storytelling']
  },
  {
    title: 'Video Creatives',
    description: 'Engaging motion content for the digital age.',
    points: ['YouTube Thumbnails', 'Short-form Reels', 'Automotive Long-form']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Category 1: UGC Shorts (Real Voices & Influence) - Using Cloudinary Direct Links
  { 
    id: 'ugc-cloudinary-1', 
    title: 'D2C Marketing Excellence', 
    category: 'UGC Shorts', 
    tag: 'Marketing', 
    imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767486993/d2cwithgirish_short_kibhjg.mp4', 
    type: 'video' 
  },
  { 
    id: 'ugc-cloudinary-2', 
    title: 'Eagle Performance Motion', 
    category: 'UGC Shorts', 
    tag: 'Motion Graphics', 
    imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767487004/eagle_08-11-25-2x-RIFE-RIFE4.0-120fps_vxdfam.mp4', 
    type: 'video' 
  },
  { id: 'ugc-3', title: 'High-end Visual Storytelling', category: 'UGC Shorts', tag: '3D Animations', imageUrl: '1RNFR8gNkgUHEi4woaWU-ioqJDrSpOGUS', type: 'video' },
  { id: 'ugc-4', title: 'Cabai Life Platform', category: 'UGC Shorts', tag: 'Lifestyle & Apps', imageUrl: '19ceiw1XITpoByXgQkgbQhw3TP7kvVKUc', type: 'video' },

  // Category 2: Product Shoot Projects
  { id: 'prod-1', title: 'Instadekor Home Decor', category: 'Product Shoots', tag: 'Branding', imageUrl: '1BK4KyXkng0hGrAAUG6febKzxXmvlysZo', type: 'video' },
  { id: 'prod-2', title: 'King Premium Snacks', category: 'Product Shoots', tag: 'Food & Taste', imageUrl: '1eGCrpeyFbDtfdw9JwiGa8Ksp5LuOLYct', type: 'video' },
  { id: 'prod-3', title: 'Cabai Car Perfume', category: 'Product Shoots', tag: 'Car Accessories', imageUrl: '1Iv_C1igyoHOXDDTcnb98xAG2C_UCZjmy', type: 'video' },
  { id: 'prod-4', title: 'Ozzo Performance Light', category: 'Product Shoots', tag: 'Lighting', imageUrl: '1RNFR8gNkgUHEi4woaWU-ioqJDrSpOGUS', type: 'video' },

  // Category 3: Informative Automotive Projects
  { id: 'auto-1', title: 'Tata Curvv: Coupe SUV', category: 'Automotive', tag: 'Market Leader', imageUrl: '1TynCPvLeQB_i2NZ91WawXCEEDLfd36TR', type: 'video' },
  { id: 'auto-2', title: 'Tata Sierra: Deep Dive', category: 'Automotive', tag: 'Upcoming 2025', imageUrl: '1gq2Txru6XnAmdNwOOhD-0_0GvDV6dJ3D', type: 'video' },
  { id: 'auto-3', title: 'Xiaomi SU7 / YUZ Max', category: 'Automotive', tag: 'High-Tech EV', imageUrl: '1zxMt13dNcUyQfaIdMyjSTzDssu_-NU7p', type: 'video' },
  { id: 'auto-4', title: 'Top 5 Best Selling Cars', category: 'Automotive', tag: 'September 2025', imageUrl: '1bcTKLP073qqwbeknYZvt3esBaGQqEI08', type: 'video' },
  { id: 'auto-5', title: 'Top 5 Affordable Diesel', category: 'Automotive', tag: 'Market Insight', imageUrl: '1lN8vk8JPwJ6G1az4dngVnI1AGORZBOjt', type: 'video' },
  { id: 'auto-6', title: 'Hyundai Venue vs Brezza', category: 'Automotive', tag: 'Budget SUV', imageUrl: '1iMzi5CYjWQn32kWgqrYHzYkWGiG6wL_Z', type: 'video' },

  // Category 4: Graphics
  { id: 'graph-1', title: 'Cabai Redefining Freshness', category: 'Graphics', tag: 'Car Perfume', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { id: 'graph-2', title: 'Ozzo Surface Light Ads', category: 'Graphics', tag: 'Lighting Design', imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { id: 'graph-3', title: 'King Almond Badam Pack', category: 'Graphics', tag: 'FMCG Design', imageUrl: 'https://images.unsplash.com/photo-1504470695779-75300268aa0e?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { id: 'graph-4', title: 'Vgyapun Black Friday', category: 'Graphics', tag: 'Billboard', imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800', type: 'image' },
];
