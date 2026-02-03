
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
    points: ['User-Generated Reviews', 'Visual Storytelling', 'Short-Form UGC Reels']
  },
  {
    title: 'Video Creatives',
    description: 'Engaging motion content for the digital age.',
    points: ['Short-form Reels', 'Long form videos', 'Product Shoots']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // UGC Shorts
  { id: 'ugc-1', title: 'Cabai Performance Ad', category: 'UGC Shorts', tag: 'Automotive UGC', imageUrl: 'https://www.dropbox.com/scl/fi/kl76yujjb73g0ud7dimy4/cabai-ad-2-only-triming_HrwPKTRi_gnzu0a.mp4?rlkey=jysy2q6jo5om4jje7ghhe656g&st=ebbbhcxj&raw=1', type: 'video' },
  { id: 'ugc-2', title: 'Coshot Visual', category: 'UGC Shorts', tag: 'Product UGC', imageUrl: 'https://www.dropbox.com/scl/fi/ysxofvhegxpcabelop0j1/17_nov_coshot_v1_1_cyqrkg.mp4?rlkey=p3mo9u2afgwmo5mdy6uv2huc3&st=xhu3kjxq&raw=1', type: 'video' },
  { id: 'ugc-3', title: 'D2C Marketing Strategy', category: 'UGC Shorts', tag: 'Marketing', imageUrl: 'https://www.dropbox.com/scl/fi/pkhe7rw8f1p8tgbyfgat4/d2cwithgirish_short_1_el9ggw.mp4?rlkey=gqac957aa5myp37kweah4ohkh&st=a6rctdyn&raw=1', type: 'video' },
  { id: 'ugc-4', title: 'Basttl Media', category: 'UGC Shorts', tag: 'Automotive', imageUrl: 'https://www.dropbox.com/scl/fi/pe9e9qighljxrhujy0vhy/basttl_media_v1_1_rka8s3.mp4?rlkey=plzmbt0icama3t348y0v6lx06&st=1bzeojm9&raw=1', type: 'video' },
  { id: 'ugc-5', title: 'Void Craft Showcase', category: 'UGC Shorts', tag: 'Studio', imageUrl: 'https://www.dropbox.com/scl/fi/1q8yb7rydu1wcbgkr97uv/12_NOV_VOID_CRAFT_V2_2_qy5brd.mp4?rlkey=84xyczqfmvwnny6upliq2h0em&st=193lrxy2&raw=1', type: 'video' },
  { id: 'ugc-6', title: 'QPO Max Car Mats', category: 'UGC Shorts', tag: 'Automotive UGC', imageUrl: 'https://www.dropbox.com/scl/fi/s301mm74sn52a5siv139t/Copy_of_Copy_of_QPO_MAX_CAR_MATS_MG_SAFARI_PR-2_FINAL_2_bm4wvq.mp4?rlkey=0w77kyivavbfg357g0bjhyuc9&st=3jrjxm24&raw=1', type: 'video' },

  // Product Shoots
  { id: 'prod-1', title: 'Motion Product Shoot', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/dtcmqsnt65sqikvm1bpel/compressed-video_gljowe.mp4?rlkey=bwnvz8wfcq2u691c2kwz90i7e&st=x7itulni&raw=1', type: 'video' },
  { id: 'prod-2', title: 'Premium Bottle Shoot', category: 'Product Shoots', tag: 'Product Video', imageUrl: 'https://www.dropbox.com/scl/fi/rc0skslmtppozgt9t64bj/P_5_kjhvsh.mov?rlkey=ctwd192sft0mlczt8kikzskhr&st=5mqckw2i&raw=1', type: 'video' },
  { id: 'prod-3', title: 'Instadekor Visual V1', category: 'Product Shoots', tag: 'Home Decor', imageUrl: 'https://www.dropbox.com/scl/fi/bxrbnq0bujs6l480y4zmt/19_NOV_INSTADEKOR_V1_1_n0ijrc.mp4?rlkey=53r8yemlbb8i7vod7b45xm0d2&st=lyjhpylz&raw=1', type: 'video' },
  { id: 'prod-4', title: 'Beauty Product Highlight', category: 'Product Shoots', tag: 'Beauty', imageUrl: 'https://www.dropbox.com/scl/fi/ek2batf1ggbwb1pp0ce9n/p_1_vdynbq.mov?rlkey=fz9j4d3cf19d242v3pnuls1tp&st=rp9227m0&raw=1', type: 'video' },
  { id: 'prod-5', title: 'Instadekor Visual V3', category: 'Product Shoots', tag: 'Interior', imageUrl: 'https://www.dropbox.com/scl/fi/z7prfogca4fo709ido21h/19_NOV_INSTADEKOR_3_V1_1_zb9z61.mp4?rlkey=qzhh7dnu3osxcxy6hecu06g2v&st=1xcai27i&raw=1', type: 'video' },
  { id: 'prod-6', title: 'Product Motion V2', category: 'Product Shoots', tag: 'Product Video', imageUrl: 'https://www.dropbox.com/scl/fi/dtcmqsnt65sqikvm1bpel/compressed-video_gljowe.mp4?rlkey=bwnvz8wfcq2u691c2kwz90i7e&st=49p4698l&raw=1', type: 'video' },

  // Informative
  { id: 'info-1', title: 'Auto India Update', category: 'Informative', tag: 'Auto News', imageUrl: 'https://www.dropbox.com/scl/fi/39g6x4u1p4z9v8mf4hur3/auto-india-03-09-2025-1.mp4?rlkey=bo14ghmf8r1spqa6bb5v09fk8&st=rrn5y0l0&raw=1', type: 'video' },
  { id: 'info-2', title: 'Market Insights Short', category: 'Informative', tag: 'Finance', imageUrl: 'https://www.dropbox.com/scl/fi/k4eziq1ki235htajmrkcx/auto-india-short-28-10-2025-1.mp4?rlkey=ye28h6es7vj7nnpsd2irbvlh4&st=5db37b7x&raw=1', type: 'video' },
  { id: 'info-3', title: 'KTM Bike Review', category: 'Informative', tag: 'Automotive Review', imageUrl: 'https://www.dropbox.com/scl/fi/6l8v8ytwle5k8hn92ky0p/basttl-auto-ktm-1.mp4?rlkey=spwarp25r981l6odbnffk3707&st=ybenl60l&raw=1', type: 'video' },
  { id: 'info-4', title: 'GST Auto Guide', category: 'Informative', tag: 'Business', imageUrl: 'https://www.dropbox.com/scl/fi/8lwjaxl19mivt0hd1xyn3/gst-autoindia-1.mp4?rlkey=l5jsk85ah4daxe6t8ozed8wbw&st=it4x58x6&raw=1', type: 'video' },
  { id: 'info-5', title: 'Best Selling Cars Sept', category: 'Informative', tag: 'Statistics', imageUrl: 'https://www.dropbox.com/scl/fi/mvc9ddd35r3rv32cs08ct/top-5-best-selling-cars-sep.2025.mp4-short-1-1.mp4?rlkey=6p6opozrjdsz70iatx51id6j8&st=5pjnrt5g&raw=1', type: 'video' },
  { id: 'info-6', title: 'Top 6 November Cars', category: 'Informative', tag: 'Auto Review', imageUrl: 'https://www.dropbox.com/scl/fi/ylxcs8uy6480ekqc0xc9g/Top-6-november-auto-india-31-10-2025-1.mp4?rlkey=r789p8f1ng0kajxdghbhqvpbf&st=hfe90kjx&raw=1', type: 'video' },

  // Graphic
  { id: 'graph-1', title: 'Graphic Design Asset 1', category: 'Graphic', tag: 'Branding', imageUrl: 'https://www.dropbox.com/scl/fi/xf8e0opvzl9cuj2br27q8/1.png?rlkey=rrfiw65n8aevp7xbekvssoejl&st=1dqx77qu&raw=1', type: 'image' },
  { id: 'graph-2', title: 'Graphic Design Asset 2', category: 'Graphic', tag: 'Social Media', imageUrl: 'https://www.dropbox.com/scl/fi/9vwgpls3er863ovr45n7q/2.png?rlkey=hg69l35r63iaj4pt9stekbq55&st=xtxkyq3t&raw=1', type: 'image' },
  { id: 'graph-3', title: 'Graphic Design Asset 3', category: 'Graphic', tag: 'Ad Design', imageUrl: 'https://www.dropbox.com/scl/fi/xba3pfflxh4i7ixvx45d5/3.png?rlkey=1bd3ug8o01hmynv51ymg9c5eq&st=eesgakwl&raw=1', type: 'image' },
  { id: 'graph-4', title: 'Graphic Design Asset 4', category: 'Graphic', tag: 'Design', imageUrl: 'https://www.dropbox.com/scl/fi/e5ninf7c2qp4svudplznv/5.png?rlkey=qu1qklp63rh6slmc9348jgszv&st=9x36b0n8&raw=1', type: 'image' },
  { id: 'graph-5', title: 'Graphic Design Asset 5', category: 'Graphic', tag: 'Branding', imageUrl: 'https://www.dropbox.com/scl/fi/c11yjy1nn00axroxayd6p/6.png?rlkey=smvktg0sf0genl17ajp59jgje&st=hhlx0tmj&raw=1', type: 'image' },
  { id: 'graph-6', title: 'Graphic Design Asset 6', category: 'Graphic', tag: 'Creative', imageUrl: 'https://www.dropbox.com/scl/fi/3jbazfhuril9hacrw5hhk/Untitled-design-2026-01-06T195416.148.png?rlkey=ei857butxj2tzohwrm8ve2xas&st=6l3sqklw&raw=1', type: 'image' },
];
