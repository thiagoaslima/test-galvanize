export interface HttpResponse<T = any> {
  statusCode: number,
  response: T
}

export type NoContentResponse = { message: string };

export interface HttpController<Request = unknown, Response = any> {
  handle: (request: Request) => HttpResponse<Response> | Promise<HttpResponse<Response>>
}
