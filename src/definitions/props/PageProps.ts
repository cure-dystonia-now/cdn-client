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

type DashboardSubProps = {
  subView: string
}

type EventEditorSubProps = {
  id?: number
}

type EventListingProps = {
  page?: number
}

export type EventPageProps = PageProps<EventProps>;
export type DashboardSubViewProps = PageProps<DashboardSubProps>;
export type EventEditorSubViewProps = PageProps<EventEditorSubProps>;
export type EventListingPageProps = PageProps<EventListingProps>;