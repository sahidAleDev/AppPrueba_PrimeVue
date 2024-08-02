<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

interface Item {
  label: string;
  route?: string;
  icon?: string;
}

const home = ref({
  icon: 'pi pi-home',
  route: '/'
});
const items = ref<Item[]>([
  { label: 'Crud', route: '/crud', icon: 'pi pi-cog' },
]);
</script>

<template>
  <div class="card flex justify-center">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
  </div>
</template>

<style>
  .p-breadcrumb	{
    @apply bg-transparent
  }
</style>