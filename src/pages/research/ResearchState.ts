import bind from "bind-decorator";
import { action, computed, observable } from "mobx";

import { Research } from "../../definitions/types/Research";

export class ResearchState {

  @observable
  public researchEntries: Array<Research>;

  constructor() {
    this.researchEntries = [];
  }

  @bind
  @action
  public updateResearchEntries(entries: Array<Research>): void {
    this.researchEntries = entries;
  }

  @computed
  public get entryYears(): Array<string> {
    const years = [];
    for (let i = 0; i < this.researchEntries.length; i++) {
      const research = this.researchEntries[i];
      if (years.indexOf(research.year) === -1) years.push(research.year);
    }
    return years;
  }

  @bind
  public getResearchEntriesByYear(year: string): Array<Research> {
    const entries = Array<Research>();
    for (let i = 0; i < this.researchEntries.length; i++) {
      const research = this.researchEntries[i];
      if (year === research.year) entries.push(research);
    }
    return entries;
  }

}