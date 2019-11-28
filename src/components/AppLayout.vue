<template>
  <div>
    <Navbar></Navbar>
    <Container></Container>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Container from "@/components/Container.vue";

export default {
  name: "AppLayout",
  components: { Navbar, Container },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
