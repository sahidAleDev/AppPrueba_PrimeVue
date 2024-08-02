import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types'
import { ProductService } from '@/services/ProductService'

const STORE_NAME = 'products'
export const useProductStore = defineStore(STORE_NAME, () => {

  const products = ref<Product[]>([])
  products.value = ProductService.getProductsData()

  return { 
    products
  }
})
