<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';


const items = ref([
  {
    label: 'Inicio',
    icon: 'pi pi-home'
  },
  {
    label: 'Crud',
    icon: 'pi pi-cog'
  },
]);

const customMenubarTokens = ref({
  item: {
    focus: {
      background: '#FFF5E1' // El nuevo color que deseas para el enfoque de los ítems
    }
  }
});


</script>

<template>
  <Menubar :model="items" :dt="customMenubarTokens"/>
</template>


