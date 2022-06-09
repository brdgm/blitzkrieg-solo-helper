<template>
  <div>
    <Stratagem/>

    <router-link :to="'/round/' + (round+1)" class="btn btn-primary btn-lg mt-3">
      {{t('action.nextRound')}}
    </router-link>

    <FooterButtons :backLabel="t('action.back')" :backButtonRouteTo="backButtonRouteTo"
        :endGameLabel="t('action.finishGame')" :endGameConfirmMessage="t('action.finishGameConfirm')" :cancelLabel="t('action.cancel')" @endGame="endGame" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import FooterButtons from 'brdgm-commons/src/components/structure/FooterButtons.vue'
import Stratagem from '@/components/round/Stratagem.vue'

export default defineComponent({
  name: 'Round',
  components: {
    FooterButtons,
    Stratagem
  },
  setup() {
    const { t } = useI18n()
    useStore()
    const route = useRoute()

    const round = parseInt(route.params['round'] as string)

    return { t, round }
  },
  computed: {
    backButtonRouteTo() : string {
      return this.round > 1 ? '/round/' + (this.round-1) : ''
    }
  },
  methods: {
    endGame() {
      this.$store.commit('endGame')
      this.$router.push("/")
    }
  }
})
</script>
