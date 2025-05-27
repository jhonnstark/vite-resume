<script lang="ts" setup></script>

<template>
  <div id="academic">
    <div class="services-heading wow">
      {{ $t('about.academic.title') }}
    </div>
    <div class="services-content">
      <p>{{ $t('about.academic.description') }}</p>
      <ul>
        <li>{{ $t('about.academic.item1') }}</li>
        <li>{{ $t('about.academic.item2') }}</li>
        <li>{{ $t('about.academic.item3') }}</li>
        <li>{{ $t('about.academic.item4') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#academic {
  padding-top: 30px;
}
</style>
