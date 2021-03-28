import { createStore } from 'vuex';

export default createStore({
  state: {
    carousel: [],
    products: [],
    productsInCart: [],
  },
  mutations: {
    updateCarousel(state, carousel) {
      state.carousel = carousel;
    },
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async loadCarousel(context) {
      const data = await fetch('db/carousel.json');

      /**
       * @type { Array }
       */
      const carousel = await data.json();

      context.commit('updateCarousel', carousel);
      console.log(carousel.length, 'carousel loaded');
    },
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
