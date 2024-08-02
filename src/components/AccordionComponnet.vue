<script setup lang="ts">
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

</script>

<template>
  <Accordion :value="['0']" multiple>
    <AccordionPanel value="0">
      <AccordionHeader>Sobre Nosotros</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          Calaverita Clothing es una tienda de ropa de marca que se distingue por su estilo único y su enfoque en la
          moda de alta calidad. Fundada en [año de fundación], nuestra misión es ofrecer prendas exclusivas que
          reflejen
          la individualidad y el buen gusto de nuestros clientes. Nos enorgullece colaborar con diseñadores
          emergentes y
          marcas reconocidas para proporcionar una selección curada de ropa que no encontrarás en ningún otro lugar.
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
      <AccordionHeader>Nuestra Filosofía</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          En Calaverita Clothing, creemos que la moda es una forma de expresión personal. Nos esforzamos por crear
          una
          experiencia de compra que sea tan única como nuestras prendas. Cada pieza en nuestra tienda es
          seleccionada
          cuidadosamente para garantizar que nuestros clientes siempre encuentren algo especial y de alta calidad.
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>

<style>
.p-accordioncontent-content, .p-accordionheader		 {
  @apply bg-transparent;
}
</style>