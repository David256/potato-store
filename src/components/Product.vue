<template>
  <div class="row product">
    <div class="col-lg-3 col-md-4 col-sm-12" v-for="product in products" v-bind:key="product.id">
      <div class="card mb-3">
        <img src="https://via.placeholder.com/640x480/C5A171/635139?text=Potato+photo" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ product.sellerName }}</h5>
          <p class="card-text font-weight-bold">
            Price: ${{ product.price }}
          </p>
          <p class="card-text">
            {{ product.brief }}
          </p>
          <button
            class="btn"
            v-bind:class="{'btn-success': !isAddedToCart(product.id)}"
            @click="addToCart(product.id)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Product',
  added: false,
  state: {
  },
  computed: {
    ...Vuex.mapState(['products', 'productsInCart']),
  },
  methods: {
    addToCart(id) {
      if (!this.productsInCart.includes(id)) {
        console.log('Adding product', id);
        this.productsInCart.push(id);
      } else {
        console.log('Removing product', id);
        const index = this.productsInCart.indexOf(id);
        this.productsInCart.splice(index, 1);
        console.log('Index', index);
      }
    },
    isAddedToCart(id) {
      return this.productsInCart.includes(id);
    },
  },
};
</script>
