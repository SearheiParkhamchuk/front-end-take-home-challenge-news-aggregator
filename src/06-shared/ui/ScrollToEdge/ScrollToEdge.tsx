import { Affix, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'

import { useScrollDirection } from '@/06-shared/lib/utils/hooks/useScrollDirection'
import Button from '@/06-shared/ui/Button'

import styles from './styles.module.scss'

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll()
  const direction = useScrollDirection()

  return (
    <Affix className={styles.container}>
      <Transition mounted={scroll.y > 0 && direction === 'up'} transition="slide-up">
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

export default ScrollToTop
