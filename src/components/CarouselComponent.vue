<script setup lang="ts">
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

import { useProductStore } from '@/stores/product';
import type { Product } from '@/types';

const $productStore = useProductStore();
const products = ref<Product[]>($productStore.products);

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,   
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>

<template>
  <Carousel :value="products" :numVisible="3"  :responsiveOptions="responsiveOptions" >
    <template #item="slotProps">
      <div class="border border-surface-200 dark:border-surface-700 rounded m-2">
        <div class="h-80 w-full overflow-hidden">
          <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-full h-full aspect-square rounded hover:scale-150 transition" />
        </div>

        <div class="p-4">
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
  
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
          </div>

        </div>

      </div>
    </template>
  </Carousel>
</template>



<style >
  .p-carousel-item	div	{
    @apply border-[#5A639C]
  }
</style>