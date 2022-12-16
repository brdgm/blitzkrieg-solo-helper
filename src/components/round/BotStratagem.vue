<template>
  <h1>
    {{round}}:
    <img v-if="steamroll" src="@/assets/stratagem/steamroll.png" class="stratagem-icon">
    <img :src="stratagemImageUrl" class="stratagem-icon">
    {{t('stratagem.'+stratagem)}}
  </h1>

  <div class="float-end">
    <div class="text-end">
      <abbr :title="t('info.greatestChange.title')" data-bs-toggle="modal" data-bs-target="#greatestChangeModal">{{t('info.greatestChange.title')}}</abbr>
    </div>
    <div class="text-end mt-2">
      <abbr :title="t('info.greatestChange.title')" data-bs-toggle="modal" data-bs-target="#effectsModal">{{t('info.effects.title')}}</abbr><br/>
    </div>

    <ModalDialog id="greatestChangeModal" :title="t('info.greatestChange.title')">
      <template #body>
        <ol>
          <li v-html="t('info.greatestChange.prio1')"></li>
          <li v-html="t('info.greatestChange.prio2')"></li>
          <li v-html="t('info.greatestChange.prio3')"></li>
          <li v-html="t('info.greatestChange.prio4')"></li>
          <li v-html="t('info.greatestChange.prio5')"></li>
          <li v-html="t('info.greatestChange.prio6')"></li>
          <li v-html="t('info.greatestChange.prio7')"></li>
        </ol>
      </template>
    </ModalDialog>

    <ModalDialog id="effectsModal" :title="t('info.effects.title')">
      <template #body>
        <ul>
          <li v-html="t('info.effects.info1')"></li>
          <li v-html="t('info.effects.info2')"></li>
          <li v-html="t('info.effects.info3')"></li>
          <li v-html="t('info.effects.info4')"></li>
          <li v-html="t('info.effects.info5')"></li>
          <li v-html="t('info.effects.info6')"></li>
          <li v-html="t('info.effects.info7')"></li>
          <li v-html="t('info.effects.info8')"></li>
          <li v-html="t('info.effects.info9')"></li>
        </ul>
      </template>
    </ModalDialog>
  </div>

  <h3>{{t('theatre.title')}}</h3>
  <ol>
    <li v-html="t('theatre.prio1')"></li>
    <li v-html="t('theatre.prio2')"></li>
    <li v-if="stratagem=='counterattack'" class="fw-bold" v-html="t('theatre.prio3.counterattack')"></li>
    <li v-else-if="stratagem=='economic-warfare'" class="fw-bold" v-html="t('theatre.prio3.economic-warfare')"></li>
    <li v-else-if="stratagem=='for-the-glory'" class="fw-bold" v-html="t('theatre.prio3.for-the-glory')"></li>
    <li v-else-if="stratagem=='research-development'" class="fw-bold" v-html="t('theatre.prio3.research-development')"></li>
    <li v-else-if="stratagem=='secure'" class="fw-bold" v-html="t('theatre.prio3.secure')"></li>
    <li v-else>-</li>
    <li v-html="t('theatre.prio4')"></li>
    <li v-html="t('theatre.prio5')"></li>
    <li v-html="t('theatre.prio6')"></li>
  </ol>

  <div class="space-legend float-end">
    <table>
      <tr>
        <td><img src="@/assets/space/propaganda.png" class="space-icon"></td>
        <td>{{t('campaign.priority.1-propaganda')}}</td>
      </tr>
      <tr>
        <td><img src="@/assets/space/strategic-advantage.png" class="space-icon"></td>
      </tr>
      <tr>
        <td><img src="@/assets/space/propaganda.png" class="space-icon"></td>
        <td>{{t('campaign.priority.3-propaganda')}}</td>
      </tr>
      <tr>
        <td><img src="@/assets/space/industrial-production.png" class="space-icon"></td>
        <td>{{t('campaign.priority.4-industrial-production')}}</td>
      </tr>
      <tr>
        <td colspan="2"><img src="@/assets/space/improved-research.png" class="space-icon"><img src="@/assets/space/research.png" class="space-icon"></td>
      </tr>
      <tr>
        <td><img src="@/assets/space/bombing.png" class="space-icon"></td>
      </tr>
      <tr>
        <td><img src="@/assets/space/tactical-advantage.png" class="space-icon"></td>
      </tr>
      <tr>
        <td><img src="@/assets/space/industrial-production.png" class="space-icon"></td>
      </tr>
      <tr>
        <td><img src="@/assets/space/propaganda.png" class="space-icon"></td>
      </tr>
    </table>
  </div>

  <h3>{{t('campaign.title')}}</h3>
  <ol>
    <li v-html="t('campaign.prio1')"></li>
    <li v-if="stratagem=='economic-warfare'" class="fw-bold" v-html="t('campaign.prio2.economic-warfare')"></li>
    <li v-else-if="stratagem=='for-the-glory'" class="fw-bold" v-html="t('campaign.prio2.for-the-glory')"></li>
    <li v-else>-</li>
    <li class="space-priorty-item" v-html="t('campaign.prio3')"></li>
    <li v-html="t('campaign.prio4')"></li>
  </ol>

  <h3>{{t('unit.title')}}</h3>
  <ol>
    <li v-html="t('unit.prio1')"></li>
    <li v-if="stratagem=='big-guns'" class="fw-bold" v-html="t('unit.prio2.big-guns')"></li>
    <li v-else-if="stratagem=='counterattack'" class="fw-bold" v-html="t('unit.prio2.counterattack')"></li>
    <li v-else-if="stratagem=='rapid-deployment'" class="fw-bold" v-html="t('unit.prio2.rapid-deployment')"></li>
    <li v-else-if="stratagem=='research-development'" class="fw-bold" v-html="t('unit.prio2.research-development')"></li>
    <li v-else>-</li>
    <li v-html="t('unit.prio3')"></li>
    <li v-html="t('unit.prio4')"></li>
    <li v-html="t('unit.prio5')"></li>
    <li v-html="t('unit.prio6', { unitRoll: unitRoll })"></li>
  </ol>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import nextStratagem from '@/services/nextStratagem'
import Stratagem from '@/services/enum/Stratagem'
import rollDice from 'brdgm-commons/src/util/random/rollDice'
import ModalDialog from 'brdgm-commons/src/components/structure/ModalDialog.vue'

export default defineComponent({
  name: 'BotStratagem',
  components: {
    ModalDialog
  },
  setup() {
    const { t } = useI18n()
    const store = useStore()
    const route = useRoute()

    const round = parseInt(route.params['round'] as string)
    const currentRound = store.state.rounds.find(r => r.round==round)

    let stratagem
    let unitRoll
    if (currentRound) {
      stratagem = currentRound.stratagem
      unitRoll = currentRound.unitRoll
    }
    else {
      stratagem = nextStratagem(store.state.rounds, round)
      unitRoll = rollDice(6)
      store.commit('round', { round: round, stratagem: stratagem, unitRoll: unitRoll })
    }

    // check for steamroll
    const steamroll = (stratagem == Stratagem.STEAMROLL)
    if (steamroll) {
      const previousRound = store.state.rounds.find(r => r.round==round-1)
      if (previousRound) {
        stratagem = previousRound.stratagem
      }
    }

    // dynamic stratagem image
    const images = require.context('@/assets/stratagem', false, /\.png$/)
    const stratagemImageUrl = images('./' + stratagem + '.png')

    return { t, round, stratagem, unitRoll, steamroll, stratagemImageUrl }
  }
})
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/grid";
.stratagem-icon {
  height: $h1-font-size + 0.8;
  margin-top: -0.5rem;
}
.space-legend {
  background-color: white;
  padding-left: 1rem;
  border-left: 1px dotted black;
}
.space-priorty-item {
  border-bottom: 1px dotted black;
}
.space-icon {
  height: 1.5rem;
  margin-right: 0.25rem;
}
@include media-breakpoint-up(sm) {
  .space-icon {
    height: 2rem;
  }
}
@include media-breakpoint-up(lg) {
  .space-icon {
    height: 2.5rem;
  }
}
</style>