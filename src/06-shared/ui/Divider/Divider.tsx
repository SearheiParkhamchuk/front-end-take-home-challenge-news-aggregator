import { Divider as MantineDivider } from '@mantine/core'

import styles from './styles.module.scss'
import { type ComponentColors, type DividerProps } from './types'

const CLASS_NAMES: Record<ComponentColors, string> = {
  'primary': styles.primary,
  'initial': styles.initial
}

function Divider({ label, orientation, labelPosition, className, color = 'initial', ...rest }: DividerProps) {
  return (
    <MantineDivider
      {...rest}
      className={`${className} ${CLASS_NAMES[color]}`}
      label={label}
      labelPosition={labelPosition}
      orientation={orientation}
    />
  )
}

export default Divider
