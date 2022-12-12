import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { API_AUTH_URL } from "../constants/api";
import request from "../utils/request";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await request<{ jwtToken: string }>(
      API_AUTH_URL + "/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) => {
    const response = await request<{ email: string }>(
      API_AUTH_URL + "/signUp",
      {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  }
);

interface AuthState {
  jwtToken?: string;
  loading: boolean;
  error: boolean;
}

const tournamentsSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
  } as AuthState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.loading = true;
    },
    [login.fulfilled.type]: (
      state,
      action: PayloadAction<{ jwtToken: string }>
    ) => {
      state.loading = false;
      state.jwtToken = action.payload.jwtToken;
    },
    [login.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [signUp.pending.type]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled.type]: (state) => {
      state.loading = false;
    },
    [signUp.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default tournamentsSlice.reducer;
