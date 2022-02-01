<template>
  <div class="dropdown mt-3 mb-3">
    <button class="btn btn-primary dropdown-toggle" id="difficultyLevel" data-bs-toggle="dropdown" aria-expanded="false">
      {{t('setup.bot.difficulty')}}: <strong>{{t('difficultyLevel.' + difficultyLevel)}}</strong>
    </button>
    <ul class="dropdown-menu" aria-labelledby="difficultyLevel">
      <li><a href="#" class="dropdown-item" :class="{active: difficultyLevel==1}" @click.prevent="setDifficulty(1)">{{t('difficultyLevel.1')}}</a></li>
      <li><a href="#" class="dropdown-item" :class="{active: difficultyLevel==2}" @click.prevent="setDifficulty(2)">{{t('difficultyLevel.2')}}</a></li>
      <li><a href="#" class="dropdown-item" :class="{active: difficultyLevel==3}" @click.prevent="setDifficulty(3)">{{t('difficultyLevel.3')}}</a></li>
    </ul>
  </div>

  <ol>
    <li v-html="t('setup.bot.draw')"></li>
    <li v-html="t('setup.bot.advance')"></li>
    <ul>
      <li v-for="(entry, index) in regions" :key="index">
        {{ t('region.' + entry.region) }}: <b>{{t('setup.bot.step', entry.steps)}}</b>
      </li>
    </ul>
  </ol>

  <button class="btn btn-secondary btn-sm" @click="reroll">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
    {{t('setup.bot.reroll')}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../store'
import setupRegions from '@/services/setupRegions'
import DifficultyLevel from '@/services/enum/DifficultyLevel'

export default defineComponent({
  name: 'BotSetup',
  setup() {
    const { t } = useI18n()
    const store = useStore()

    if (store.state.setup.regions.length == 0) {
      store.commit('setupRegions', setupRegions(store.state.setup.difficultyLevel))
    }

    return { t, store }
  },
  data() {
    return {
      difficultyLevel: this.$store.state.setup.difficultyLevel,
      regions: this.$store.state.setup.regions
    }
  },
  methods: {
    setDifficulty(level: DifficultyLevel) {
      this.difficultyLevel = level
      this.regions = setupRegions(level)
      this.store.commit('setup', { difficultyLevel: this.difficultyLevel, regions: this.regions })
    },
    reroll() {
      this.setDifficulty(this.difficultyLevel)
    }
  }
})
</script>
