<script lang="ts" setup></script>

<template>
  <div id="web-development">
    <div class="services-heading wow">
      {{ $t('about.design.title') }}
    </div>
    <div class="about-content">
      <div class="about-main">
        <div class="about-first-paragraph wow">
          <span class="about-first-line">
            {{ $t('about.iam') }}
            <span class="color">{{ $t('about.developer') }}</span>
            {{ $t('about.specialized') }} <span class="color">Laravel</span>
          </span>
          <br />
          <span class="about-second-line">
            {{ $t('about.design.description') }}
          </span>
          <br />
          <p>
            {{ $t('about.design.page.text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#web-development {
  padding-top: 30px;
}
</style>
