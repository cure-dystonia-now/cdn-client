import { action, observable } from "mobx";
import bind from "bind-decorator";
import { Event } from "../../definitions/types/Event";
import { EventEditorState } from "./substates/EventEditorState";
import { Research } from "../../definitions/types/Research";
import { ResearchEditorState } from "./substates/ResearchEditorState";
import { DonorPayment } from "../../definitions/types/DonorPayment";
import { Donor } from "../../definitions/types/Donor";
import { NameIdentifierPair } from "../../definitions/types/NameIdentifierPair";

export class DashboardState {

  @observable
  public eventsStartId: number;

  @observable
  public events: Array<Event>;

  @observable
  public eventEditorState: EventEditorState;

  @observable
  public research: Array<Research>;

  @observable
  public researchEditorState: ResearchEditorState;

  /***************************************************/
  /* TICKET ANALYTIC SUBVIEW                       */
  /***************************************************/

  @observable
  public eventTicketSales: Array<DonorPayment>;

  @observable
  public eventTicketDonors: Array<Donor>;

  @observable
  public eventNames: Array<NameIdentifierPair>;

  @observable
  public filteredEventId?: string;

  /***************************************************/
  /* DONATION ANALYTIC SUBVIEW                       */
  /***************************************************/

  @observable
  public donations: Array<DonorPayment>;

  @observable
  public donationDonors: Array<Donor>;

  /***************************************************/
  /* DONOR SUBVIEW                                   */
  /***************************************************/

  @observable
  public donor?: Donor;

  @observable
  public donorPaymentHistory: Array<DonorPayment>;

  constructor() {
    this.eventsStartId = 0;
    this.events = [];
    this.eventEditorState = new EventEditorState();
    this.research = [];
    this.researchEditorState = new ResearchEditorState();
    this.eventTicketSales = [];
    this.eventTicketDonors = [];
    this.eventNames = [];
    this.donations = [];
    this.donationDonors = [];
    this.donorPaymentHistory = [];
  }

  @bind
  @action
  public updateEvents(events: Array<Event>): void {
    this.events = events;
  }

  @bind
  @action
  public resetEventEditorState(id?: number): void {
    this.eventEditorState = new EventEditorState(id);
  }

  @bind
  @action
  public updateResearch(researchEntries: Array<Research>): void {
    this.research = researchEntries;
  }

  @bind
  @action
  public resetResearchEditorState(id?: number): void {
    this.researchEditorState = new ResearchEditorState(id);
  }

  @bind
  @action
  public updateEventTicketSales(ticketSales: Array<DonorPayment>): void {
    this.eventTicketSales = ticketSales;
  }

  @bind
  @action
  public updateTicketDonors(ticketDonors: Array<Donor>): void {
    this.eventTicketDonors = ticketDonors;
  }

  @bind
  @action
  public updateEventNames(eventNames: Array<NameIdentifierPair>): void {
    this.eventNames = eventNames;
  }

  @bind
  @action
  public updateFilteredEvent(eventId?: string) {
    this.filteredEventId = eventId;
  }

  @bind
  @action
  public updateDonations(donations: Array<DonorPayment>): void {
    this.donations = donations;
  }

  @bind
  @action
  public updateDonationDonors(donors: Array<Donor>): void {
    this.donationDonors = donors;
  }

  @bind
  @action
  public updateDonor(donor?: Donor): void {
    this.donor = donor;
  }

  @bind
  @action
  public updateDonorPaymentHistory(donorPayments: Array<DonorPayment>) {
    this.donorPaymentHistory = donorPayments;
  }

}