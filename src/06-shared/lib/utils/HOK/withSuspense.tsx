import { type FunctionComponent, type ReactNode, Suspense } from 'react'

import Skeleton from 'src/06-shared/ui/Skeleton'

// Might be needed due to this warning https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
export function withSuspense<P extends object>(
  Component: FunctionComponent<P>,
  { fallback }: { fallback?: ReactNode } = { fallback: <Skeleton /> }
) {
  const WrappedComponent = function (props: P) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    )
  }

  WrappedComponent.displayName = Component.name

  return WrappedComponent
}
