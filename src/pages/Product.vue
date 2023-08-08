<template>
 <div class="sorters container">
    <button :class="{ activeSort: activeSort === 'price' }" @click="sortPrice">Сортировать по цене</button>
    <button :class="{ activeSort: activeSort === 'name' }" @click="sortName">Сортировать по имени</button>
    <button :class="{ activeSort: activeSort === 'reverse' }" @click="sortReverse">Обратная сортировка</button>
    <button :class="{ activeSort: activeSort === 'brand' }" @click="sortBrand">Сортировать по бренду</button>
  </div>
  
  <div>
    <div class="products container">
      <div
        class="product"
        v-for="product in paginatedProducts"
        :key="product.id"
      >
        <router-link
          :to="`modal/${product.id}`"
          @click="openProduct(product.id)"
          ><img :src="product.thumbnail" alt=""
        /></router-link>
        <p>{{ product.title }}</p>
        <p>{{ product.price }} сум</p>
        <p>{{ product.brand }}</p>
      </div>
    </div>
    <div class="btns container">
      <button @click="loadLess" v-if="showLoadLess">Предыдущая страница</button>
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="goToPage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button @click="loadMore" v-if="showLoadMore">Следующая страница</button>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/counter.js";
import { ref, computed } from "vue";

const store = useProductStore();
store.getProducts();
const activeSort = ref("");
const page = ref(1);
const pageSize = 12;

const paginatedProducts = computed(() => {
  const products = store.products || [];
  const startIndex = (page.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return products.slice(startIndex, endIndex);
});

const showLoadMore = computed(() => {
  const products = store.products || [];
  return page.value < Math.ceil(products.length / pageSize);
});

const showLoadLess = computed(() => {
  return page.value > 1;
});

const totalPages = computed(() => {
  const products = store.products || [];
  return Math.ceil(products.length / pageSize);
});

function loadMore() {
  page.value++;
}

function loadLess() {
  page.value--;
}

function goToPage(pageNumber) {
  page.value = pageNumber;
}

function openProduct(id) {
  store.id = id;
  console.log(store.id);
}

function sortPrice() {
  store.products.sort((a, b) => a.price - b.price);
  activeSort.value = "price";
}

function sortName() {
  store.products.sort((a, b) => a.title.localeCompare(b.title));
  activeSort.value = "name";
}

function sortReverse() {
  store.products.reverse();
  activeSort.value = "reverse";
}

function sortBrand() {
  store.products.sort((a, b) => a.brand.localeCompare(b.brand));
  activeSort.value = "brand";
}
</script>