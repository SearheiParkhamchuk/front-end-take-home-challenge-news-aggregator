/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Alert from '../Alert'

describe('Alert component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Alert)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })

  it('renders `title` correctly', () => {
    const { component } = render({ title: <h6>Title</h6> })
    expect(component).toHaveTextContent('Title')
  })
})
