import { type ChipGroupProps as MantineChipGroupProps } from '@mantine/core';

export type ChipColor = 'bg-primary' | 'bg-secondary' | 'primary';

export type ChipProps = Pick<MantineChipGroupProps<true>, 'children' | 'onChange'> & {
  value: string[];
};
