/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import List from '../List'

describe('List component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(List)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })

  it('has class', () => {
    expect(render({ className: 'list-classname' }).component).toHaveClass('list-classname')
  })
})
