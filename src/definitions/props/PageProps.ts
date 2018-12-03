import { PageDependencies } from "../dependencies/PageDependencies";
import { RouteComponentProps } from "react-router";

export interface StatefulComponent {
  pageDependencies: PageDependencies
}

export interface PageProps<T> extends RouteComponentProps<T> {
  pageDependencies: PageDependencies
}

export interface PagePropsGeneric extends PageProps<{}> {}

type EventProps = {
  id: number
}

export type EventPageProps = PageProps<EventProps>;
