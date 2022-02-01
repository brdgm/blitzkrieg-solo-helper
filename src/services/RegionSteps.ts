import Region from "./enum/Region";

export default class RegionSteps {
  readonly region: Region
  steps: number

  constructor(region: Region, steps: number) {
    this.region = region
    this.steps = steps
  }

}