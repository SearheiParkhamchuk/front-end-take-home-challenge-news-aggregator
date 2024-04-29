/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import IconButton from '../IconButton'

describe('IconButton component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(IconButton)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ children: <></> }).component).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    expect(render({ children: <div>Children</div> }).component).toHaveTextContent('Children')
  })

  it('has certain class', () => {
    expect(render({ className: 'icon-button' }).component).toHaveClass('icon-button')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render({ onClick: handleClick }).component.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders disabled button', () => {
    expect(render({ disabled: true }).component).toBeDisabled()
  })

  it('renders button with aria-label', () => {
    expect(render({ 'aria-label': 'Icon Button' }).component).toHaveAttribute('aria-label', 'Icon Button')
  })
})
