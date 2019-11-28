<template>
  <div>
    <b-card
      :title="product.item"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="product"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{ product.price }}</b-card-text>

      <b-button href="#" @click="addToCart(product)" variant="primary"
        >Add to Cart</b-button
      >
    </b-card>
  </div>
</template>
<script>
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
    }
  }
};
</script>

<style scoped></style>
