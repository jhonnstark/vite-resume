<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuHeader from '@/components/MenuHeader.vue'
</script>

<template>
  <MenuHeader />

  <router-view v-slot="{ Component, route }">
    <transition mode="out-in" name="fade">
      <div :key="route.fullPath" class="main">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style scoped></style>
