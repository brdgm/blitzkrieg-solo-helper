import { expect } from 'chai'
import randomEnum from '@/util/randomEnum'
import DifficultyLevel from '@/services/enum/DifficultyLevel'
import Stratagem from '@/services/enum/Stratagem'

describe('randomEnum', () => {
  it('int enum', () => {
    const value = randomEnum(DifficultyLevel)

    expect(value).not.undefined
  }),

  it('string enum', () => {
    const value = randomEnum(Stratagem)

    expect(value).not.undefined
  })
})
