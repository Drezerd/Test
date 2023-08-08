<template>
  <header class="header">
    <ul class="ul">
      <router-link to="/">Home</router-link>
      <router-link to="/cards">Cards</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </header>
</template>

<script setup>
import { useProductStore } from '@/stores/counter.js';
</script>
