import DifficultyLevel from "./enum/DifficultyLevel";
import Region from "./enum/Region";
import RegionSteps from "./RegionSteps";
import randomEnum from "@/util/randomEnum";

export default function(level: DifficultyLevel) : RegionSteps[] {
  const result : RegionSteps[] = []

  const numberRolls = level == DifficultyLevel.HARD ? 4 : 3
  const advanceSteps = level == DifficultyLevel.EASY ? 1 : 2

  for (let roll = 0; roll < numberRolls; roll++) {
    const region = randomEnum(Region)
    let entry = result.find(e => e.region == region)
    if (entry) {
      entry.steps += advanceSteps
    }
    else {
      entry = new RegionSteps(region, advanceSteps)
      result.push(entry)
    }
  }

  return result.sort((a,b) => a.region - b.region);
}
