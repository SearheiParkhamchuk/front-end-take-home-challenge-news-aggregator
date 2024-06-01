import styles from './styles.module.scss'
import { type AnimationProps } from './types'

function Animation({ children, variant = 'none' }: AnimationProps) {
  return children({ className: styles[variant] })
}

export default Animation
