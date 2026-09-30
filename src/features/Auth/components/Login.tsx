"use client";

import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login, isLoading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login(email, password);

      if (typeof window !== "undefined") {
        window.location.href = "/";
      }
    } catch {
      // Error is already stored in the auth state.
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold">Login</h2>

        {error ? (
          <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="mt-1 w-full rounded border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;