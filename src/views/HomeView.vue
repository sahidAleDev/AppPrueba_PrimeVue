<script setup lang="ts">
import { ref } from 'vue';
import type { PropsTestimonial } from '@/components/TestimonialComponent.vue';

import CarouselComponent from '@/components/CarouselComponent.vue';
import AccordionComponnet from '@/components/AccordionComponnet.vue';
import TestimonialComponent from '@/components/TestimonialComponent.vue';

const testimonial = ref<PropsTestimonial[]>([
  {
    name: 'Juan Pérez',
    img: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    text: 'Calaverita Clothing superó mis expectativas. La calidad de la ropa es excelente y el diseño es único. ¡Definitivamente volveré a comprar!'
  },
  {
    name: 'María López',
    img: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    text: 'La experiencia de compra en Calaverita Clothing fue increíble. El sitio es fácil de navegar y la atención al cliente es excepcional. ¡Recomiendo totalmente esta tienda!'
  },
  {
    name: 'Carlos García',
    img: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    text: 'Me encanta la variedad de estilos que ofrece Calaverita Clothing. Encontré justo lo que buscaba y más. ¡Sin duda, mi tienda de ropa favorita!'
  }
]);
</script>

<template>
  <main class="mt-10 space-y-16 max-w-6xl w-full mx-auto p-10">
    <section class="space-y-8">
      <div class="flex items-center justify-center gap-4">
        <h1 class="text-3xl text-center font-extrabold text-[#5A639C]">Calaverita Clothing</h1>

        <figure>
          <img class="w-20" src="/calaverita-logo.png" alt="">
        </figure>
      </div>

      <p class="text-xl text-[#5A639C]">
        Calaverita Clothing es una tienda de ropa de marca que se distingue por su estilo único y su enfoque en la moda
        de alta calidad. Fundada en [año de fundación], nuestra misión es ofrecer prendas exclusivas que reflejen la
        individualidad y el buen gusto de nuestros clientes. Nos enorgullece colaborar con diseñadores emergentes y
        marcas reconocidas para proporcionar una selección curada de ropa que no encontrarás en ningún otro lugar.
      </p>
    </section>

    <section>
      <AccordionComponnet />
    </section>

    <section class="space-y-8">
      <div>
        <h2 class="text-2xl text-[#5A639C]">Nuestros Productos</h2>
        <p class="text-lg text-[#5A639C]">
          En Calaverita Clothing, creemos que la moda es una forma de expresión personal. Nos esforzamos por crear una
          experiencia de compra que sea tan única como nuestras prendas. Cada pieza en nuestra tienda es seleccionada
          cuidadosamente para garantizar que nuestros clientes siempre encuentren algo especial y de alta calidad.
        </p>
      </div>
    
      <CarouselComponent />
    </section>


    <section>
      <h2 class="text-2xl text-[#5A639C]">Testimonios</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TestimonialComponent v-for="item in testimonial" :key="item.name" :name="item.name" :img="item.img" :text="item.text" />
      </div>
    </section>
  </main>
</template>