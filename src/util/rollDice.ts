/**
 * Rolls a dice.
 * @param diceMax Max. dice value
 * @returns Dice value
 */
export default function(maxValue: number) : number {
  return Math.floor(Math.random() * maxValue) + 1
}
