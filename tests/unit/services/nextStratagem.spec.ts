import Stratagem from '@/services/enum/Stratagem';
import nextStratagem from '@/services/nextStratagem';
import { expect } from 'chai'

describe('nextStratagem', () => {
  it('First Round', () => {
    const stratagem = nextStratagem([], 1)

    expect(stratagem).not.equal(Stratagem.STEAMROLL);
  }),

  it('Second Round', () => {
    const stratagem = nextStratagem([
      { round: 1, stratagem: Stratagem.BIG_GUNS, unitRoll: 1 }
    ], 2)

    expect(stratagem).not.equal(Stratagem.BIG_GUNS);
  }),

  it('Third Round', () => {
    const stratagem = nextStratagem([
      { round: 1, stratagem: Stratagem.BIG_GUNS, unitRoll: 1 },
      { round: 2, stratagem: Stratagem.SECURE, unitRoll: 1 }
    ], 3)

    expect(stratagem).not.equal(Stratagem.SECURE);
  }),

  it('Third Round with more rounds', () => {
    const stratagem = nextStratagem([
      { round: 1, stratagem: Stratagem.BIG_GUNS, unitRoll: 1 },
      { round: 2, stratagem: Stratagem.SECURE, unitRoll: 1 }, 
      { round: 3, stratagem: Stratagem.STEAMROLL, unitRoll: 1 }, 
      { round: 4, stratagem: Stratagem.COUNTERATTACK, unitRoll: 1 }, 
    ], 3)

    expect(stratagem).not.equal(Stratagem.SECURE);
  })

})
