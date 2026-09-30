import { ApiClient } from "@/src/services/ApiClient";

type AuthTokens = {
  access_token: string;
  refresh_token: string;
};

type AuthResponse = {
  data?: AuthTokens;
  access_token?: string;
  refresh_token?: string;
};

export class AuthApi extends ApiClient {
  constructor(baseUrl: string) {
    super(baseUrl);
  }

  async login(email: string, password: string): Promise<AuthTokens> {
    try {
      const response = await this.post<AuthResponse>("/auth/login", { email, password });
      const payload = response.data ?? response;

      if (!payload?.access_token || !payload?.refresh_token) {
        throw new Error("Invalid login response from server.");
      }

      return {
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
      };
    } catch (error) {
      console.error("Error during login:", error);
      throw error;
    }
  }

  async register(fullName: string, email: string, password: string, accountType = "RESIDENT"): Promise<AuthResponse> {
    try {
      const response = await this.post<AuthResponse>("/auth/register", {
        full_name: fullName,
        email,
        password,
        account_type: accountType,
      });
      return response.data ?? response;
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  }
}