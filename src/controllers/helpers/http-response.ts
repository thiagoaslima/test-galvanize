import { HttpResponse } from "../types/http";

export function successResponse<T = unknown>(data: T): HttpResponse<T> {
  return {
    statusCode: 200,
    data
  }
}