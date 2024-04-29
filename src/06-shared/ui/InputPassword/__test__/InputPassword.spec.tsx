/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, within } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { getElementBy } from '@/test/utils/getElementBy'

import { renderComponent } from '@/test/utils/renderComponent'

import InputPassword from '../InputPassword'

describe('InputText component', () => {
  afterEach(cleanup)

  const renderInputPassword = renderComponent(withProviders(InputPassword))
  const getInputPassword = getElementBy.bind(null, 'input')

  it('renders correctly', () => {
    expect(renderInputPassword({ value: '' }).component).toBeInTheDocument()
  })

  it('calls onChange handler when typing', async () => {
    const handleChange = jest.fn()
    const { component } = renderInputPassword({ value: '', onChange: handleChange })
    fireEvent.change(getInputPassword(component), { target: { value: '1' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders placeholder correctly', () => {
    const { component } = renderInputPassword({ value: '', placeholder: 'Placeholder' })
    expect(getInputPassword(component)).toHaveAttribute('placeholder', 'Placeholder')
  })

  it('renders value correctly', () => {
    const { component, rerender } = renderInputPassword({ value: 'input value' })
    expect(getInputPassword(component)).toHaveAttribute('value', 'input value')

    rerender({ value: 'updated input value' })
    expect(getInputPassword(component)).toHaveAttribute('value', 'updated input value')
  })

  it('renders disabled input', () => {
    const { component } = renderInputPassword({ value: '', disabled: true })
    expect(getInputPassword(component)).toHaveAttribute('disabled')
  })

  it('renders helper text correctly', () => {
    const { component } = renderInputPassword({ value: '', helperText: 'helper text' })
    const helperTextElement = within(component).getByText('helper text')
    expect(helperTextElement).toHaveTextContent('helper text')
  })
})
