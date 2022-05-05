import { expect } from 'chai'
import setupRegions from '@/services/setupRegions'
import DifficultyLevel from '@/services/enum/DifficultyLevel'

function executeBotRegionSetup(level : DifficultyLevel) : number {
  const regions = setupRegions(level)

  let stepsTotal = 0;
  regions.forEach(entry => stepsTotal += entry.steps)
  return stepsTotal
}

describe('setupRegions', () => {
  it('Level: Simple', () => {
    const stepsTotal = executeBotRegionSetup(DifficultyLevel.EASY)

    // 3 rolls with 1 step each
    expect(stepsTotal).to.equal(3);
  })

  it('Level: Medium', () => {
    const stepsTotal = executeBotRegionSetup(DifficultyLevel.MEDIUM)

    // 3 rolls with 2 step each
    expect(stepsTotal).to.equal(6);
  })

  it('Level: Hard', () => {
    const stepsTotal = executeBotRegionSetup(DifficultyLevel.HARD)

    // 4 rolls with 2 step each
    expect(stepsTotal).to.equal(8);
  })
})
