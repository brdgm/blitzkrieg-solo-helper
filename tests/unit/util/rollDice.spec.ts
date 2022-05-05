import { expect } from 'chai'
import rollDice from '@/util/rollDice'

describe('rollDice', () => {
  it('D6', () => {
    const value = rollDice(6)

    expect(value).greaterThanOrEqual(1)
    expect(value).lessThanOrEqual(6)
  })

  it('D20', () => {
    const value = rollDice(20)

    expect(value).greaterThanOrEqual(1)
    expect(value).lessThanOrEqual(20)
  })
})
