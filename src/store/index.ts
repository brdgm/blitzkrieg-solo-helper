import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import DifficultyLevel from '@/services/enum/DifficultyLevel'
import RegionSteps from '@/services/RegionSteps'
import Stratagem from '@/services/enum/Stratagem'
import { name } from '@/../package.json'

const LOCALSTORAGE_KEY = `${name}.store`

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

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    language: "en",
    baseFontSize: 1.0,
    setup: {
      difficultyLevel: DifficultyLevel.EASY,
      regions: []
    },
    rounds: []
  },
  mutations: {
    // reload state from local storage
    initialiseStore(state) {
      const localStorageCache = localStorage.getItem(LOCALSTORAGE_KEY)
      if (localStorageCache) {
        this.replaceState(Object.assign(state, JSON.parse(localStorageCache)));
      }
    },
    language(state : State, language: string) {
      state.language = language
    },
    setup(state : State, setup: Setup) {
      state.setup = setup
    },
    setupRegions(state : State, regions: RegionSteps[]) {
      state.setup.regions = regions
    },
    round(state : State, round: Round) {
      // remove round from state if it already exists
      const existingRound = state.rounds.find(r => r.round==round.round)
      if (existingRound) {
        state.rounds.splice(state.rounds.indexOf(existingRound), 1)
      }
      state.rounds.push(round)
    },
    resetGame(state : State) {
      state.setup.regions = []
      state.rounds = []
    },
    zoomFontSize(state : State, baseFontSize: number) {
      state.baseFontSize = baseFontSize
    }
  }
})

store.subscribe((_mutation, state) => {
	// store state asJSON string in local storage
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
})

// define your own `useStore` composition function
export function useStore() : Store<State> {
  return baseUseStore(key)
}
