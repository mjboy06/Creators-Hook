
import { PortfolioItem, ServiceItem } from './types.ts';

export const COLORS = {
  primaryBlue: '#2563eb',
  deepBlack: '#0a0a0a',
  cleanWhite: '#ffffff',
};

export const LOGOS = [
  'Creators Hook'
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Graphic Projects',
    description: 'Striking visuals that define brand authority.',
    points: ['Social Media Posts', 'Brand Identity Design', 'YouTube Thumbnails']
  },
  {
    title: 'UGC Content',
    description: 'Authentic connection through real storytelling.',
    points: ['User-Generated Reviews', 'Visual Storytelling', 'Short-Form UGC Reels']
  },
  {
    title: 'Video Creatives',
    description: 'Engaging motion content for the digital age.',
    points: ['Short-form Reels', 'Long form videos', 'Product Shoots']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // UGC Shorts (Cloudinary Embeds)
  { id: 'ugc-1', title: 'UGC Performance 1', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=ugc_6_tmimtr', type: 'video' },
  { id: 'ugc-2', title: 'UGC Performance 2', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=ugc_4_oeh7lg', type: 'video' },
  { id: 'ugc-3', title: 'UGC Performance 3', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=ugc_3_aphmyo', type: 'video' },
  { id: 'ugc-4', title: 'UGC Performance 4', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=UGC_5_cxduv0', type: 'video' },
  { id: 'ugc-5', title: 'UGC Performance 5', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=ugc_1_h6xl6o', type: 'video' },
  { id: 'ugc-6', title: 'UGC Performance 6', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=Ugc_2_ya2kmr', type: 'video' },

  // Product Shoots (Cloudinary Embeds)
  { id: 'prod-1', title: 'Product Showcase 1', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_3_hjonv8', type: 'video' },
  { id: 'prod-2', title: 'Product Showcase 2', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_1_fqrkb0', type: 'video' },
  { id: 'prod-3', title: 'Product Showcase 3', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_5_uh22md', type: 'video' },
  { id: 'prod-4', title: 'Product Showcase 4', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_6_p0u4to', type: 'video' },
  { id: 'prod-5', title: 'Product Showcase 5', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_2_mw5bte', type: 'video' },
  { id: 'prod-6', title: 'Product Showcase 6', category: 'Product Shoots', tag: 'Product', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=pr_4_xy8uxu', type: 'video' },

  // Informative (Cloudinary Embeds)
  { id: 'info-1', title: 'Informative Clip 1', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_5_uxlt16', type: 'video' },
  { id: 'info-2', title: 'Informative Clip 2', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_4_enqh3w', type: 'video' },
  { id: 'info-3', title: 'Informative Clip 3', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_6_n59vyv', type: 'video' },
  { id: 'info-4', title: 'Informative Clip 4', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_1_xsgwhx', type: 'video' },
  { id: 'info-5', title: 'Informative Clip 5', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_2_m5obcw', type: 'video' },
  { id: 'info-6', title: 'Informative Clip 6', category: 'Informative', tag: 'Insight', imageUrl: 'https://player.cloudinary.com/embed/?cloud_name=dzdfz5ron&public_id=in_3_wyriix', type: 'video' },

  // Graphics (Cloudinary Images)
  { id: 'graph-1', title: 'Creative Graphic 1', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638433/3_klw665.png', type: 'image' },
  { id: 'graph-2', title: 'Creative Graphic 2', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638431/6_fmzabt.png', type: 'image' },
  { id: 'graph-3', title: 'Creative Graphic 3', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638431/Untitled_design_-_2026-01-06T195416.148_tmh4ma.png', type: 'image' },
  { id: 'graph-4', title: 'Creative Graphic 4', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638413/1_vl6ypo.png', type: 'image' },
  { id: 'graph-5', title: 'Creative Graphic 5', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638413/2_iwldtg.png', type: 'image' },
  { id: 'graph-6', title: 'Creative Graphic 6', category: 'Graphic', tag: 'Design', imageUrl: 'https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638413/5_scixlw.png', type: 'image' },
];