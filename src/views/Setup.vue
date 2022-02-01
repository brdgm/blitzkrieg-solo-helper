<template>
  <div>
    <h1>{{t('setup.title')}}</h1>

    <div class="row g-3">
      <div class="col-md-6">
        <div class="border border-5 p-3">
          <h3>{{t('setup.you.title')}}: <img src="../assets/player/allies.png" class="player-icon"/> {{t('setup.you.player')}}</h3>
          <ol class="mt-3">
            <li v-html="t('setup.you.draw')"></li>
          </ol>
        </div>
      </div>
      <div class="col-md-6">
        <div class="border border-5 p-3">
          <h3>{{t('setup.bot.title')}}: <img src="../assets/player/axis.png" class="player-icon"/> {{t('setup.bot.player')}}</h3>
          <BotSetup/>
        </div>
      </div>
    </div>

    <router-link to="/setup" tag="button" class="btn btn-primary btn-lg mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
      </svg>
      {{t('action.startGame')}}
    </router-link>
    <AbortGameButton/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import BotSetup from '@/components/setup/BotSetup.vue'
import AbortGameButton from '@/components/structure/AbortGameButton.vue'

export default defineComponent({
  name: 'Setup',
  components: {
    BotSetup,
    AbortGameButton
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
})
</script>


<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";
.player-icon {
  height: $h3-font-size;
  margin-top: -0.5rem;
}
</style>