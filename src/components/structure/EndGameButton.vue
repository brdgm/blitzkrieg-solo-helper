<template>
  <div class="end-game-buttons">
    <router-link v-if="back" :to="back" tag="button" class="btn btn-secondary btn-sm me-2">{{t('action.back')}}</router-link>
    <button class="btn btn-secondary btn-sm me-3" data-bs-toggle="modal" data-bs-target="#endGameModal">{{t('action.' + type)}}</button>
  </div>

  <div class="modal" id="endGameModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{t('action.' + type)}}</h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{t('action.' + type + 'Confirm')}}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" @click="endGame" data-bs-dismiss="modal">{{t('action.' + type)}}</button>
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

export enum ButtonType {
  FINISH_GAME = 'finishGame',
  ABORT_GAME = 'abortGame'
}

export default defineComponent({
  name: 'EndGameButton',
  setup() {
    const { t } = useI18n()
    const store = useStore()
    return { t, store }
  },
  props: {
    type: {
      type: String,  /* ButtonType */
      required: true
    },
    back: {
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
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/utilities";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/grid";

.end-game-buttons {
  margin-top: 0.5rem;
}
@include media-breakpoint-up(sm) {
  .end-game-buttons {
    position: fixed;
    bottom: 0px;
    right: 0px;
    margin-bottom: 3rem;
  }
}
</style>