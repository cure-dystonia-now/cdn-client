export type ApplicationConfiguration = {
  backend: {
    host: string,
    port?: number,
    secure: boolean
  },
  storage: {
    superKey: string
  },
  dashboard: {
    eventsPerPage: number
  }
}
