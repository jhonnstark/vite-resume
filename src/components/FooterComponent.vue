<script lang="ts" setup>
import i18n from '@/i18n'

const changeLanguage = () => {
  i18n.global.locale.value = i18n.global.locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <footer class="footer">
    <div class="footer-text">
      <span>{{ $t('footer.select') }}</span>
    </div>
    <div v-if="$i18n.locale === 'en'" class="footer-flag" @click="changeLanguage">
      <img alt="mex-img" class="images" height="14px" src="/src/assets/img/mex.png" />
      <span class="footer-lc">Es</span>
    </div>
    <div v-else class="footer-flag" @click="changeLanguage">
      <img alt="mex-img" class="images" height="14px" src="/src/assets/img/us.png" />
      <span class="footer-lc">En</span>
    </div>
  </footer>
</template>

<style scoped></style>
