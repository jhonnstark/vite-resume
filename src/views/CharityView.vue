<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main id="caridad">
    <!--services start-->
    <div
      v-if="
        !route.path.includes('/services/web-development') &&
        !route.path.includes('/services/database') &&
        !route.path.includes('/services/academic')
      "
      id="services"
    >
      <!--services header-->
      <div class="services-heading wow">
        {{ $t('about.my') }} <span class="color">{{ $t('about.services') }}</span>
      </div>
      <!--services header end-->
      <!--services content-->
      <div class="services-content">
        <router-link class="service-one service wow" to="/services/web-development">
          <div class="service-img">
            <img alt="service-one" src="../assets/img/coding.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.design.title') }}</h2>
            <p>{{ $t('about.design.description') }}</p>
          </div>
        </router-link>
        <router-link class="service-two service wow" to="/services/database">
          <div class="service-img">
            <img alt="service-two" src="../assets/img/basededatos.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.dataBase.title') }}</h2>
            <p>{{ $t('about.dataBase.description') }}</p>
          </div>
        </router-link>
        <router-link class="service-three service wow" to="/services/academic">
          <div class="service-img">
            <img alt="service-three" src="../assets/img/bulb.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.academic.title') }}</h2>
            <p>{{ $t('about.academic.description') }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <!--services content end-->
    <!--services end-->

    <router-view />
  </main>
</template>

<style scoped>
#services {
  padding-top: 30px;
}

@media only screen and (max-width: 550px) {
  .about-first-line {
    font-size: 20px;
  }
  .about-first-paragraph .color {
    font-size: 30px;
  }
  .about-second-line {
    text-align: justify;
  }
}
</style>
