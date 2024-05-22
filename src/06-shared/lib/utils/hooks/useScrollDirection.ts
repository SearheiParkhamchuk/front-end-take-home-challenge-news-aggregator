import { useWindowScroll } from '@mantine/hooks'
import { useEffect, useRef } from 'react'

type Direction = 'up' | 'down'

export function useScrollDirection(): 'up' | 'down' | null {
  const [scroll] = useWindowScroll()
  const previousPosition = useRef<{ y: number }>(scroll)
  const previousDirection = useRef<Direction | null>(null)
  const { current: previous } = previousPosition
  const { current: direction } = previousDirection

  useEffect(() => {
    previousPosition.current = scroll
  }, [scroll])

  if (previous?.y && scroll.y) {
    if (previous.y > scroll.y) previousDirection.current = 'up'
    else if (previous.y < scroll.y) previousDirection.current = 'down'
  }

  return direction
}
