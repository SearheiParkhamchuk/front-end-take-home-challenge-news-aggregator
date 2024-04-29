import { useCallback, useState } from 'react'

export function useToggle(initialState: boolean) {
  const [state, setState] = useState<boolean>(initialState)

  const on = useCallback(() => { setState(true) }, [])

  const off = useCallback(() => { setState(false) }, [])

  const toggle = useCallback(() => { setState(previous => !previous) }, [])

  return [state, { on, off, toggle }] as const
}
