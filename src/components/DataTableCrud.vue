<script setup lang="ts">
import { FilterMatchMode } from '@primevue/core/api';
import { ref } from 'vue';
import type { Product } from '@/types';
import { useToast } from "primevue/usetoast";
const toast = useToast();

/**
 * ------------------------------------------
 *	Components
 * ------------------------------------------
 */
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Select from 'primevue/select';
import Tag from 'primevue/tag';
import Toolbar from 'primevue/toolbar';


/**
 * ------------------------------------------
 *	Utils
 * ------------------------------------------
 */
interface Statuses {
  label: string;
  value: string;
}

/**
 * ------------------------------------------
 *	Data
 * ------------------------------------------
 */

const deleteProductsDialog = ref<boolean>(false);
const deleteProductDialog = ref<boolean>(false);
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  brand: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  price: { value: null, matchMode: FilterMatchMode.EQUALS },
  inventoryStatus: { value: null, matchMode: FilterMatchMode.EQUALS },
  inExistence: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const loading = ref<boolean>(false);
const productDialog = ref<boolean>(false);
const product = ref<Product>();
const products = ref([
  { id: 1, name: "Air Max", brand: "Nike", price: 100, image: "/img1.png", inventoryStatus: "outofstock", inExistence: false },
  { id: 2, name: "Ultraboost", brand: "Adidas", price: 150, image: "/img2.png", inventoryStatus: "lowstock", inExistence: true },
  { id: 3, name: "Suede Classic", brand: "Puma", price: 120, image: "/img3.png", inventoryStatus: "instock", inExistence: true },
  { id: 4, name: "Nano", brand: "Reebok", price: 90, image: "/img1.png", inventoryStatus: "instock", inExistence: true },
  { id: 5, name: "Gel-Kayano", brand: "Asics", price: 200, image: "/img2.png", inventoryStatus: "lowstock", inExistence: true },
  { id: 6, name: "990v5", brand: "New Balance", price: 120, image: "/img3.png", inventoryStatus: "outofstock", inExistence: false },
]);
const selectedProducts = ref<Product[]>([]);
const statuses = ref<Statuses[]>([
  { label: 'INSTOCK', value: 'instock' },
  { label: 'LOWSTOCK', value: 'lowstock' },
  { label: 'OUTOFSTOCK', value: 'outofstock' }
]);
const submitted = ref<boolean>(false);

/**
 * ------------------------------------------
 *	Methods
 * ------------------------------------------
 */

/**
 * confirmDeleteProduct
 */
const confirmDeleteProduct = (prod: Product) => {
  console.log(prod, "hola");
  product.value = prod;
  deleteProductDialog.value = true;
};


const confirmDeleteSelected = () => {
  deleteProductsDialog.value = true;
};

/**
 * deleteProduct
 */
const deleteProduct = () => {
  products.value = products.value.filter(val => val.id !== product.value?.id);
  deleteProductDialog.value = false;
  product.value = undefined;
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
};

/**
 * deleteProduct
 */
const deleteSelectedProducts = () => {
  products.value = products.value.filter(val => !selectedProducts.value.includes(val));
  deleteProductsDialog.value = false;
  selectedProducts.value = [];
  toast.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
};

/**
 * getSeverity
 */
const getSeverity = (status: string) => {
  switch (status) {
    case 'outofstock':
      return 'danger';
    case 'lowstock':
      return 'warning';
    case 'instock':
      return 'success';
    default:
      return null;
  }
}

/**
 * hideDialog
 */
const hideDialog = () => {
  productDialog.value = false;
  submitted.value = false;
};

/**
 * openNew
 */
const openNew = () => {
  product.value = {
    name: '',
    brand: '',
    price: 0,
    image: '',
    inventoryStatus: 'instock',
    inExistence: false
  };
  submitted.value = false;
  productDialog.value = true;
};

/**
 * editProduct
 */
const editProduct = (prod: Product) => {
  console.log(prod);
  product.value = { ...prod };
  productDialog.value = true;
};

/**
 * saveProduct
 */
const saveProduct = () => {
  submitted.value = true;

  if (product.value) {
    if (product.value.name.trim()) {
      if (product.value.id) {
        const index = products.value.findIndex((p: Product) => p.id === product.value?.id);
        products.value[index] = { ...product.value, id: product.value.id };
        toast.add({ severity: 'error', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        console.log('Product Updated');
      } else {
        const id = products.value[products.value.length - 1].id + 1;
        products.value.push({ ...product.value, id });
        toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        console.log('Product Created');
      }

      productDialog.value = false;
      product.value = undefined;
    }
  }

};
</script>

<template>
  <div class="card">

    <Toolbar class="mb-6">
      <template #start>
        <Button 
          @click="openNew" 
          class="mr-2 bg-green-500" 
          icon="pi pi-plus" 
          label="Nuevo" 
          severity="success" 
        />
        <Button 
          @click="confirmDeleteSelected"
          class="bg-red-500"
          :disabled="!selectedProducts || !selectedProducts.length" 

          icon="pi pi-trash" 
          label="Borrar" 
          severity="danger" 
        />
      </template>
    </Toolbar>

    <DataTable 
      :paginator="true" 
      :rows="5"
      :rowsPerPageOptions="[5, 10, 25]" 
      :value="products"
      currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos"
      dataKey="id"
      filterDisplay="menu" 
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      ref="dt"
      v-model:filters="filters" 
      v-model:selection="selectedProducts"
    >
      <template #header>
        <div class="flex justify-end">
          <IconField>
            <InputIcon>
              <i class="pi pi-search" />
            </InputIcon>
            <InputText v-model="filters['global'].value" placeholder="Buscar por palabra clave" />
          </IconField>
        </div>
      </template>
      <template #empty> No se encontraron productos. </template>
      <template #loading> Cargando datos de productos. Por favor, espera. </template>
      <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
      <Column field="name" header="Producto" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" @input="filterCallback()"
            placeholder="Buscar por producto" />
        </template>
      </Column>
      <Column field="brand" header="Marca" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.brand }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="text" @input="filterCallback()" placeholder="Buscar por marca" />
        </template>
      </Column>
      <Column field="price" header="Precio" style="min-width: 12rem">
        <template #body="{ data }">
          ${{ data.price }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText v-model="filterModel.value" type="number" @input="filterCallback()"
            placeholder="Buscar por precio" />
        </template>
      </Column>
      <Column field="inventoryStatus" header="Inventario" style="min-width: 12rem">
        <template #body="{ data }">
          <Tag :value="data.inventoryStatus" :severity="getSeverity(data.inventoryStatus)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Select v-model="filterModel.value" @change="filterCallback()" :options="statuses" optionLabel="label" optionValue="value"
            placeholder="Selecciona una" style="min-width: 12rem" :showClear="true">
          </Select>
        </template>
      </Column>
      <Column field="inExistence" header="En existencia" dataType="boolean" style="min-width: 6rem">
        <template #body="{ data }">
          <i class="pi"
            :class="{ 'pi-check-circle text-green-500': data.inExistence, 'pi-times-circle text-red-400': !data.inExistence }"></i>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <Checkbox v-model="filterModel.value" :indeterminate="filterModel.value === null" binary
            @change="filterCallback()" />
        </template>
      </Column>
      <Column :exportable="false" style="min-width: 12rem">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
          <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Detalles del producto" :modal="true">
      <div v-if="product" class="flex flex-col gap-6">
        <img v-if="product.image" :src="product.image" :alt="product.image" class="block m-auto pb-4" />
        <div>
          <label for="name" class="block font-bold mb-3">Nombre</label>
          <InputText 
            :invalid="submitted && !product.name" 
            autofocus
            fluid 
            id="name" 
            required="true" 
            v-model.trim="product.name" 
          />
          <small v-if="submitted && !product.name" class="text-red-500">Nombre es requerido</small>
        </div>

        <div>
          <label for="inventoryStatus" class="block font-bold mb-3">Inventario</label>
          <Select id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionValue="value"
            optionLabel="label" placeholder="Select a Status" fluid></Select>
        </div>

        <div>
          <span class="block font-bold mb-4">Marca</span>
          <div class="grid grid-cols-12 gap-4">
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category1" v-model="product.brand" name="brand" value="Nike" />
              <label for="category1">Nike</label>
            </div>
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category2" v-model="product.brand" name="brand" value="Adidas" />
              <label for="category2">Adidas</label>
            </div>
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category3" v-model="product.brand" name="brand" value="Puma" />
              <label for="category3">Puma</label>
            </div>
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category4" v-model="product.brand" name="brand" value="Reebok" />
              <label for="category4">Reebok</label>
            </div>
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category4" v-model="product.brand" name="brand" value="Asics" />
              <label for="category4">Asics</label>
            </div>
            <div class="flex items-center gap-2 col-span-6">
              <RadioButton id="category4" v-model="product.brand" name="brand" value="New Balance" />
              <label for="category4">New Balance</label>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-6">
            <label for="price" class="block font-bold mb-3">Precio</label>
            <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" fluid />
          </div>
          <div class="col-span-6">
            <label for="quantity" class="block font-bold mb-3">En existencia</label>
            <Checkbox id="quantity" v-model="product.inExistence" :indeterminate="product.inExistence === null" binary />
          </div>
        </div>
      </div>

      <template #footer>
        <Button label="Cancelar" icon="pi pi-times" text @click="hideDialog" />
        <Button label="Guardar" icon="pi pi-check" @click="saveProduct" />
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirmación" :modal="true">
      <div class="flex items-center gap-4">
        <i class="pi pi-exclamation-triangle !text-3xl" />
        <span v-if="product">¿Estás seguro de que deseas eliminar <b>{{ product.name }}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false" />
        <Button label="Yes" icon="pi pi-check" @click="deleteProduct" />
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirmación" :modal="true">
      <div class="flex items-center gap-4">
        <i class="pi pi-exclamation-triangle !text-3xl" />
        <span>¿Estás seguro de que deseas eliminar los productos seleccionados?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false" />
        <Button label="Yes" icon="pi pi-check" @click="deleteSelectedProducts" />
      </template>
    </Dialog>
  </div>
</template>