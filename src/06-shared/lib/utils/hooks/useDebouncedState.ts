import { useCallback, useRef, useState } from 'react'

export function useDebouncedState<S>(initialValue: S, delay = 600) {
  const [debouncedState, setDebouncedState] = useState<S>(initialValue)
  const [state, setState] = useState<S>(initialValue)
  const timeoutRef = useRef<string | number | null>(null)

  const handleSetDebouncedState = useCallback((value: S | ((prevState: S) => S)) => {
    setState(value)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setDebouncedState(value)
    }, delay)
  }, [delay])

  return [debouncedState, handleSetDebouncedState, state] as const
}
