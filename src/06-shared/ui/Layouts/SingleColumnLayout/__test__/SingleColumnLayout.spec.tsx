/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import SingleColumnLayout from '../SingleColumnLayout'

describe('SingleColumnLayout component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(SingleColumnLayout)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ body: <>Body</>, footer: <>Footer</>, header: <>Header</> }).component).toBeInTheDocument()
  })
})
