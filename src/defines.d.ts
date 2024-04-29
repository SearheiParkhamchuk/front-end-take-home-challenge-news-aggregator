import { type Theme as MuiTheme } from '@mui/material'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {
    breakpoints: MuiTheme['breakpoints'] & {
      values: {
        xxs: number
      }
    }
  }
}
