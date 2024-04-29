import { css } from '@emotion/react'
import emotionStyled from '@emotion/styled'
type StyledFunc = typeof emotionStyled
type Tag = Parameters<StyledFunc>[0]
type Props = Parameters<StyledFunc>[1]

/**
 * Custom styled component fabric
 */
const styled = ((tag: Tag, props?: Props) => {
  return emotionStyled(tag, {
    /**
     * Common should forward prop function
     */
    shouldForwardProp: (prop: PropertyKey) => {
      return (typeof prop !== 'string' || !prop.startsWith('$')) && prop !== 'as'
    },
    ...props ?? null
  })
}) as StyledFunc

export { styled, css }
