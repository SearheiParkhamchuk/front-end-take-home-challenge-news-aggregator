/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Image from '../Image'

describe('Image component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Image)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ src: 'http://test', alt: '', external: true }).component).toBeInTheDocument()
  })
})
