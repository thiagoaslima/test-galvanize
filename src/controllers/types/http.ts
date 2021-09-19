export interface HttpResponse<T = any> {
  statusCode: number,
  data: T
}

export interface HttpController<Request = unknown, Response = any> {
  handle: (request: Request) => HttpResponse<Response> | Promise<HttpResponse<Response>>
}
