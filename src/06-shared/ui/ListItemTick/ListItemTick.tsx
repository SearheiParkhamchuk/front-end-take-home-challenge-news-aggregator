import { Check, Close } from '@mui/icons-material'

import { StyledIcon, StyledListItem } from './styles'
import { type ListItemTickProps } from './types'

function ListItemTick({ checked, children, 'aria-label': ariaLabel, ...rest }: ListItemTickProps) {
  return (
    <StyledListItem dense disableGutters {...rest}>
      {
        checked
          ? <StyledIcon $color='success' aria-label={ariaLabel} Component={Check} size='small' />
          : <StyledIcon $color='error' aria-label={ariaLabel} Component={Close} size='small' />
      }
      {children}
    </StyledListItem>
  )
}

export default ListItemTick
