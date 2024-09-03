<script lang="ts" setup>
import { useRoute } from 'vue-router'
import projects from '../constants/projects'
import { ref, type Ref } from 'vue'

interface Img {
  src: string
  title: string
}

const $route = useRoute()
const name = $route.params.name as string
const visibleRef = ref(false)
const indexRef = ref(0) // default 0
const imgsRef: Ref<Img[]> = ref([])

const onShow = () => {
  visibleRef.value = true
}

const showMultiple = () => {
  imgsRef.value = projects[name].map((img, index) => ({
    src: new URL('/img/' + img.src, import.meta.url).href,
    title: name + ' ' + (index + 1)
  }))
  indexRef.value = 0 // index of imgList
  onShow()
}

const onHide = () => (visibleRef.value = false)

const getImageUrl = (src: string) => {
  return new URL('/img/' + src, import.meta.url).href
}
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
            :key="img.src"
            :src="getImageUrl(img.src)"
            @click="showMultiple"
          />
          <div class="blog-date">{{ $t(name + '.date') }}</div>
        </div>
        <div class="blog-text">
          <h3>{{ $t(name + '.title') }}</h3>
          <p>{{ $t(name + '.description') }}</p>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :imgs="imgsRef"
      :index="indexRef"
      :visible="visibleRef"
      @hide="onHide"
    ></vue-easy-lightbox>
  </main>
</template>

<style scoped></style>
