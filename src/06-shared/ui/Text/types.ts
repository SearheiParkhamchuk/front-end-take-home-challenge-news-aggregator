import { type TextProps as MantineTextProps } from '@mantine/core';
import { type PropsWithChildren } from 'react';

export type TextColor = 'text-primary' | 'text-secondary' | 'primary';

export type TextProps = PropsWithChildren<
  Pick<MantineTextProps, 'className' | 'size' | 'lineClamp' | 'inherit' | 'fz' | 'span'> & {
    color?: TextColor;
    dangerouslySetInnerHTML?: string;
  }
>;
