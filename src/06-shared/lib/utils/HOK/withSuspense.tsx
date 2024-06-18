import { ActionIcon } from '@mantine/core'
import { IconReload } from '@tabler/icons-react'
import { type FunctionComponent, type ReactNode, Suspense } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'

import Alert from 'src/06-shared/ui/Alert'
import Group from 'src/06-shared/ui/Group'
import Skeleton from 'src/06-shared/ui/Skeleton'
import Text from 'src/06-shared/ui/Text'

import { HttpError } from '../errors/HttpError'

const defaultFallback = <Skeleton />
const DefaultErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  const message = error instanceof HttpError ? error.message : error.message
  return (
    <Alert variant='error'>
      <Group padding={0}>
        <Text>{message}</Text>
        <ActionIcon color='red' variant='outline' onClick={resetErrorBoundary}>
          <IconReload />
        </ActionIcon>
      </Group>
    </Alert>
  )
}

type WithSuspenseProps = {
  fallback?: ReactNode, ErrorComponent?: FunctionComponent<FallbackProps>
}

// Might be needed due to this warning https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
export function withSuspense<P extends object>(
  Component: FunctionComponent<P>,
  { fallback, ErrorComponent }: WithSuspenseProps = {}
) {
  const WrappedComponent = function (props: P) {
    return (
      <ErrorBoundary fallbackRender={ErrorComponent ?? DefaultErrorComponent}>
        <Suspense fallback={fallback ?? defaultFallback}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    )
  }

  WrappedComponent.displayName = Component.name

  return WrappedComponent
}
