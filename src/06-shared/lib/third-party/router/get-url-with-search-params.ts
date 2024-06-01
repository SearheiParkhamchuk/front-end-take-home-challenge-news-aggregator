export function getUrlWithSearchParams(params: URLSearchParams): URL {
  return new URL(`?${params.toString()}`, window.location.href)
}
