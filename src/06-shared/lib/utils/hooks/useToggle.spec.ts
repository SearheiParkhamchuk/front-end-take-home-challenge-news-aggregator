/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react'

import { useToggle } from './useToggle' // Replace with your path

describe('useToggle hook', () => {
  it('should initialize state with the provided initial state', () => {
    const { result } = renderHook(() => useToggle(true))
    const [state] = result.current
    expect(state).toBe(true)
  })

  it('should toggle state to true using the "on" function', () => {
    const { result, rerender } = renderHook(() => useToggle(false))
    const [, { on }] = result.current
    on()
    rerender()
    const [newState] = result.current
    expect(newState).toBe(true)
  })

  it('should toggle state to false using the "off" function', () => {
    const { result, rerender } = renderHook(() => useToggle(true))
    const [, { off }] = result.current
    off()
    rerender()
    expect(result.current[0]).toBe(false)
  })

  it('should toggle state using the "toggle" function', () => {
    const { result, rerender } = renderHook(() => useToggle(false))
    const [, { toggle }] = result.current

    toggle()
    rerender()
    expect(result.current[0]).toBe(true)

    toggle()
    rerender()
    expect(result.current[0]).toBe(false)
  })

  it('should return the state and toggle functions as a constant array', () => {
    const { result } = renderHook(() => useToggle(true))
    const [, toggleFunctions] = result.current
    expect(Object.keys(toggleFunctions)).toEqual(['on', 'off', 'toggle'])
  })
})
