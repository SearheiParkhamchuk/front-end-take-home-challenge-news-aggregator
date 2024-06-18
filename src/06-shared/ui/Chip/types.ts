import { type ChipProps as MantineChipProps } from '@mantine/core';

export type ChipColor = 'bg-primary' | 'bg-secondary' | 'primary';

export type ChipProps = Pick<MantineChipProps, 'children' | 'checked' | 'size' | 'variant' | 'onChange' | 'value'> & {
  color?: '';
};
