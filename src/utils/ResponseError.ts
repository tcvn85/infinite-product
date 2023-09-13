import { AxiosResponse, AxiosError } from 'axios'

export class ResponseError extends Error {
  constructor(
    message: string,
    public response: Response | AxiosResponse
  ) {
    super(message)
  }
}

export function mapError(error: unknown | undefined): undefined | string {
  if (!error) return undefined
  if (error instanceof ResponseError) return error.response.statusText
  if (error instanceof AxiosError)
    return error?.response?.data?.message ?? 'Unknown error'
  if (error instanceof Error) return error.message
  return 'Unknown error'
}
