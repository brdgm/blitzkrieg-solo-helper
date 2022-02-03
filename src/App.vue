<template>
  <Header/>

  <div id="content-container" class="container-fluid mt-5 mb-5">
    <router-view :key="$route.fullPath"/>
  </div>

  <Footer @zoomFontSize="zoomFontSize"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    
    const baseFontSize = ref(store.state.baseFontSize)

    return { t, store, baseFontSize }
  },
  methods: {
    zoomFontSize(payload: { baseFontSize: number }) {
      this.baseFontSize = payload.baseFontSize
      this.store.commit('zoomFontSize', this.baseFontSize)
    }
  }
})
</script>

<style lang="scss">
#content-container {
  font-size: calc(v-bind(baseFontSize) * 1rem);
  h1 { font-size: calc(v-bind(baseFontSize) * 2.5rem); }
  h2 { font-size: calc(v-bind(baseFontSize) * 2rem); }
  h3 { font-size: calc(v-bind(baseFontSize) * 1.75rem); }
  h4 { font-size: calc(v-bind(baseFontSize) * 1.5rem); }
  h5 { font-size: calc(v-bind(baseFontSize) * 1.25rem); }
  h6 { font-size: calc(v-bind(baseFontSize) * 1rem); }
}
</style>