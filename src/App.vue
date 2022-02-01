<template>
  <Header/>

  <div class="container-fluid mt-5 mb-5">
    <router-view :key="$route.fullPath"/>
  </div>

  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from './store'
import Header from '@/components/structure/Header.vue'
import Footer from '@/components/structure/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })
    const store = useStore()

    store.commit('initialiseStore')
    locale.value = store.state.language

    return { t, store }
  },
})
</script>
