import { mergeSearchParams } from './merge-search-params'

export function getSearchParams(params: Record<string, string> | URLSearchParams) {
  const searchParams = mergeSearchParams([new URLSearchParams(window.location.search), new URLSearchParams(params)])
  return new URL(`?${searchParams.toString()}`, window.location.href)
}
