import { ApplicationConfiguration } from "./ApplicationConfiguration";

export const DevelopmentConfiguration: ApplicationConfiguration = {
  backend: {
    host: "localhost",
    port: 8080,
    secure: false
  },
  storage: {
    superKey: "@CDN_DEVELOPMENT"
  },
  dashboard: {
    eventsPerPage: 10
  },
  eventListing: {
    eventsPerPage: 5
  },
  stripe: {
    publicKey: ""
  }
};
