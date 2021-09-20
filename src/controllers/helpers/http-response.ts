import { HttpResponse, NoContentResponse } from "../types/http";

export function noContent(message: string):  HttpResponse<NoContentResponse> {
  return {
    statusCode: 204,
    data: { message }
  }
}

export function successResponse<T = unknown>(data: T): HttpResponse<T> {
  return {
    statusCode: 200,
    data
  }
}
