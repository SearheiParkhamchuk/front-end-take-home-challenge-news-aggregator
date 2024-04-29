/**
 * @jest-environment jsdom
 */
import { cleanup, within } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'

import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Button from '../Button'

describe('Button component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Button)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({}).component).toBeInTheDocument()
  })

  describe('renders icons correctly', () => {
    it('renders start icon correctly', () => {
      const { component } = render({ startIcon: <>S</> })
      expect(within(component).getByText('S')).toBeInTheDocument()
    })

    it('renders end icon correctly', () => {
      const { component } = render({ endIcon: <>E</> })
      expect(within(component).getByText('E')).toBeInTheDocument()
    })
  })

  it('has certain class', () => {
    expect(render({ className: 'button' }).component).toHaveClass('button')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render({ onClick: handleClick }).component.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders button with different variants', () => {
    const text1 = render({ variant: 'contained' }, 'button-contained')
    expect(text1.component).toBeInTheDocument()

    const text2 = render({ variant: 'outlined' }, 'button-outlined')
    expect(text2.component).toBeInTheDocument()
  })

  it('renders disabled button', () => {
    expect(render({ disabled: true }).component).toBeDisabled()
  })

  it('renders button with aria-label', () => {
    expect(render({ 'aria-label': 'Search Button' }).component).toHaveAttribute('aria-label', 'Search Button')
  })

  it('renders button with loading indicator', () => {
    const element = render({ loading: true }).component

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('aria-disabled', 'true')
    expect(element).toBeDisabled()
  })
})
