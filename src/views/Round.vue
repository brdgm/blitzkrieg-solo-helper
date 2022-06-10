<template>
  <div>
    <Stratagem/>

    <router-link :to="'/round/' + (round+1)" class="btn btn-primary btn-lg mt-3">
      {{t('action.nextRound')}}
    </router-link>

    <FooterButtons endGameButtonType="finishGame" :backButtonRouteTo="backButtonRouteTo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import FooterButtons from '@/components/structure/FooterButtons.vue'
import Stratagem from '@/components/round/Stratagem.vue'

export default defineComponent({
  name: 'Round',
  components: {
    FooterButtons,
    Stratagem
  },
  setup() {
    const { t } = useI18n()
    const route = useRoute()

    const round = parseInt(route.params['round'] as string)

    return { t, round }
  },
  computed: {
    backButtonRouteTo() : string {
      return this.round > 1 ? '/round/' + (this.round-1) : ''
    }
  }
})
</script>
