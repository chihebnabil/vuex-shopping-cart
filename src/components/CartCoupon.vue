<template>
  <div class="row py-5 p-4 bg-white rounded shadow-sm">
    <div class="col-lg-6">
      <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
      <div class="p-4">
        <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
        <div class="input-group mb-4 border rounded-pill p-2">
          <input
            type="text"
            placeholder="Apply coupon"
            aria-describedby="button-addon3"
            class="form-control border-0"
          />
          <div class="input-group-append border-0">
            <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill">
              <i class="fa fa-gift mr-2"></i>Apply coupon
            </button>
          </div>
        </div>
      </div>
      <div
        class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
      >Instructions for seller</div>
      <div class="p-4">
        <p
          class="font-italic mb-4"
        >If you have some information for the seller you can leave them in the box below</p>
        <textarea name cols="30" rows="2" class="form-control"></textarea>
      </div>
    </div>
   <CartSummary></CartSummary>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import CartSummary from "@/components/CartSummary.vue";

export default {
  name: "CartCoupon",
  components: {CartSummary},
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>