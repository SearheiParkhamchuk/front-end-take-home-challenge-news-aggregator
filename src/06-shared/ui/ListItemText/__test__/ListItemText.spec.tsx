/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import ListItemText from '../ListItemText'

describe('ListItemText component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(ListItemText)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })

  it('renders primary text correctly', () => {
    expect(render({ primary: 'Primary text' }).component).toHaveTextContent('Primary text')
  })

  it('renders secondary text correctly', () => {
    expect(render({ secondary: 'Secondary text' }).component).toHaveTextContent('Secondary text')
  })
})
