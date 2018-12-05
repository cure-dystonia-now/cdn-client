import { ApplicationConfiguration } from "../../definitions/config/ApplicationConfiguration";
import { BaseService } from "./BaseService";
import { AuthenticationService } from "../AuthenticationService";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import bind from "bind-decorator";

export class ControllerService extends BaseService {

  protected authService: AuthenticationService;
  private readonly axiosInstance: AxiosInstance;

  constructor(appConfig: ApplicationConfiguration, authService: AuthenticationService) {
    super(appConfig);
    this.authService = authService;
    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.response.use(undefined, this.handleAxiosError)
  }

  @bind
  private handleAxiosError(error: any) {
    if (error.response && error.response.status === 401) {
      this.authService.removeAuthUser();
      window.location.href = "/login";
      return;
    }
    throw error;
  }

  protected async get(url: string, options?: AxiosRequestConfig): Promise<any> {
    const response = await this.axiosInstance.get(url, options);
    return response.data;
  }

  protected async post(url: string, payload: any, options?: AxiosRequestConfig): Promise<any> {
    const response = await this.axiosInstance.post(url, payload, options);
    return response.data;
  }

  protected async put(url: string, payload: any, options?: AxiosRequestConfig): Promise<any> {
    const response = await this.axiosInstance.put(url, payload, options);
    return response.data;
  }

}