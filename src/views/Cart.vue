<template>
  <div class="cart">
    <div class="container">
      <h2>Items selected</h2>

      <p class="lead">
        These are the items that you have selected. Write your contact information, please.
        The sellers will contact with you to agree amount and price.
      </p>

      <div class="row">
        <div class="col-md-4 order-md-2">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your interests</span>
            <span class="badge badge-secundary badge-pills">{{ productsInCart.length }}</span>
          </h4>

          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed"
              v-for="(product,index) in productsInCart" v-bind:key="product.id">
              <div>
                <h6 class="my-0">{{index+1}}th product</h6>
                <small class="text-muted">{{product.brief}}</small>
              </div>
              <span class="text-muted">${{product.price}}</span>
            </li>

            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <span>Total (USD)</span>
              <strong>${{sumTotalPrices}}</strong>
            </li>
          </ul>
        </div>

        <div class="col-md-8 order-md-1">
          <h3 class="mb-3">Contact Information</h3>

          <form class="needs-validation" @submit="validForm" novalidate>
            <div class="row">
              <!-- First name -->
              <div class="col-md-6 mb-3">
                <label for="inputFirstName">First name</label>
                <input type="text" id="inputFirstName" class="form-control" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <!-- Last name -->
              <div class="col-md-6 mb-3">
                <label for="inputLastName">Last name</label>
                <input type="text" id="inputLastName" class="form-control" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="inputEmail">Email</label>
              <input
                type="email" id="inputEmail"
                class="form-control" placeholder="username@email.com">
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <hr class="mb-4">

            <!-- Submit information -->
            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Send Information
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...Vuex.mapState(['productsInCart']),

    sumTotalPrices() {
      let sum = 0;
      this.productsInCart.forEach((product) => { sum += product.price; });
      console.log('Total:', sum);
      return Math.round(sum * 100) / 100;
    },
  },
  methods: {
    validForm(event) {
      if (event.target.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      event.target.classList.add('was-validated');
    },
  },
};
</script>
