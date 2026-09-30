import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthApi } from "@/src/features/Auth/api/Auth.api";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setError: (message: string | null) => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          const api = new AuthApi(process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api/v1");
          const tokens = await api.login(email, password);

          set({
            accessToken: tokens.access_token,
            refreshToken: tokens.refresh_token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          const message = error instanceof Error ? error.message : "Invalid email or password.";

          set({
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
            isLoading: false,
            error: message,
          });

          throw error;
        }
      },
      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          error: null,
        });

        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      },
      setError: (message: string | null) => set({ error: message }),
    }),
    {
      name: "naviko-auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export const logout = () => useAuth.getState().logout();
