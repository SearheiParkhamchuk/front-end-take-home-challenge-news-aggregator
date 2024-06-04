/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from 'src/test/HOC/withProviders'
import { composeHOCs } from 'src/test/utils/composeHOCs'
import { renderComponent } from 'src/test/utils/renderComponent'

import Stack from '../Stack'

describe('Stack component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Stack)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })
})
