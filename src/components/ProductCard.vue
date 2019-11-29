<template>
  <b-card
    :title="product.name"
    :img-src="product.image"
    img-alt="Image"
    img-top
    tag="product"
    style="max-width: 20rem;"
    class="mb-5 product-card"
  >
    <b-card-text>{{ product.detail }}</b-card-text>
    <b-card-text>{{ product.price }} $</b-card-text>
    <b-button href="#" @click="addToCart(product)" variant="primary">Add to Cart</b-button>
  </b-card>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProductCard",
  props: {
    product: Object
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    addToCart(product) {
      this.$store.commit("ADD_TO_CART", product);
    }
  },
  mounted() {}
};
</script>

<style  scoped>
.product-card > img {
  max-height: 12rem;
  max-width: 12rem;
  margin: 0 auto;
  padding: 0.5rem;
}
</style>

