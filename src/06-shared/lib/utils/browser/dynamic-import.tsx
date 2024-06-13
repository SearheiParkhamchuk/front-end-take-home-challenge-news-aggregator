import { LoadingOverlay, Overlay } from '@mantine/core';
import dynamic from 'next/dynamic';

import type { DynamicOptions, DynamicOptionsLoadingProps, Loader } from 'next/dynamic';

import Button from 'src/06-shared/ui/Button';

export function dynamicImport<P = {}>(
  loader: DynamicOptions<P> | Loader<P>,
  options?: { ssr?: boolean; variant: 'static' | 'modal' }
) {
  return dynamic(loader, {
    ssr: options?.ssr ?? false,
    loading: (props: DynamicOptionsLoadingProps) => {
      if (props.error) {
        return (
          <Overlay>
            <Button onClick={props.retry}>Reload</Button>
            <div>{props.error.message}</div>
          </Overlay>
        );
      }

      return (
        <LoadingOverlay
          visible
          overlayProps={{ radius: 'sm', color: 'transparent', backgroundOpacity: 0.55, blur: 2 }}
        />
      );
    }
  });
}