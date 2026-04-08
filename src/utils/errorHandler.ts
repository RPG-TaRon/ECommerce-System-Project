export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleError(error: unknown): void {
  if (error instanceof ApiError) {
    console.error(`API Error: ${error.message}`);
  } else if (error instanceof Error) {
    console.error(`Unexpected Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}