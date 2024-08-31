<script setup lang="ts">
import config from '../constants/particles'

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container)
}
</script>

<template>
  <main id="header">
    <vue-particles id="tsparticles" :options="config" @particles-loaded="particlesLoaded" />

    <!--Social Media Links-->
    <div class="social-media-links">
      <a href="https://www.linkedin.com/in/jonathan-cervantes-910b9014a/">
        <img alt="linkedin-logo" class="social-media" src="../assets/img/linkedin-logo.png" />
      </a>
      <a href="https://github.com/jhonnstark">
        <img alt="github-logo" class="social-media" src="../assets/img/github.svg" />
      </a>
    </div>
    <!--Social Media Links end-->

    <div class="header-content">
      <div class="header-content-box">
        <div class="firstline"><span class="color">Jonathan </span>Cervantes</div>
        <div class="secondline">
          {{ $t('header.subtitle') }}
          <span
            :data-rotate="$t('header.rotate')"
            class="txt-rotate color"
            data-period="1200"
          ></span>
          <span class="slash">|</span>
        </div>
        <div class="contact">
          <a href="Mailto:jhonncerv@gmail.com"
            ><img alt="email-pic" class="contactpic" src="../assets/img/mail.png" /></a
          ><!--Your email Id write in place of "#"-->
          <a href="Tel:+525611777736"
            ><img alt="phone-pic" class="contactpic" src="../assets/img/icon-phone.png" /></a
          ><!--Your telephone number Id write in place of "#"-->
        </div>
      </div>
    </div>
  </main>
</template>
