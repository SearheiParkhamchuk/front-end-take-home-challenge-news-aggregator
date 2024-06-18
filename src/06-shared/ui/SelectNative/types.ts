import { type NativeSelectProps } from '@mantine/core';

export type SelectNativeProps = Pick<
  NativeSelectProps,
  'data' | 'value' | 'disabled' | 'onChange' | 'error' | 'label' | 'required' | 'size'
>;
