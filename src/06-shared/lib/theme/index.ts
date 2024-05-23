import { type CSSVariablesResolver, type MantineColorsTuple, type MantineTheme, colorsTuple, createTheme, virtualColor } from '@mantine/core'

import { font } from './font'

type CustomThemeColors = {
  'bg-primary': MantineColorsTuple
  'bg-secondary': MantineColorsTuple
  'dark-jungle-green': MantineColorsTuple
  'iceberg': MantineColorsTuple
  'mineral-green': MantineColorsTuple
  'primary': MantineColorsTuple
  'text-primary': MantineColorsTuple
  'text-secondary': MantineColorsTuple
  'white-smoke': MantineColorsTuple
}

export type Theme = MantineTheme & {
  colors: MantineTheme['colors'] & CustomThemeColors
}

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  return {
    variables: {
      '--app-spacing-sm': theme.spacing.sm,
      '--app-spacing-md': theme.spacing.md,
      '--app-spacing-xs': theme.spacing.xs,
      '--app-breakpoint-lg': theme.breakpoints.lg,
      '--app-breakpoint-md': theme.breakpoints.md,
      '--app-breakpoint-sm': theme.breakpoints.sm,
      '--app-breakpoint-xs': theme.breakpoints.xs,
      '--app-color-primary': theme.colors.primary[0],
      '--app-color-text-primary': theme.colors['text-primary'][0],
      '--app-color-text-secondary': theme.colors['text-secondary'][0],
      '--app-color-bg-primary': theme.colors['bg-primary'][0],
      '--app-color-bg-secondary': theme.colors['bg-secondary'][0],
      '--switch-cursor': 'pointer'
    },
    dark: {
      '--mantine-color-body': theme.colors['dark-jungle-green'][0],
      '--mantine-color-text': theme.colors['white-smoke'][0]
    },
    light: {
      '--mantine-color-text': theme.colors['dark-jungle-green'][0]
    }
  }
}

export const theme = createTheme({
  fontFamily: font.style.fontFamily,
  colors: {
    'dark-jungle-green': colorsTuple('#17252A'),
    'mineral-green': colorsTuple('#425e5e'),
    'primary': colorsTuple('#3AAFA9'),
    'white-smoke': colorsTuple('#f5f5f5'),
    'iceberg': colorsTuple('#DEF2F1'),
    'text-primary': virtualColor({
      name: 'text-primary',
      dark: 'white-smoke',
      light: 'dark-jungle-green'
    }),
    'text-secondary': virtualColor({
      name: 'text-secondary',
      dark: 'iceberg',
      light: 'mineral-green'
    }),
    'bg-primary': virtualColor({
      name: 'bg-primary',
      dark: 'dark-jungle-green',
      light: 'white-smoke'
    }),
    'bg-secondary': virtualColor({
      name: 'bg-secondary',
      dark: 'mineral-green',
      light: 'iceberg'
    })
  } satisfies CustomThemeColors,
  primaryColor: 'primary'
})
