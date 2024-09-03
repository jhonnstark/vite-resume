<script lang="ts" setup></script>

<template>
  <main id="caridad">
    <div class="about-header">
      <span class="color">{{ $t('caridad.title') }}</span>
    </div>
    <!--caridad content-->
    <div id="about-content">
      <div class="about-main">
        <div class="about-first-paragraph wow">
          <span class="about-first-line">
            {{ $t('caridad.refugio') }}
            <span class="color">{{ $t('caridad.gatitos') }}</span>
          </span>
          <!--about description-->
          <br />
          <span class="about-second-line">
            {{ $t('caridad.description') }}
          </span>
        </div>
        <!--about picture-->
        <div class="about-img">
          <img alt="Code" src="../assets/img/gatitos.JPEG" />
        </div>
      </div>
    </div>
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
