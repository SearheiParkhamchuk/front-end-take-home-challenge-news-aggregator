/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from 'src/test/HOC/withProviders'
import { composeHOCs } from 'src/test/utils/composeHOCs'
import { renderComponent } from 'src/test/utils/renderComponent'

import Alert from '../Alert'

describe('Alert component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Alert)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ variant: 'error' }).component).toBeInTheDocument()
  })

  it('renders `title` correctly', () => {
    const { component } = render({ title: <h6>Title</h6>, variant: 'error' })
    expect(component).toHaveTextContent('Title')
  })
})
