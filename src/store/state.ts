import { defineStore } from 'pinia'
import DifficultyLevel from '@/services/enum/DifficultyLevel'
import RegionSteps from '@/services/RegionSteps'
import Stratagem from '@/services/enum/Stratagem'
import { name } from '@/../package.json'

export const useStateStore = defineStore(`${name}.store`, {
  state: () => {
    return {
      language: 'en',
      baseFontSize: 1.0,
      setup: {
        difficultyLevel: DifficultyLevel.EASY,
        regions: []
      },
      rounds: []
    } as State
  },
  actions: {
    round(round: Round) {
      // remove round from state if it already exists
      const existingRound = this.rounds.find(r => r.round==round.round)
      if (existingRound) {
        this.rounds.splice(this.rounds.indexOf(existingRound), 1)
      }
      this.rounds.push(round)
    },
    resetGame() {
      this.setup.regions = []
      this.rounds = []
    }
  },
  persist: true
})

export interface State {
  language: string
  baseFontSize: number
  setup: Setup
  rounds: Round[]
}
export interface Setup {
  difficultyLevel: DifficultyLevel
  regions: RegionSteps[]
}
export interface Round {
  round: number
  stratagem: Stratagem
  unitRoll: number
}
