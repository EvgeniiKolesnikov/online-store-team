import { Cart } from '../components/cart/Cart';
import { CartType } from '../types/appTypes';

type StorageType = CartType | null;

export function storage(key: string, data = null): StorageType {
  console.log(key);
  console.log(data);
  if (!data) {
    const parsedData: CartType = JSON.parse(localStorage.getItem(key)) as CartType;
    return parsedData || null;
  }
  localStorage.setItem(key, JSON.stringify(data));
  return null;
}
