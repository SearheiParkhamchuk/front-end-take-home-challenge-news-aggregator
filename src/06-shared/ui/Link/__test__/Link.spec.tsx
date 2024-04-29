/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Link from '../Link'

jest.mock('next/router', async () => await import('next-router-mock'))

describe('Link component', () => {
  afterEach(cleanup)

  beforeEach(() => {
    mockRouter.useParser(createDynamicRouteParser([
      '/[id]',
      '/static/path'
    ]))
  })

  const Component = composeHOCs(withProviders)(Link)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ href: '/' }).component).toBeInTheDocument()
  })

  it('has correct `href`', () => {
    const { component } = render({ href: '/1' })
    expect(component).toHaveAttribute('href', '/1')
  })

  it('calls `onClick`', () => {
    const onClick = jest.fn()
    const { component } = render({ href: '/section/1', onClick })
    fireEvent.click(component)
    expect(onClick).toHaveBeenCalled()
  })

  it('should parse dynamic route', () => {
    const { component } = render({ href: '/1' })

    fireEvent.click(component)
    expect(mockRouter).toMatchObject({ pathname: '/[id]', query: { id: '1' } })
  })

  it('should parse static route', () => {
    const { component } = render({ href: '/static/path' })

    fireEvent.click(component)
    expect(mockRouter).toMatchObject({ asPath: '/static/path' })
  })
})
