/**
 * @jest-environment jsdom
 */

import { act, renderHook, waitFor } from '@testing-library/react'

import { useDebouncedState } from './useDebouncedState' // Replace with your path

describe('useDebouncedState hook', () => {
  it('should initialize debounced and state with initial value', () => {
    const { result } = renderHook(() => useDebouncedState('initial'))
    const [debouncedState] = result.current
    expect(debouncedState).toBe('initial')
  })

  it('should update state immediately but not update debouncedState initially', () => {
    const { result } = renderHook(() => useDebouncedState('initial'))

    const [, setState] = result.current
    act(() => { setState('updated') })

    const [debouncedState,, state] = result.current
    expect(debouncedState).toBe('initial')
    expect(state).toBe('updated')
  })

  it('should update debouncedState after the delay', async () => {
    const { result } = renderHook(() => useDebouncedState('initial', 100))
    const [, setState] = result.current

    act(() => { setState('updated') })
    expect(result.current[0]).toBe('initial')
    await waitFor(
      () => { expect(result.current[0]).toBe('updated') },
      { timeout: 2000 }
    )
  })

  it('should clear previous timeout before setting a new one', () => {
    const { result } = renderHook(() => useDebouncedState('initial', 100))
    const [, setState] = result.current

    act(() => { setState('updated1') })
    jest.spyOn(window, 'clearTimeout')

    act(() => { setState('updated2') })
    expect(window.clearTimeout).toHaveBeenCalledTimes(1)
  })

  it('should not update debouncedState if the component unmounts before the delay', async () => {
    const { result, unmount } = renderHook(() => useDebouncedState('initial', 100))
    const [, setState] = result.current

    act(() => { setState('updated') })
    unmount()

    await waitFor(() => {
      expect(result.current[0]).toBe('initial')
    }, { timeout: 2000 })
  })
})
