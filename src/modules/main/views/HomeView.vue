<template>
  <BigScreenBanner />
  <NewsSection />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HomeView',
  components: {
    BigScreenBanner: defineAsyncComponent(() => import('../components/BigScreenBanner.vue')),
    NewsSection: defineAsyncComponent(() => import('../components/NewsSection.vue'))
  }
}
</script>

<style>

</style>