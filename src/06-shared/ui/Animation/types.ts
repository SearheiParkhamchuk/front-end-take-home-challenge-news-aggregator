import { type CSSProperties, type ReactElement } from 'react';

export type AnimationProps = {
  children: (props: { className: string; style: CSSProperties }) => ReactElement;
  variant: 'pulse' | 'blur' | 'none';
  delay?: string;
};
