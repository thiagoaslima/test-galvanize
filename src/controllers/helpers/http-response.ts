import { HttpResponse, NoContentResponse } from "../types/http";

export function noContent(message: string):  HttpResponse<NoContentResponse> {
  return {
    statusCode: 200,
    response: { message },
  }
}

export function successResponse<T = unknown>(data: T): HttpResponse<T> {
  return {
    statusCode: 200,
    response: data
  }
}

export function serverError<E = Error>(error: E): HttpResponse<{ error: E }> {
  return {
    statusCode: 500,
    response: { error },
  }
}
