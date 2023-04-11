export interface Producto {
  id: number;
  product: string;
  currency: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  similarProducts?: ProductoSimilar[];
  reviews?: Review[];
  favoritos: boolean;
}

export interface ProductoSimilar {
  image: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
}

export interface Review {
  image: string;
  name: string;
  raging: number;
  opinion: string;
  date: Date;
}
