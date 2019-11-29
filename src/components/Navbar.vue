<template>
  <b-navbar sticky="true" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">VueShoppingCart</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav></b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button
          @click="$router.push({name: 'shop.cart'})"
          variant="warning"
          v-show="$store.state.added.length > 0"
        >
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <b-badge variant="light">{{ $store.state.added.length }}</b-badge>
        </b-button>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <font-awesome-icon icon="user" />
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style></style>
