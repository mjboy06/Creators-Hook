
import { PortfolioItem, ServiceItem } from './types.ts';

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
    points: ['Social Media Posts', 'Brand Identity Design', 'YouTube Thumbnails']
  },
  {
    title: 'UGC Content',
    description: 'Authentic connection through real storytelling.',
    points: ['User-Generated Reviews', 'Visual Storytelling', 'Product Walkthroughs']
  },
  {
    title: 'Video Creatives',
    description: 'Engaging motion content for the digital age.',
    points: ['Short-form Reels', 'Long form videos', 'Product Shoots']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // UGC Shorts
  { id: 'ugc-1', title: 'QPO Max Car Mats', category: 'UGC Shorts', tag: 'Automotive UGC', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498268/Copy_of_Copy_of_QPO_MAX_CAR_MATS_MG_SAFARI_PR-2_FINAL_2_bm4wvq.mp4', type: 'video' },
  { id: 'ugc-2', title: 'Void Craft Studios V2', category: 'UGC Shorts', tag: 'Studio UGC', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498272/12_NOV_VOID_CRAFT_V2_2_qy5brd.mp4', type: 'video' },
  { id: 'ugc-3', title: 'D2C Marketing Short', category: 'UGC Shorts', tag: 'D2C Strategy', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498286/d2cwithgirish_short_1_el9ggw.mp4', type: 'video' },
  { id: 'ugc-4', title: 'Coshot Visual V1', category: 'UGC Shorts', tag: 'Product UGC', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498279/17_nov_coshot_v1_1_cyqrkg.mp4', type: 'video' },
  { id: 'ugc-5', title: 'Basttl Media Campaign', category: 'UGC Shorts', tag: 'Influencer Style', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498280/basttl_media_v1_1_rka8s3.mp4', type: 'video' },
  { id: 'ugc-6', title: 'Cabai Ad Performance', category: 'UGC Shorts', tag: 'Conversion Focus', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498581/cabai-ad-2-only-triming_HrwPKTRi_gnzu0a.mp4', type: 'video' },

  // Product Shoots
  { id: 'prod-1', title: 'Compressed Motion Shoot', category: 'Product Shoots', tag: 'Product Video', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497416/compressed-video_gljowe.mp4', type: 'video' },
  { id: 'prod-2', title: 'Ganesh Ji Murti Show', category: 'Product Shoots', tag: 'Decor', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497449/ganesh_ji_murti_1_hx3atn.mp4', type: 'video' },
  { id: 'prod-3', title: 'Instadekor Visual V1', category: 'Product Shoots', tag: 'Interior', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497473/19_NOV_INSTADEKOR_V1_1_n0ijrc.mp4', type: 'video' },
  { id: 'prod-4', title: 'Instadekor Visual V3', category: 'Product Shoots', tag: 'Premium Decor', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497528/19_NOV_INSTADEKOR_3_V1_1_zb9z61.mp4', type: 'video' },
  { id: 'prod-5', title: 'Trimurty V2 Showcase', category: 'Product Shoots', tag: 'Sculpture', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497535/13_NOV_TRIMURTY_V2_1_bmxmht.mp4', type: 'video' },
  { id: 'prod-6', title: 'Buddha Murti Visual', category: 'Product Shoots', tag: 'Zen Decor', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497574/BUDDHA_ji_murti_1_jh76h1.mp4', type: 'video' },

  // Informative
  { id: 'info-1', title: 'Basttl Auto KTM Review', category: 'Informative', tag: 'Automotive Info', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496447/basttl_auto_ktm_1_j5a4r9.mp4', type: 'video' },
  { id: 'info-2', title: 'GST AutoIndia Guide', category: 'Informative', tag: 'Tax Guide', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496453/gst_autoindia_1_zin1md.mp4', type: 'video' },
  { id: 'info-3', title: 'Auto India Update 2025', category: 'Informative', tag: 'Latest News', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496467/auto_india_03-09-2025_1_n4wnxe.mp4', type: 'video' },
  { id: 'info-4', title: 'Auto India Oct 28 Short', category: 'Informative', tag: 'Market Insights', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496484/auto_india_short_28-10-2025_1_w8yy26.mp4', type: 'video' },
  { id: 'info-5', title: 'Best Selling Cars Sept', category: 'Informative', tag: 'Data Focus', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496490/top_5_best_selling_cars_sep.2025.mp4_short_1_1_f3ijrc.mp4', type: 'video' },
  { id: 'info-6', title: 'Top 6 November Cars', category: 'Informative', tag: 'Auto Review', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496492/Top_6_november_-_auto_india_31-10-2025_1_dktalr.mp4', type: 'video' },

  // Graphic
  { id: 'graph-1', title: 'Premium Branding Asset 1', category: 'Graphic', tag: 'Brand Identity', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494330/1_kupej1.png', type: 'image' },
  { id: 'graph-2', title: 'Social Media Graphic 3', category: 'Graphic', tag: 'Ad Design', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494327/3_usd8rg.png', type: 'image' },
  { id: 'graph-3', title: 'Product Layout 5', category: 'Graphic', tag: 'D2C Layout', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494325/5_ltmoa7.png', type: 'image' },
  { id: 'graph-4', title: 'Minimalist Poster 2', category: 'Graphic', tag: 'Clean Design', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494325/2_gz6ilc.png', type: 'image' },
  { id: 'graph-5', title: 'Typography Concept 6', category: 'Graphic', tag: 'Modern Type', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494325/6_zjrz4r.png', type: 'image' },
  { id: 'graph-6', title: 'Visual Ad Asset 4', category: 'Graphic', tag: 'Conversion Ad', imageUrl: 'https://res.cloudinary.com/djwiyyxkm/image/upload/v1767494325/4_baf0e5.png', type: 'image' },
];
