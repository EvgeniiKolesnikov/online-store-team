import { Model } from '../core/Model';
import { Observer } from '../core/Observer';
import { Product } from './dataTypes';

export type ComponentOptions = {
  name: string;
  listeners?: string[];
  observer: Observer;
};

export type ProductOptions = {
  // name: string;
  // listeners?: string[];
  model: Model;
  observer: Observer;
};

export type PageCartAgrs = {
  // name: string;
  // listeners?: string[];
  model: Model;
  observer: Observer;
};

export type PageProdOptions = {
  // name: string;
  prodID: number;
  model: Model;
  observer: Observer;
  good: Product | null;
};

export type CartOptions = {
  // name: string;
  // listeners?: string[];
  model: Model;
  observer: Observer;
};

export type PageOptions = {
  name: string;
  listeners?: string[];
  model: Model;
  observer: Observer;
};

export type PageIndexOptions = {
  // name: string;
  listeners?: string[];
  model: Model;
  observer: Observer;
};

export type Page404Options = {
  listeners?: string[];
  model: Model;
  observer: Observer;
};

export type CartType = {
  prods?: Prods[];
  prodsCount?: number;
  prodsSum?: number;
};

type Prods = {
  [key: string]: number;
};
