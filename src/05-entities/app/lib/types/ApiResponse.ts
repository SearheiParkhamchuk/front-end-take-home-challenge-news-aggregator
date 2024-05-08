export type ApiResponse<D> = {
  data: D
  error: null
} | {
  data: null
  error: Error
}
