<script lang="ts" setup></script>

<template>
  <div id="academic">
    <div class="services-heading wow">
      {{ $t('about.academic.title') }}
    </div>
    <div class="about-content">
      <div class="about-main">
        <div class="about-first-paragraph wow">
          <span class="about-first-line">
            {{ $t('about.iam') }}
            <span class="color">{{ $t('about.academic.profesor') }}</span>
          </span>
          <br />
          <span class="about-second-line">
            {{ $t('about.academic.page.text') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#academic {
  padding-top: 30px;
}
</style>
