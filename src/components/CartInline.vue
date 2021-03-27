<template>
  <div class="dropdown dropleft">
    <button type="button"
      class="btn btn-light dropdown-toggle"
      id="dropdownCardInline"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <img src="../assets/shopping-cart.svg" alt="">
      Cart
      <span
        class="badge bg-danger text-white"
        v-if="productsInCart.length">
        {{ productsInCart.length }} item
      </span>
    </button>

    <div class="dropdown-menu" aria-labelledby="dropdownCardInline">
      <h6 class="dropdown-header">Products on cart</h6>

      <!-- Wheh no data -->
      <a class="dropdown-item disabled"
        href="#"
        tabindex="-1"
        aria-disabled="true"
        v-if="!productsInCart.length">
        Nothing here yet!
      </a>

      <!-- The products -->
      <a class="dropdown-item" href="#" v-for="product in productsInCart" v-bind:key="product.id">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <button
              class="btn btn-sm btn-warning mr-3"
              aria-label="Remove"
              @click="deleteProduct(product)">
              <img src="../assets/trash.svg" alt="(x)">
            </button>
            <span>{{product.brief}}</span>
          </div>
          <div class="ml-2">
            <b>${{product.price}}</b>
          </div>
        </div>
      </a>

      <div class="dropdown-divider"></div>

      <!-- Sum total -->
      <a class="dropdown-item"
      href="#"
      tabindex="-1"
      aria-disabled="true"
      v-if="productsInCart.length">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <b>Total: ${{sumTotalPrices}}</b>
          </div>
          <div>
            <router-link to="/cart" class="btn btn-primary">Buy</router-link>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'CartInline',
  computed: {
    ...Vuex.mapState(['products', 'productsInCart']),

    sumTotalPrices() {
      let sum = 0;
      this.productsInCart.forEach((product) => { sum += product.price; });
      console.log('Total:', sum);
      return Math.round(sum * 100) / 100;
    },
  },
  methods: {
    deleteProduct(product) {
      const index = this.productsInCart.indexOf(product);
      if (index >= 0) {
        this.productsInCart.splice(index, 1);
      }
    },
  },
};
</script>
