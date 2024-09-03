<script lang="ts" setup>
import AiPopUpComponent from '@/components/AiPopUpComponent.vue'
</script>

<template>
  <main id="contact" class="main">
    <div class="contact-header">
      {{ $t('contact.title') }}<span class="color">{{ $t('contact.me') }}</span>
      <div class="contact-header-caption">
        <span class="color"> {{ $t('contact.a') }}</span> {{ $t('contact.orders') }}
      </div>
    </div>
    <div class="contact-main">
      <div class="about-first-paragraph wow">
        <span class="about-second-line">
          {{ $t('contact.text') }}
        </span>
      </div>
    </div>
    <div class="contact-content">
      <!--Contact information-->
      <div class="contact-info">
        <div class="contact-info-header">
          {{ $t('contact.subtitle') }}
        </div>
        <div class="contact-info-content">
          <div class="contect-info-content-line">
            <img alt="name-icon" class="icon" src="../assets/img/linkedin-logo.png" />
            <div class="contact-info-icon-text">
              <h6>{{ $t('contact.Linkedin') }}</h6>
              <a
                class="contact-tel"
                href="https://www.linkedin.com/in/jonathan-cervantes-7b0b3b1b4/"
                target="_blank"
              >
                <p>Jonathan Cervantes</p>
              </a>
            </div>
          </div>
          <div class="contect-info-content-line">
            <img alt="phone-icon" class="icon" src="../assets/img/whatsapp.png" />
            <div class="contact-info-icon-text">
              <h6>WhatsApp</h6>
              <a class="contact-tel" href="https://wa.me/525611777736/?text=Hola" target="_blank">
                <p>+52 56 11 7777 36</p>
              </a>
            </div>
          </div>
          <div class="contect-info-content-line">
            <img alt="email-icon" class="icon" src="../assets/img/icon-email.png" />
            <div class="contact-info-icon-text">
              <h6>{{ $t('contact.email') }}</h6>
              <a class="contact-tel" href="Mailto:jhonncerv@gmail.com" target="_blank"
                ><p>jhonncerv@gmail.com</p></a
              >
            </div>
          </div>
          <div class="contect-info-content-line">
            <img alt="github-icon" class="icon" src="../assets/img/github.svg" />
            <div class="contact-info-icon-text">
              <h6>Github</h6>
              <a class="contact-tel" href="https://github.com/jhonnstark"><p>jhonnstark</p></a>
            </div>
          </div>
          <div class="contect-info-content-line">
            <img alt="location-icon" class="icon" src="../assets/img/icon-location.png" />
            <div class="contact-info-icon-text">
              <h6>{{ $t('contact.location') }}</h6>
              <p>{{ $t('contact.city') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--Contact information end-->
    </div>
    <div class="contact-content">
      <img alt="qr code" class="qr" src="../assets/img/jonathan-cervantes-qr.png" />
    </div>
  </main>
  <AiPopUpComponent />
</template>

<style scoped>
.contact-info {
  background: url(../assets/img/contact-back.jpg) center;
  background-size: cover;
}
</style>
