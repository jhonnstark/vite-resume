<script lang="ts" setup></script>

<template>
  <main id="caridad">
    <!--services start-->
    <div id="services">
      <!--services header-->
      <div class="services-heading wow">
        {{ $t('about.my') }} <span class="color">{{ $t('about.services') }}</span>
      </div>
      <!--services header end-->
      <!--services content-->
      <div class="services-content">
        <div class="service-one service wow">
          <div class="service-img">
            <img alt="service-one" src="../assets/img/coding.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.design.title') }}</h2>
            <p>{{ $t('about.design.description') }}</p>
          </div>
        </div>
        <div class="service-two service wow">
          <div class="service-img">
            <img alt="service-two" src="../assets/img/basededatos.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.dataBase.title') }}</h2>
            <p>{{ $t('about.dataBase.description') }}</p>
          </div>
        </div>
        <div class="service-three service wow">
          <div class="service-img">
            <img alt="service-three" src="../assets/img/bulb.png" />
          </div>
          <div class="service-description">
            <h2>{{ $t('about.academic.title') }}</h2>
            <p>{{ $t('about.academic.description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--services content end-->
    <!--services end-->
  </main>
</template>

<style scoped>
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
