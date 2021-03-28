<template>
  <div class="home">
    <Carousel/>
    <Product/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Product,
  },
  mounted() {
    this.$store.dispatch('loadCarousel');
    this.$store.dispatch('loadProducts');
  },
};
</script>
