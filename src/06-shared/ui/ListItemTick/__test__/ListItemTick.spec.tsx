/**
 * @jest-environment jsdom
 */
import { cleanup, within } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import ListItemTick from '../ListItemTick'

describe('ListItemTick component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(ListItemTick)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    const { component } = render({ 'checked': true, 'children': 'Text', 'aria-label': 'Label' })
    expect(component).toBeInTheDocument()
    expect(within(component).getByText('Text')).toBeInTheDocument()
  })

  it('renders arai-label correctly', () => {
    const { component } = render({ 'checked': true, 'children': 'Text', 'aria-label': 'Label' })
    expect(component).toBeInTheDocument()
    expect(within(component).getByText('Text')).toBeInTheDocument()
  })
})
