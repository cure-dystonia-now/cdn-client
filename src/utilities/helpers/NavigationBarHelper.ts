import { PageDependencies } from "../../definitions/dependencies/PageDependencies";

export class NavigationBarHelper {

  public static updatePageFromDependencies(dependencies: PageDependencies, page: string) {
    const { stateRegistry } = dependencies;
    const { navigationBarState }  = stateRegistry;
    navigationBarState.updateCurrentPage(page);
  }

}