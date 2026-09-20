const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.trim() ?? ''

export type ApiRequestOptions<TBody = unknown> = Omit<
  RequestInit,
  'body' | 'headers'
> & {
  body?: TBody
  headers?: HeadersInit
}

export class ApiError extends Error {
  readonly status: number
  readonly data: unknown

  constructor(message: string, status: number, data: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

function buildUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  if (!API_BASE_URL) {
    return path
  }

  return `${API_BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
}

function serializeBody(body: unknown): BodyInit | undefined {
  if (body === undefined) {
    return undefined
  }

  if (
    typeof body === 'string' ||
    body instanceof Blob ||
    body instanceof FormData ||
    body instanceof URLSearchParams
  ) {
    return body
  }

  return JSON.stringify(body)
}

async function parseResponse<TResponse>(
  response: Response,
): Promise<TResponse | undefined> {
  if (response.status === 204) {
    return undefined
  }

  const text = await response.text()

  if (!text) {
    return undefined
  }

  try {
    return JSON.parse(text) as TResponse
  } catch {
    return text as TResponse
  }
}

function getErrorMessage(data: unknown, status: number) {
  if (typeof data === 'object' && data !== null) {
    const record = data as Record<string, unknown>

    if (typeof record.detail === 'string') {
      return record.detail
    }

    if (typeof record.message === 'string') {
      return record.message
    }

    if (typeof record.error === 'string') {
      return record.error
    }
  }

  return `Request failed with status ${status}`
}

export async function apiRequest<TResponse, TBody = unknown>(
  path: string,
  options: ApiRequestOptions<TBody> = {},
): Promise<TResponse> {
  const { body, headers: requestHeaders, ...requestInit } = options
  const serializedBody = serializeBody(body)
  const headers = new Headers(requestHeaders)

  headers.set('Accept', 'application/json')

  if (serializedBody !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  const response = await fetch(buildUrl(path), {
    ...requestInit,
    body: serializedBody,
    headers,
  })
  const data = await parseResponse<TResponse>(response)

  if (!response.ok) {
    throw new ApiError(getErrorMessage(data, response.status), response.status, data)
  }

  return data as TResponse
}
