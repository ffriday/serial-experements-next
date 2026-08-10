import { API_BASE_URL } from "@/shared/api/constants";
import { ApiError, isApiResponse } from "@/shared/api/types";

type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

export type HttpInit = RequestInit & {
  next?: NextFetchRequestConfig;
  cache?: RequestCache;
};

export class HttpError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, body: unknown, message?: string) {
    super(message ?? `HTTP ${status}`);
    this.name = "HttpError";
    this.status = status;
    this.body = body;
  }
}

export async function http<T>(path: string, init?: HttpInit): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not set. Copy .env.example to .env.local and fill it in.",
    );
  }

  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...init?.headers,
    },
  });

  const text = await response.text();
  let body: unknown = null;
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      body = text;
    }
  }

  if (!response.ok) {
    throw new HttpError(response.status, body);
  }

  if (!isApiResponse(body)) {
    throw new ApiError(body, "Unexpected API response shape");
  }

  if (!body.status) {
    throw new ApiError(body);
  }

  return body.data as T;
}
