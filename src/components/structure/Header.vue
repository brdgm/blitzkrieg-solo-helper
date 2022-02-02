<template>
  <div class="header bg-dark fixed-top">
    <a class="logo" href="https://brdgm.me/">
      <img class="icon" src="@/assets/structure/headerNavIcon.svg" alt="">
      <div class="title">brdgm.me</div>
    </a>

    <div class="gameTitle">{{ t('gameTitle') }}</div>

    <div class="langSelector">
      <button class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {{locale}}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" :class="{active: lang == locale}" href="#" v-for="lang in availableLocales" :key="lang" @click.prevent="setLocale(lang)">{{lang}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Header',
  setup() {
    const { t, locale, availableLocales } = useI18n({
      inheritLocale: true,
      useScope: 'global'
    })
    const store = useStore()
    return { t, locale, availableLocales, store }
  },
  methods: {
    setLocale(lang: string) {
      this.store.commit('language', lang)
      this.locale = lang;
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .logo {
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-top: -0.3rem;
    }
    .title {
      color: #fff;
      font-family: Lucida Console, monospace;
      font-size: 1rem;
      margin-right: 1rem;
      display: inline;
    }
    display: inline;
    flex-grow: 1;
    white-space: nowrap;
  }
  a.logo, a.logo:hover, a.logo:visited, a.logo:active {
    text-decoration: none;
  }
  .gameTitle {
    color: darksalmon;
    font-weight: bold;
    display: inline;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
  }
  .langSelector, .langSelector button {
    text-transform: uppercase;
  }
}
</style>
