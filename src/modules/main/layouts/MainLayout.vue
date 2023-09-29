<template>
  <div class="font-outfit">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: 'MainLayout',
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        Footer: defineAsyncComponent(() => import('../components/Footer.vue')),
    }
}
</script>

<style>

</style>