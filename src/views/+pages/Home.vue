<template>
  <div class="home">
    <h1>Home</h1>
    <div class="row d-flex justify-content-between">
      <product-card
        :product="product"
        :key="product.productId"
        v-for="product in products"
      ></product-card>
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
    axios.get("https://api.myjson.com/bins/jc3aa").then(response => {
      this.products = response.data;
    });
  }
};
</script>
