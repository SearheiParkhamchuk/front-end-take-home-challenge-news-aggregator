'use client'
import { Affix, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'

import { useEffect, useState } from 'react'

import { useScrollDirection } from 'src/06-shared/lib/utils/hooks/useScrollDirection'
import Button from 'src/06-shared/ui/Button'

import styles from './styles.module.scss'
import { type ScrollToEdgeProps } from './types'

function ScrollToEdge({ offsetY = 0 }: ScrollToEdgeProps) {
  const [scroll, scrollTo] = useWindowScroll()
  const [maxScrollY, setMaxScrollY] = useState<number>(0)
  const direction = useScrollDirection()

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight
    const maxScrollY = scrollHeight - window.innerHeight - offsetY
    setMaxScrollY(maxScrollY)
  }, [offsetY, scroll])

  return (
    <Affix className={styles.container} position={{ bottom: 20 }}>
      <Transition mounted={scroll.y > 0 && scroll.y < maxScrollY - offsetY && direction === 'up'} transition="slide-up">
        {(transitionStyles) => (
          <Button
            leftSection={<IconArrowUp />}
            style={transitionStyles}
            variant='gradient'
            onClick={() => { scrollTo({ y: 0 }) }}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  )
}

export default ScrollToEdge
