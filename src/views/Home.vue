<template>
  <div class="home">
    <Product/>
  </div>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
  name: 'Home',
  components: {
    Product,
  },
  mounted() {
    this.$store.dispatch('loadProducts');
  },
};
</script>
