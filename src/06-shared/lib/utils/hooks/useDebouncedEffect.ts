import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react'

export function useDebouncedEffect(effect: EffectCallback, deps: DependencyList, wait: number = 300) {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(
    () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(effect, wait)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  )
}
