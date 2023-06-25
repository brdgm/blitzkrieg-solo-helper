import Stratagem from './enum/Stratagem';
import randomEnum from 'brdgm-commons/src/util/random/randomEnum';
import { Round } from '@/store';

/**
 * Picks a new stratagem for the next round.
 * Must not be the same stratagem as the last round (or not "steamroll" for the first round).
 * @param rounds Rounds
 * @returns Picked stratgem
 */
function nextStratagem(rounds: Round[], round: number) : Stratagem {
  const filteredRounds = rounds.filter(r => r.round < round)
  const lastStratagem = filteredRounds.length == 0 ? Stratagem.STEAMROLL : filteredRounds[filteredRounds.length-1].stratagem
  const pickedStratagem = randomEnum(Stratagem)
  if (pickedStratagem == lastStratagem) {
    // pick another one
    return nextStratagem(rounds, round)
  }
  else {
    return pickedStratagem
  }
}

export default nextStratagem