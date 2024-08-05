export interface Product {
  id?: number;
  name: string;
  brand: string
  price: number;
  image: string;
  inventoryStatus: string;
  inExistence: boolean | null
}
