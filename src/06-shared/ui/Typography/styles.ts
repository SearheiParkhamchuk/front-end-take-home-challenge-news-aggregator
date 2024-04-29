import Typography from '@mui/material/Typography'

import { styled } from '@/06-shared/lib/theme/styled'

import { type TypographyColor } from './types'

export const StyledTypography = styled(Typography)<{ $color: TypographyColor }>`
  color: ${({ $color, theme }) => {
    const colors: Record<TypographyColor, string> = {
      'primary': theme.palette.primary.main,
      'secondary': theme.palette.secondary.main,
      'error': theme.palette.error.main,
      'info': theme.palette.info.main,
      'success': theme.palette.success.main,
      'warning': theme.palette.warning.main,
      'text': theme.palette.text.primary,
      'text.light': theme.palette.text.secondary,
      'inherit': 'inherit'
    }

    return colors[$color]
  }};
`
