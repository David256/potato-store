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
};
/**
 * ,
  data: {
    items: [
      { sellerName: 'Mr. Pickle', brief: 'Potatoes $3', price: 3 },
    ]
  }
 */
</script>
