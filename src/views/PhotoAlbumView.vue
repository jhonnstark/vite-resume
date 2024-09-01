<script lang="ts" setup>
import { useRoute } from 'vue-router'
import projects from '../constants/projects'

const $route = useRoute()
const name = $route.params.name as string
</script>

<template>
  <main id="name">
    <div class="blog-header">
      {{ $t(name + '.name') }}
    </div>

    <div class="blog-content">
      <div class="blogs">
        <div class="img">
          <img
            v-for="img in projects[name]"
            :alt="name.toUpperCase()"
            :data-ngsrc="'/src/assets/img/thumbnail/' + img.ngsrc"
            :src="'/src/assets/img/' + img.src"
            data-nanogallery2-lightbox
          />
          <div class="blog-date">{{ $t(name + '.date') }}</div>
        </div>
        <div class="blog-text">
          <h3>{{ $t(name + '.title') }}</h3>
          <p>{{ $t(name + '.description') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
