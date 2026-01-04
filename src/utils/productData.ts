export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category: string[];
  sale: boolean;
  badge?: string | null;
  quantity?: number;
}

const products: IProduct[] = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop',
    name: 'Velvet Lip Scrub',
    price: 1500,
    category: ['lip care'],
    sale: true,
    badge: 'Bestseller',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop',
    name: 'Honey Lip Balm',
    price: 2000,
    category: ['lip care'],
    sale: false,
    badge: null,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=500&fit=crop',
    name: 'Rose Lip Brush Set',
    price: 1200,
    category: ['tools'],
    sale: true,
    badge: null,
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=500&fit=crop',
    name: 'Berry Lip Gloss',
    price: 2500,
    category: ['lipsticks'],
    sale: false,
    badge: 'New',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=500&fit=crop',
    name: 'Hydrating Lip Oil',
    price: 3000,
    category: ['lip care'],
    sale: true,
    badge: null,
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=400&h=500&fit=crop',
    name: 'Overnight Lip Mask',
    price: 1500,
    category: ['lip care'],
    sale: false,
    badge: 'Popular',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=400&h=500&fit=crop',
    name: 'Complete Lip Kit',
    price: 5500,
    category: ['kits'],
    sale: true,
    badge: null,
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1557205465-f3762edea6d3?w=400&h=500&fit=crop',
    name: 'Nude Satin Gloss',
    price: 2500,
    category: ['lipsticks'],
    sale: false,
    badge: null,
  },
];

// Export as both named and default for maximum compatibility
export { products };
export default products;
