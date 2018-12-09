export type DonorPayment = {
  id?: number,
  donor_id: number,
  event_id?: number,
  amount: number,
  created_at?: string,
  updated_at?: string,
  gateway: string,
  in_honor?: string,
  in_memory?: string,
  acknowledgements?: string,
  status_id: number,
  ticket_quantity?: number
}