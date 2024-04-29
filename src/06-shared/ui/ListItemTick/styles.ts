import { styled } from '@/06-shared/lib/theme/styled'
import Icon from '@/06-shared/ui/Icon'
import ListItem from '@/06-shared/ui/ListItem'

export const StyledListItem = styled(ListItem)`
  font-size: 0.8rem;
  white-space: nowrap;
`

export const StyledIcon = styled(Icon)<{ $color?: 'success' | 'error' }>`
  color: ${({ theme, $color }) => {
    if ($color === 'success') return theme.palette.success.main
    if ($color === 'error') return theme.palette.error.main
    return 'inherit'
  }};
  margin-right: 0.25rem;
`
