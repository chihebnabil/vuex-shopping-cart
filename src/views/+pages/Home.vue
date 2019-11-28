<template>
  <div class="home">
    <div>
      <br>
      <b-jumbotron   text-variant="white" border-variant="dark"
      bg-variant="info" header="VueShoppingCart" lead="Bootstrap v4 & Vue.js Cart">
        <p>For more information check the github repo</p>
        <b-button variant="warning" href="https://github.com/chihebnabil/vuex-shopping-cart">More Info</b-button>
      </b-jumbotron>
    </div>
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
    axios.get("https://api.myjson.com/bins/9c81e").then(response => {
      this.products = response.data;
    });
  }
};
</script>
