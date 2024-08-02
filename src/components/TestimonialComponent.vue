<script setup lang="ts">
import Fieldset from 'primevue/fieldset';
import Avatar from 'primevue/avatar';

export interface PropsTestimonial {
  name: string;
  img?: string;
  text?: string;
}

defineProps<PropsTestimonial>();

</script>
<template>
  <Fieldset>
    <template #legend>
      <div class="flex items-center pl-2">
        <Avatar :image="img" shape="circle" />
        <span class="font-bold p-2">{{ name  }}</span>
      </div>
    </template>
    <p class="m-0">
      {{ text }}
    </p>
  </Fieldset>
</template>


<style>

  .p-fieldset	{
    @apply border-[#5A639C]
  }
</style>