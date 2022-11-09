<template>

  <div class="float-end m-2 w-25">
    <a href="https://boardgamegeek.com/boardgame/258210/blitzkrieg-world-war-two-20-minutes" target="_blank" rel="noopener">
      <img src="@/assets/game.jpg" class="rounded shadow w-100"/>
    </a>
    <p class="mt-3">
      Tabletopia: <a href="https://tabletopia.com/games/blitzkrieg-nippon" target="_blank" rel="noopener">Blitzkrieg!</a>
    </p>
  </div>

  <h1>{{t('home.title')}}</h1>

  <p v-html="t('home.play1')"></p>
  <p v-html="t('home.play2')"></p>

  <p class="text-muted fst-italic">
    {{t('home.feedback')}}
    <a href="https://boardgamegeek.com/thread/2825038/brdgmme-blitzkrieg-solo-helper-web-application" target="_blank" rel="noopener">Board Game Geek Thread</a> |
    <a href="https://github.com/brdgm/blitzkrieg-solo-helper" target="_blank" rel="noopener">GitHub</a>
  </p>

  <router-link to="/setup" class="btn btn-primary btn-lg mt-3">{{t('action.playGame')}}</router-link>

  <p class="disclaimer">
    This is not an official PSC Games product and has no affiliation with <a href="https://www.pscgames.co.uk/" target="_blank" rel="noopener">PSC Games</a>.
    All art in this app is from <a href="https://www.pscgames.co.uk/games/blitzkrieg" target="_blank" rel="noopener">Blitzkrieg!</a>.
    See <a href="#" data-bs-toggle="modal" data-bs-target="#creditsModal">{{t('footer.credits')}}</a>.
  </p>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppHome',
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>

<style lang="scss" scoped>
.disclaimer {
  clear: both;
  margin-top: 4rem;
  font-size: smaller;
}
</style>