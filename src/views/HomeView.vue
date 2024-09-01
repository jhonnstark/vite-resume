<script lang="ts" setup>
import config from '../constants/particles'
import { onMounted } from 'vue'

const particlesLoaded = async (container: any) => {
  console.log('Particles container loaded', container)
}

class TxtRotate {
  toRotate: string[]
  el: Element
  loopNum: number
  period: number
  txt: string
  isDeleting: boolean

  constructor(el: Element, toRotate: string[], period: string) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  tick() {
    const i = this.loopNum % this.toRotate.length
    const fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

    let delta = 200 - Math.random() * 100

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false
      this.loopNum++
      delta = 100
    }

    setTimeout(() => {
      this.tick()
    }, delta)
  }
}

function rotateText() {
  const elements = document.getElementsByClassName('txt-rotate')
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate')
    const period = elements[i].getAttribute('data-period') || '2000'
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period)
    }
  }
}

onMounted(() => {
  rotateText()
})
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
          <a href="Mailto:jhonncerv@gmail.com" target="_blank">
            <img alt="email-pic" class="contactpic" src="../assets/img/mail.png" />
          </a>
          <a href="Tel:+525611777736" target="_blank">
            <img alt="phone-pic" class="contactpic" src="../assets/img/icon-phone.png" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.txt-rotate > .wrap {
  border-right: 0em solid #666;
}

@media only screen and (max-width: 400px) {
  .header-content .firstline {
    font-size: 3.1rem;
  }
  .header-content .secondline {
    font-size: 20px;
  }
  .social-media {
    width: 40px;
    margin: 6px 15px;
  }
}
</style>
