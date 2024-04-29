import type React from 'react'
import { type FunctionComponent } from 'react'

type HightOrderComponent<P extends object> = (Component: FunctionComponent<P>) => (props: P) => React.JSX.Element

export function composeHOCs<P extends object>(...args: Array<HightOrderComponent<P>>) {
  return function composedHOC(InitialComponent: FunctionComponent<P>) {
    return args.reduce((acc, HOC) => {
      return HOC(acc)
    }, InitialComponent)
  }
}
