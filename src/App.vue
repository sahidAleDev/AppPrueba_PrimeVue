<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BreadCrum from './components/BreadCrum.vue';
import Toast from 'primevue/toast';
import Button from 'primevue/button';



</script>

<template>

    <Toast />
    <header>
      <BreadCrum />
    </header>
  
    
    <RouterView />
</template>

