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

    <button class="btn btn-primary btn-lg mt-3" @click="startGame">
      {{t('action.startGame')}}
    </button>
    <FooterButtons endGameButtonType="abortGame"/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import BotSetup from '@/components/setup/BotSetup.vue'
import FooterButtons from '@/components/structure/FooterButtons.vue'

export default defineComponent({
  name: 'SetupGame',
  components: {
    BotSetup,
    FooterButtons
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    startGame() : void {
      this.$store.commit('resetGame')
      this.$router.push('/round/1')
    }
  }
})
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/variables-dark";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/utilities";
.player-icon {
  height: $h3-font-size;
  margin-top: -0.5rem;
}
</style>