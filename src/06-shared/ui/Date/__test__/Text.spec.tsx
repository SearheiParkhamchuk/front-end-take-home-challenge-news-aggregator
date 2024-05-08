/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Text from '../Date'

describe('Text component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Text)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ date: new Date() }).component).toBeInTheDocument()
  })
})
