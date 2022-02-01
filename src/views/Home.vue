<template>

  <div class="float-end m-2 w-25">
    <a href="https://boardgamegeek.com/boardgame/258210/blitzkrieg-world-war-two-20-minutes" target="_blank">
      <img src="../assets/game.jpg" class="rounded shadow w-100"/>
    </a>
  </div>

  <h1>{{t('home.title')}}</h1>

  <p v-html="t('home.play1')"></p>
  <p v-html="t('home.play2')"></p>

  <router-link to="/setup" tag="button" class="btn btn-primary btn-lg mt-3">{{t('action.playGame')}}</router-link>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'BotSetup',
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>