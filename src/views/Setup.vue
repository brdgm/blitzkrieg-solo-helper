<template>
  <div>
    <h1>{{t('setup.title')}}</h1>

    <div class="row g-3">
      <div class="col-md-6">
        <div class="border border-5 p-3">
          <h3>{{t('setup.you.title')}}: <img src="@/assets/player/allies.png" class="player-icon"/> {{t('setup.you.player')}}</h3>
          <ol class="mt-3">
            <li v-html="t('setup.you.draw')"></li>
          </ol>
        </div>
      </div>
      <div class="col-md-6">
        <div class="border border-5 p-3">
          <h3>{{t('setup.bot.title')}}: <img src="@/assets/player/axis.png" class="player-icon"/> {{t('setup.bot.player')}}</h3>
          <BotSetup/>
        </div>
      </div>
    </div>

    <router-link to="/round/1" class="btn btn-primary btn-lg mt-3">
      {{t('action.startGame')}}
    </router-link>
    <FooterButtons :endGameLabel="t('action.abortGame')" :endGameConfirmMessage="t('action.abortGameConfirm')" :cancelLabel="t('action.cancel')" @endGame="endGame" />
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import BotSetup from '@/components/setup/BotSetup.vue'
import FooterButtons from 'brdgm-commons/src/components/structure/FooterButtons.vue'

export default defineComponent({
  name: 'Setup',
  components: {
    BotSetup,
    FooterButtons
  },
  setup() {
    const { t } = useI18n()
    const store = useStore()
    return { t, store }
  },
  methods: {
    endGame() {
      this.store.commit('endGame')
      this.$router.push("/")
    }
  }
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