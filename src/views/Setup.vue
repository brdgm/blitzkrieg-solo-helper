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

    <router-link to="/round/1" tag="button" class="btn btn-primary btn-lg mt-3">
      {{t('action.startGame')}}
    </router-link>
    <EndGameButton type="abortGame"/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import BotSetup from '@/components/setup/BotSetup.vue'
import EndGameButton from '@/components/structure/EndGameButton.vue'

export default defineComponent({
  name: 'Setup',
  components: {
    BotSetup,
    EndGameButton
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