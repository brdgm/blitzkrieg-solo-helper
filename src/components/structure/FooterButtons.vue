<template>
  <div class="end-game-buttons">
    <router-link v-if="backButtonRouteTo" :to="backButtonRouteTo" tag="button" class="btn btn-secondary btn-sm me-2">{{t('action.back')}}</router-link>
    <button v-if="endGameButtonType" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#endGameModal">{{t('action.' + endGameButtonType)}}</button>
  </div>

  <div v-if="endGameButtonType" class="modal" id="endGameModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{t('action.' + endGameButtonType)}}</h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{t('action.' + endGameButtonType + 'Confirm')}}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" @click="endGame" data-bs-dismiss="modal">{{t('action.' + endGameButtonType)}}</button>
          <button class="btn btn-secondary" data-bs-dismiss="modal">{{t('action.cancel')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '@/store'

export default defineComponent({
  name: 'FooterButtons',
  setup() {
    const { t } = useI18n()
    const store = useStore()
    return { t, store }
  },
  props: {
    endGameButtonType: {
      type: String,  /* Type of end game button <X> (i18n action.<X> and action.<X>Confirm needs to be present); button is hidden when not set */
      required: false
    },
    backButtonRouteTo: {
      type: String,  /* router-link to */
      required: false
    },
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
.end-game-buttons {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5000;
}
</style>