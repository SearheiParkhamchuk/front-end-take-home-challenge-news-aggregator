import { render } from '@testing-library/react'
import { type FunctionComponent } from 'react'

export function renderComponent<P extends object, E extends HTMLElement = HTMLElement>(Component: FunctionComponent<P>) {
  return function (props: P, testId: string = 'test-id') {
    const { getByTestId, getByText, rerender, getByRole } = render(<Component data-testid={testId} {...props} />)
    return {
      getByRole,
      component: getByTestId(testId) as E,
      getByText,
      rerender: (newProps: P) => { rerender(<Component data-testid={testId} {...newProps} />) }
    }
  }
}
