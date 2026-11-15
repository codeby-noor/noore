export interface CategoryInfo {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  highlightText: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'abayas',
    slug: 'abayas',
    name: 'Abayas',
    subtitle: 'Haute Modesty & Tailored Silhouettes',
    description: 'Impeccably cut from Japanese crepe, washed linen, and Medina silk. Designed for movement and effortless grace.',
    image: 'https://images.unsplash.com/photo-1772474500365-c2c520545f44?auto=format&fit=crop&w=1000&q=80',
    itemCount: 8,
    highlightText: 'EXPLORE ABAYAS'
  },
  {
    id: 'hijabs',
    slug: 'hijabs',
    name: 'Hijabs',
    subtitle: 'Modal, Chiffon, & Medina Silk',
    description: 'Cloud-soft textures, precision laser-cut hems, and zero-slip finishes in timeless neutral tones.',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=1000&q=80',
    itemCount: 6,
    highlightText: 'SHOP HIJABS'
  },
  {
    id: 'sets',
    slug: 'sets',
    name: 'Two-Piece Sets',
    subtitle: 'Effortless Coordinated Ensembles',
    description: 'Monochromatic tunics and fluid wide-leg trousers tailored for contemporary daily living.',
    image: 'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?auto=format&fit=crop&w=1000&q=80',
    itemCount: 4,
    highlightText: 'VIEW SETS'
  },
  {
    id: 'essentials',
    slug: 'essentials',
    name: 'Modest Essentials',
    subtitle: 'Underdresses, Tunics & Accessories',
    description: 'Foundational slip dresses, bamboo undercaps, matte magnets, and luxury styling accessories.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80',
    itemCount: 6,
    highlightText: 'SHOP ESSENTIALS'
  },
  {
    id: 'prayer-wear',
    slug: 'prayer-wear',
    name: 'Prayer Wear',
    subtitle: 'Serene Comfort & Travel Sets',
    description: 'All-in-one attached hijab gowns and two-piece sets woven from cooling bamboo rayon in pure tones.',
    image: 'https://images.unsplash.com/photo-1662806407800-56793fa8e924?auto=format&fit=crop&w=1000&q=80',
    itemCount: 2,
    highlightText: 'DISCOVER PRAYER WEAR'
  }
];

