<template>
  <div>
    <!-- Shopping cart table -->
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 bg-light">
              <div class="p-2 px-3 text-uppercase">Product</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Price</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" class="border-0 bg-light">
              <div class="py-2 text-uppercase">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :key="product.id" v-for="product in $store.state.added">
            <th scope="row" class="border-0">
              <div class="p-2">
                <img
                  :src="product.image"
                  alt
                  width="70"
                  class="img-fluid rounded shadow-sm"
                />
                <div class="ml-3 d-inline-block align-middle">
                  <h5 class="mb-0">
                    <a href="#" class="text-dark d-inline-block align-middle">{{product.name}}</a>
                  </h5>
                  <span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                </div>
              </div>
            </th>
            <td class="border-0 align-middle">
              <strong>$ {{product.price}}</strong>
            </td>
            <td class="border-0 align-middle">
              <strong>{{product.quantity}}</strong>
            </td>
            <td class="border-0 align-middle">
                    <b-button @click="deleteItem(product)" variant="danger" v-show="$store.state.added.length > 0" >
            <font-awesome-icon icon="trash"></font-awesome-icon>
      
          </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <CartCoupon></CartCoupon>
  </div>
</template>
<script>
import CartCoupon from "@/components/CartCoupon.vue";

export default {
  name: "Cart",
  components: { CartCoupon },
  data() {
    return {};
  },
  methods: {
    deleteItem(item){
      this.$store.commit('REMOVE_FROM_CART',item)
    }
  }
};
</script>

<style scoped></style>
