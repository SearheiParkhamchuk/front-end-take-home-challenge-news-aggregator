'use client'
import { Global } from '@emotion/react'

import { type Theme, useTheme } from '@mui/material'

import { css } from '@/06-shared/lib/theme/styled'

const globalCss = (theme: Theme) => {
  return css`
    body {
      margin: 0;
      min-height: 100vh;
      height: 100vh;
    }

    ul, ol {
      list-style: none;
      margin: 0;
    }

    img {
      max-width: 100%;
      display: block;
      object-fit: cover;
    }

    body {
      font-family: ${theme.typography.fontFamily};
    }

    * {
      box-sizing: border-box;
    }

  `
}

function GlobalStyles() {
  const theme = useTheme()

  return <Global styles={globalCss(theme)} />
}

export default GlobalStyles
