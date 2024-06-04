import styles from './styles.module.scss';
import { type AnimationProps } from './types';

function Animation({ children, variant = 'none', delay }: AnimationProps) {
  return children({ className: styles[variant], style: { animationDelay: delay } });
}

export default Animation;
