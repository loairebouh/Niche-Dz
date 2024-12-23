export interface Note {
  noteName: string;
  noteInfo: string;
}

export interface Product {
  _id: string;
  name: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  volume: number;
  category: 'homme' | 'women' | 'unisex';
  description: string;
  notes: Note[];
  mainImage: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  otherImages?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }[];
  saleOptions: 'full' | 'divided' | 'both';
  priceBottle?: number;
  priceDivision?: number;
}
