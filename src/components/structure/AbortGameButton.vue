<template>
  <button class="btn btn-secondary btn-sm mt-3 float-end" data-bs-toggle="modal" data-bs-target="#abortGameModal">{{t('action.abortGame')}}</button>

  <div class="modal" id="abortGameModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{t('action.abortGame')}}</h5>
          <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>{{t('action.abortGameConfirm')}}</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-danger" @click="abortGame" data-bs-dismiss="modal">{{t('action.abortGame')}}</button>
          <button class="btn btn-secondary" data-bs-dismiss="modal">{{t('action.cancel')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../store'

export default defineComponent({
  name: 'AbortGameButton',
  setup() {
    const { t } = useI18n()
    const store = useStore()
    return { t, store }
  },
  methods: {
    abortGame() {
      this.store.commit('abortGame')
      this.$router.push("/")
    }
  }
})
</script>
