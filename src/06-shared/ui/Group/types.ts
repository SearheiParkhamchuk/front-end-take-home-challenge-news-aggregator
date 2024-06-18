import { type GroupProps as MantineGroupProps, type MantineSpacing, type StyleProp } from '@mantine/core';

export type GroupProps = Pick<MantineGroupProps, 'children' | 'className' | 'gap' | 'align' | 'justify' | 'grow' | 'w'> & {
  padding?: StyleProp<MantineSpacing>;
};
