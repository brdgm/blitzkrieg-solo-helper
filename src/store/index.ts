import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import DifficultyLevel from '@/services/enum/DifficultyLevel'
import RegionSteps from '@/services/RegionSteps'

const LOCALSTORAGE_KEY = 'brdgm.blitzkrieg.store'

export interface State {
  language: string,
  setup: Setup
}
export interface Setup {
  difficultyLevel: DifficultyLevel,
  regions: RegionSteps[]
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
    setup: {
      difficultyLevel: DifficultyLevel.EASY,
      regions: []
    }
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
    abortGame(state : State) {
      state.setup.regions = []
    },
  }
})

store.subscribe((mutation, state) => {
	// store state asJSON string in local storage
	localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}
