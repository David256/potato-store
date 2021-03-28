import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    productsInCart: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async loadProducts(context) {
      const data = await fetch('db/products.json');

      /**
       * @type { Array }
       */
      const products = await data.json();

      context.commit('updateProducts', products);

      console.log(products.length, 'products loaded');
    },
  },
  modules: {
  },
});
