
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
  { id: 'ugc-1', title: 'Performance UGC Ad 1', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/225ed0yebh2dcr4fl8rq1/ugc-1.mp4?rlkey=da7dlwkcjoyalivin5k01qyq1&st=tqrq4ali&raw=1', type: 'video' },
  { id: 'ugc-2', title: 'Performance UGC Ad 2', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/ymquvocbje33wemf9xcx5/Ugc-2.mp4?rlkey=aqu0uvdlf9yv8x4qi9srrdgz3&st=6lbsfprn&raw=1', type: 'video' },
  { id: 'ugc-3', title: 'Performance UGC Ad 3', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/ddhqvd2gsgpej3ez73wpc/ugc-3.mp4?rlkey=pqd27fw9j5s3x1i6onf5t6rt8&st=8j173h4f&raw=1', type: 'video' },
  { id: 'ugc-4', title: 'Performance UGC Ad 4', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/jw8qyj9qvz0ju0zae39no/ugc-4.mp4?rlkey=snkswbncjegafykucd8uuhhf5&st=r6cbjq43&raw=1', type: 'video' },
  { id: 'ugc-5', title: 'Performance UGC Ad 5', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/s2yrb6u1bp8q75hea4iow/UGC-5.mp4?rlkey=isyk8km3uu6n74z8cvyzi013a&st=vksb6rhn&raw=1', type: 'video' },
  { id: 'ugc-6', title: 'Performance UGC Ad 6', category: 'UGC Shorts', tag: 'UGC', imageUrl: 'https://www.dropbox.com/scl/fi/lhltyo3a6e7nnc6wmik8j/ugc-6.mp4?rlkey=2j4xt0ekx9vphqr2q9bzebui4&st=9a7fmti8&raw=1', type: 'video' },

  // Product Shoots
  { id: 'prod-1', title: 'Premium Product Shoot 1', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/aroph8acrhbnnjw9u3cke/pr-1.mp4?rlkey=u94s2v91ijk3q0c145lc4a98o&st=jdyonbdi&raw=1', type: 'video' },
  { id: 'prod-2', title: 'Premium Product Shoot 2', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/ol4bogv8xbkkobc8w9ylt/pr-2.mp4?rlkey=mandak9di8l7dhj1wpcmq0ubs&st=7jgijpci&raw=1', type: 'video' },
  { id: 'prod-3', title: 'Premium Product Shoot 3', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/8uhou8vh9zzouijam6n6k/pr-3.mp4?rlkey=m0dgawb3ep86d0z33e2yuicrz&st=ke7rmwjh&raw=1', type: 'video' },
  { id: 'prod-4', title: 'Premium Product Shoot 4', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/hihquqpr8c3ap5en2v1vl/pr-4.mp4?rlkey=r78xgsiyv4z6ldj2g0l0t7srd&st=b2it37pa&raw=1', type: 'video' },
  { id: 'prod-5', title: 'Premium Product Shoot 5', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/y7ylmmqxbkivqcex93l5z/pr-5.mp4?rlkey=ofvom5c55asl50d1x3v9xabi5&st=ajqe444z&raw=1', type: 'video' },
  { id: 'prod-6', title: 'Premium Product Shoot 6', category: 'Product Shoots', tag: 'Cinematic', imageUrl: 'https://www.dropbox.com/scl/fi/kc8n50yboumuoyku6ywre/pr-6.mp4?rlkey=eesn57f8tkihig5uq5r9brfe9&st=awdpd064&raw=1', type: 'video' },

  // Informative
  { id: 'info-1', title: 'Informative Content 1', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/6tv1ul0lwdbb5bycjzent/in-1.mp4?rlkey=x8zy4j7ueqgp6stze6fvudqln&st=vp13rpq5&raw=1', type: 'video' },
  { id: 'info-2', title: 'Informative Content 2', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/p13e8waue2t6su3oc7q8v/in-2.mp4?rlkey=rita2fiovcgopxpldtw9tthfa&st=fqpcymsc&raw=1', type: 'video' },
  { id: 'info-3', title: 'Informative Content 3', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/mhhn1u3v8qhzxkr759bth/in-3.mp4?rlkey=gg2gghi08glsy08f8b9lqmk68&st=ndje79kz&raw=1', type: 'video' },
  { id: 'info-4', title: 'Informative Content 4', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/5lj0yar5c8xkm4zw87ath/in-4.mp4?rlkey=yrcy1oemsybfhww8l6c4miijz&st=33fskazx&raw=1', type: 'video' },
  { id: 'info-5', title: 'Informative Content 5', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/3ls879db665hncowegutn/in-5.mp4?rlkey=jn5z1gho09nr3azddtj993o3p&st=s9h7458k&raw=1', type: 'video' },
  { id: 'info-6', title: 'Informative Content 6', category: 'Informative', tag: 'Insights', imageUrl: 'https://www.dropbox.com/scl/fi/ugswlzr2ylufzohi32msq/in-6.mp4?rlkey=j8htm7jtry7u5spk7o5zlfv6h&st=9hl08hi6&raw=1', type: 'video' },

  // Graphic
  { id: 'graph-1', title: 'Graphic Design Asset 1', category: 'Graphic', tag: 'Branding', imageUrl: 'https://www.dropbox.com/scl/fi/xf8e0opvzl9cuj2br27q8/1.png?rlkey=rrfiw65n8aevp7xbekvssoejl&st=1dqx77qu&raw=1', type: 'image' },
  { id: 'graph-2', title: 'Graphic Design Asset 2', category: 'Graphic', tag: 'Social Media', imageUrl: 'https://www.dropbox.com/scl/fi/9vwgpls3er863ovr45n7q/2.png?rlkey=hg69l35r63iaj4pt9stekbq55&st=xtxkyq3t&raw=1', type: 'image' },
  { id: 'graph-3', title: 'Graphic Design Asset 3', category: 'Graphic', tag: 'Ad Design', imageUrl: 'https://www.dropbox.com/scl/fi/xba3pfflxh4i7ixvx45d5/3.png?rlkey=1bd3ug8o01hmynv51ymg9c5eq&st=eesgakwl&raw=1', type: 'image' },
  { id: 'graph-4', title: 'Graphic Design Asset 4', category: 'Graphic', tag: 'Design', imageUrl: 'https://www.dropbox.com/scl/fi/e5ninf7c2qp4svudplznv/5.png?rlkey=qu1qklp63rh6slmc9348jgszv&st=9x36b0n8&raw=1', type: 'image' },
  { id: 'graph-5', title: 'Graphic Design Asset 5', category: 'Graphic', tag: 'Branding', imageUrl: 'https://www.dropbox.com/scl/fi/c11yjy1nn00axroxayd6p/6.png?rlkey=smvktg0sf0genl17ajp59jgje&st=hhlx0tmj&raw=1', type: 'image' },
  { id: 'graph-6', title: 'Graphic Design Asset 6', category: 'Graphic', tag: 'Creative', imageUrl: 'https://www.dropbox.com/scl/fi/3jbazfhuril9hacrw5hhk/Untitled-design-2026-01-06T195416.148.png?rlkey=ei857butxj2tzohwrm8ve2xas&st=6l3sqklw&raw=1', type: 'image' },
];
