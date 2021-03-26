<template>
  <button type="button" class="btn btn-light">
    <img src="../assets/shopping-cart.svg" alt="">
    Cart
    <span class="badge bg-danger text-white">{{ productsInCart.length }}</span>
  </button>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'CartInline',
  computed: {
    ...Vuex.mapState(['productsInCart']),
  },
};
</script>
