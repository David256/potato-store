<template>
  <div id="carouselMain" class="carousel slide mb-4" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carouselMain" data-slide-to="0" class="active"></li>
    </ol>

    <!-- Slides -->
    <div class="carousel-inner">
      <div
        class="carousel-item" v-bind:class="{active: index === 0}"
        v-for="(slide, index) in carousel" v-bind:key="index">
        <img :src="require(`../assets/${slide.path}`)" alt="" class="d-block w-100">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a class="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselMain" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
/*
potatoes-on-earth.jpg
Image by <a href="https://pixabay.com/es/users/couleur-1195798/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3690562">Couleur</a> from <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3690562">Pixabay</a>

potatoes-on-hand.jpg
Image by <a href="https://pixabay.com/es/users/rupprich-41926/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=172200">Günter Rupprich</a> from <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=172200">Pixabay</a>

potatoes-farmer.jpg
Image by <a href="https://pixabay.com/es/users/rschaubhut-11564814/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5642608">René Schaubhut</a> from <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5642608">Pixabay</a>
*/
import Vuex from 'vuex';

export default {
  name: 'Carousel',
  computed: {
    ...Vuex.mapState(['carousel']),
  },
};
</script>
