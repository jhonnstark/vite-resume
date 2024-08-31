<script lang="ts" setup></script>

<template>
  <main id="caridad">
    <!--caridad content-->
    <div id="about-content">
      <div class="about-header">
        <span class="color">{{ $t('caridad.title') }}</span>
      </div>
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
      </div>
      <!--about picture-->
      <div class="about-img">
        <img alt="Code" src="../assets/img/gatitos.JPEG" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
