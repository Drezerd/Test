import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: null,
    id: null
  }),
  actions: {
    async getProducts() {
      try {
        let res = await axios.get('https://dummyjson.com/products?limit=100');
        this.products = res.data.products;
      } catch (error) {
        console.log(error);
      }
    }
  },
});
