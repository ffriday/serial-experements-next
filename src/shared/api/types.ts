/**
 * Shared wire envelope for backend JSON responses.
 * Entity DTOs describe only `data`; `http` unwraps the envelope.
 */
export type ApiResponse<T> = {
  status: boolean;
  data: T;
  meta: unknown;
};

/** Business failure: HTTP 200 but `status: false` in the envelope. */
export class ApiError extends Error {
  readonly body: unknown;

  constructor(body: unknown, message = "API request failed") {
    super(message);
    this.name = "ApiError";
    this.body = body;
  }
}

export const isApiResponse = (body: unknown): body is ApiResponse<unknown> => {
  if (typeof body !== "object" || body === null) {
    return false;
  }

  return (
    "status" in body &&
    typeof (body as { status: unknown }).status === "boolean" &&
    "data" in body
  );
};
