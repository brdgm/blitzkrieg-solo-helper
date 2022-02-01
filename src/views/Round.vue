<template>
  <div>
    <Stratagem/>

    <router-link :to="'/round/' + (round+1)" tag="button" class="btn btn-primary btn-lg mt-3">
      {{t('action.nextRound')}}
    </router-link>

    <EndGameButton type="finishGame" :back="round > 1 ? '/round/' + (round-1) : ''"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import EndGameButton from '@/components/structure/EndGameButton.vue'
import Stratagem from '@/components/round/Stratagem.vue'

export default defineComponent({
  name: 'Round',
  components: {
    EndGameButton,
    Stratagem
  },
  setup() {
    const { t } = useI18n()
    const route = useRoute()

    const round = parseInt(route.params['round'] as string)

    return { t, round }
  },
})
</script>
