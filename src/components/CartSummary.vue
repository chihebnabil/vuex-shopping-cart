<template>
  <div class="col-lg-6">
    <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary</div>
    <div class="p-4">
      <p
        class="font-italic mb-4"
      >Shipping and additional costs are calculated based on values you have entered.</p>
      <ul class="list-unstyled mb-4">
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong class="text-muted">Order Subtotal</strong>
          <strong>${{ subTotal }}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong class="text-muted">Shipping and handling</strong>
          <strong>$10.00</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong class="text-muted">Tax</strong>
          <strong>$0.00</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong class="text-muted">Total</strong>
          <h5 class="font-weight-bold">$ {{ subTotal + 10 }}</h5>
        </li>
      </ul>
      <a   @click="$router.push({name: 'shop.checkout'})" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartSummary",
  components: {},
  data() {
    return {
      subTotal: 0
    };
  },
  mounted() {
    this.subTotal = this.sum(this.$store.state.added);
  },

  methods: {
    sum(arr) {
      return arr.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    }
  }
};
</script>

<style scoped>
</style>