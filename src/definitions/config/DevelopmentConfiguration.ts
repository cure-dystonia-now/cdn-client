import { ApplicationConfiguration } from "./ApplicationConfiguration";

export const DevelopmentConfiguration: ApplicationConfiguration = {
  backend: {
    host: "localhost",
    port: 8080,
    secure: false
  },
  storage: {
    superKey: "@CDN_DEVELOPMENT"
  }
};