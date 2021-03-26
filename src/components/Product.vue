<template>
  <div class="row product">
    <div class="col-lg-3 col-md-4 col-sm-12" v-for="product in [3,2]" v-bind:key="product">
      <div class="card">
        <img src="https://via.placeholder.com/640x480/C5A171/635139?text=Potato+photo" alt="" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Mr. Pickle</h5>
          <p class="card-text">
            Potatoes $3
          </p>
          <button class="btn btn-success">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
