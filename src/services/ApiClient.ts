import axios from "axios";

export class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = (baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1").replace(/\/+$/, "");
  }

  protected async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  protected async post<T>(endpoint: string, data: Record<string, unknown>): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseUrl}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error;
    }
  }
}