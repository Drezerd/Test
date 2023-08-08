<template>
<router-link to="/cards"> 
  <div class="product" v-for="(product) in product" :key="product.id">
      <img :src="product.thumbnail" alt ="">
      <p>{{ product.title }}</p>
      <p>{{ product.price }} сум</p>
    </div>
</router-link>
</template>

<script setup>
import { useProductStore } from '@/stores/counter.js';

const store = useProductStore();

const product = store.products.filter(item => item.id == store.id)
</script>
