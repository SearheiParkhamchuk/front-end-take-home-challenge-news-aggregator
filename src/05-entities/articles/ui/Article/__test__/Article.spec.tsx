/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Article from '../Article'

describe('Article component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Article)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({
      alt: 'img alt',
      src: 'http://some_img.com',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      title: 'Title',
      publishedAt: new Date()
    }).component).toBeInTheDocument()
  })
})
