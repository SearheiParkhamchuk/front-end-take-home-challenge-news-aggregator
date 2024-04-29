/**
 * @jest-environment jsdom
 */
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import ListItemButton from '../ListItemButton'

describe('ListItemButton component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(ListItemButton)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    const component = render({}).component
    expect(component).toBeInTheDocument()
    expect(component).toHaveAttribute('role', 'button')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    const { component } = render({ onClick: handleClick })
    component.click()
    expect(handleClick).toHaveBeenCalled()
  })

  it('disables when disabled', () => {
    const { component } = render({ disabled: true })
    expect(component).toHaveAttribute('tabindex', '-1')
    expect(component).toHaveAttribute('aria-disabled', 'true')
  })

  it('selectes correctly when selected', () => {
    const { component } = render({ selected: true })
    expect(component).toHaveAttribute('aria-selected', 'true')
  })

  it('has `data-item-id` attribute when dataid specified', () => {
    const { component } = render({ dataid: 'test' })
    expect(component).toHaveAttribute('data-item-id', 'test')
  })
})
