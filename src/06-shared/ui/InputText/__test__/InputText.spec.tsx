/**
 * @jest-environment jsdom
 */
import { cleanup, fireEvent, within } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { renderComponent } from '@/test/utils/renderComponent'

import InputText from '../InputText'

describe('InputText component', () => {
  afterEach(cleanup)

  const renderInputText = renderComponent(withProviders(InputText))

  it('renders correctly', () => {
    expect(renderInputText({ value: '' }).component).toBeInTheDocument()
  })

  it('calls onChange handler when typing', async () => {
    const handleChange = jest.fn()
    const { component } = renderInputText({ value: '', onChange: handleChange })
    const input = within(component).getByRole('textbox')
    fireEvent.change(input, { target: { value: '1' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders with start/end adornments', () => {
    const { component } = renderInputText({ startAdornment: <span>Start</span>, endAdornment: <span>End</span>, value: '' })
    expect(within(component).getByText('Start')).toBeInTheDocument()
    expect(within(component).getByText('End')).toBeInTheDocument()
  })

  it('renders placeholder correctly', () => {
    const { component } = renderInputText({ value: '', placeholder: 'Placeholder' })
    expect(within(component).getByRole('textbox')).toHaveAttribute('placeholder', 'Placeholder')
  })

  it('renders value correctly', () => {
    const { component, rerender } = renderInputText({ value: 'input value' })
    expect(within(component).getByRole('textbox')).toHaveAttribute('value', 'input value')

    rerender({ value: 'updated input value' })
    expect(within(component).getByRole('textbox')).toHaveAttribute('value', 'updated input value')
  })

  it('renders disabled input', () => {
    const { component } = renderInputText({ value: '', disabled: true })
    expect(within(component).getByRole('textbox')).toHaveAttribute('disabled')
  })

  it('renders helper text correctly', () => {
    const { component } = renderInputText({ value: '', helperText: 'helper text' })
    const helperTextElement = within(component).getByText('helper text')
    expect(helperTextElement).toHaveTextContent('helper text')
  })
})
