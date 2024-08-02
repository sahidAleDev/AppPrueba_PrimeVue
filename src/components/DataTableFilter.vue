<script setup lang="ts">
import { ref } from 'vue';
import { FilterMatchMode } from '@primevue/core/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const products = ref([
  { name: "Air Max", brand: "Nike", price: 100, image: "/img1.png", inventoryStatus: "Out of Stock", inExistence: false },
  { name: "Ultraboost", brand: "Adidas", price: 150, image: "/img2.png", inventoryStatus: "Low", inExistence: true },
  { name: "Suede Classic", brand: "Puma", price: 120, image: "/img3.png", inventoryStatus: "In Stock", inExistence: true },
  { name: "Nano", brand: "Reebok", price: 90, image: "/img1.png", inventoryStatus: "In Stock", inExistence: true },
  { name: "Gel-Kayano", brand: "Asics", price: 200, image: "/img2.png", inventoryStatus: "Low", inExistence: true },
  { name: "990v5", brand: "New Balance", price: 120, image: "/img3.png", inventoryStatus: "Out of Stock", inExistence: false },
]);

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  brand: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  price: { value: null, matchMode: FilterMatchMode.EQUALS },
  inventoryStatus: { value: null, matchMode: FilterMatchMode.EQUALS },
  inExistence: { value: null, matchMode: FilterMatchMode.EQUALS }
});

const statuses = ref(['Out of Stock', 'Low', 'In Stock']);
const loading = ref(false);

const getSeverity = (status: string) => {
  switch (status) {
    case 'Out of Stock':
      return 'danger';
    case 'Low':
      return 'warning';
    case 'In Stock':
      return 'success';
    default:
      return null;
  }
}
</script>
<template>
  <div class="card">
    <DataTable v-model:filters="filters" :value="products" paginator :rows="10" dataKey="name" filterDisplay="row"
      :loading="loading" :globalFilterFields="['name', 'brand', 'inventoryStatus']">
      <template #header>
        <div class="flex justify-end">
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
          </IconField>
        </div>
      </template>
      <template #empty> No products found. </template>
      <template #loading> Loading products data. Please wait. </template>
      <Column field="name" header="Product" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
            placeholder="Search by product" />
        </template>
      </Column>
      <Column field="brand" header="Brand" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.brand }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Search by brand" />
        </template>
      </Column>
      <Column field="price" header="Price" style="min-width: 12rem">
        <template #body="{ data }">
          ${{ data.price }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="number" @input="filterCallback()"
            placeholder="Search by price" />
        </template>
      </Column>
      <Column field="inventoryStatus" header="Inventory Status" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="data.inventoryStatus" :severity="getSeverity(data.inventoryStatus)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One"
            style="min-width: 12rem" :showClear="true">
          </Select>
        </template>
      </Column>
      <Column field="inExistence" header="In Existence" dataType="boolean" style="min-width: 6rem">
        <template #body="{ data }">
          <i class="pi"
            :class="{ 'pi-check-circle text-green-500': data.inExistence, 'pi-times-circle text-red-400': !data.inExistence }"></i>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary
            @change="filterCallback()" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>


<style>
.p-datatable-column-header-content {}
</style>
