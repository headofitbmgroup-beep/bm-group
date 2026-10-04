// Single source of truth for all sites. ALL COPY BELOW IS PLACEHOLDER until
// replaced with the exact content from https://www.bmgroupuae.com/.
export const GROUP = { name: 'BM Group', domain: 'bmgroupuae.com', phone: '+971 00 000 0000', email: 'info@bmgroupuae.com', address: 'United Arab Emirates' };

export const sites = {
  main: {
    dir: 'main', domain: 'bmgroupuae.com', title: 'BM Group UAE',
    accent: '#0f3d63', kicker: 'BM Group · United Arab Emirates',
    headline: 'One group. Many ways we build, furnish and shade your world.',
    sub: 'BM Group brings together specialist businesses across shading, media and lab furniture, each with its own home.',
    about: 'PLACEHOLDER: replace with the About text from bmgroupuae.com.',
    features: [], stats: [['10+', 'Years of experience'], ['3', 'Business verticals'], ['UAE', 'Wide service'], ['100%', 'Commitment']],
    isMain: true,
  },
  shade: {
    dir: 'shade', domain: 'bmshadeuae.com', title: 'BM Shade',
    accent: '#c2410c', kicker: 'BM Shade',
    headline: 'Shade structures designed for the UAE sun.',
    sub: 'Car parks, pergolas, sails and outdoor shading, designed, fabricated and installed.',
    about: 'PLACEHOLDER: replace with the Shade vertical text from bmgroupuae.com.',
    features: [['Car Park Shades', 'Durable tensile structures for parking areas.'], ['Pergolas & Canopies', 'Custom outdoor living spaces.'], ['Shade Sails', 'Modern, UV-rated fabric shading.'], ['Installation & Maintenance', 'End-to-end project delivery.']],
    stats: [['UV', 'Rated fabrics'], ['Custom', 'Designs'], ['Turnkey', 'Installation'], ['UAE', 'Wide']],
  },
  media: {
    dir: 'media', domain: 'bmmediauae.com', title: 'BM Media',
    accent: '#6d28d9', kicker: 'BM Media',
    headline: 'Media that gets your brand seen.',
    sub: 'Advertising, content and digital campaigns for UAE businesses.',
    about: 'PLACEHOLDER: replace with the Media vertical text from bmgroupuae.com.',
    features: [['Advertising', 'Outdoor and print campaigns.'], ['Digital Marketing', 'Social, search and performance.'], ['Content Production', 'Photo, video and branding.'], ['Brand Strategy', 'Positioning that lasts.']],
    stats: [['360°', 'Campaigns'], ['Digital', 'First'], ['Creative', 'Studio'], ['UAE', 'Reach']],
  },
  labfurniture: {
    dir: 'labfurniture', domain: 'bmlabfurnitureuae.com', title: 'BM Lab Furniture',
    accent: '#0e7490', kicker: 'BM Lab Furniture',
    headline: 'Laboratory furniture built for performance and safety.',
    sub: 'Lab benches, fume hoods, storage and complete laboratory fit-outs.',
    about: 'PLACEHOLDER: replace with the Lab Furniture vertical text from bmgroupuae.com.',
    features: [['Lab Benches', 'Chemical-resistant worktops.'], ['Fume Hoods', 'Safe, compliant extraction.'], ['Storage Systems', 'Cabinets for chemicals and equipment.'], ['Turnkey Fit-out', 'Design to commissioning.']],
    stats: [['Safe', 'By design'], ['Custom', 'Layouts'], ['Turnkey', 'Delivery'], ['UAE', 'Wide']],
  },
};
