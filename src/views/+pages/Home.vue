<template>
  <div class="home-page">
    <h1 class="text-center">Bootstrap v4 & Vue.js Cart</h1>
    <p class="text-center">
      For more information check
      <a href="https://github.com/chihebnabil/vuex-shopping-cart">the github repo</a>
    </p>
    <div class="row d-flex justify-content-between">
      <product-card :product="product" :key="product.productId" v-for="product in products"></product-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductCard
  },
  mounted() {
    axios.get("https://api.myjson.com/bins/wy3pu").then(response => {
      this.products = response.data;
    });
  }
};
</script>
