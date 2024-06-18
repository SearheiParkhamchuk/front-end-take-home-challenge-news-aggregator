import { type TabsProps as MantineTabsProps } from '@mantine/core';
import { type ReactNode } from 'react';

export type Item = { value: string };

export type TabsProps<I extends Item> = Pick<MantineTabsProps, 'value' | 'onChange'> & {
  data: I[];
  renderPanel: (props: { element: I }) => ReactNode;
  renderTab: (props: { element: I }) => ReactNode;
};
