import { styled } from '@/06-shared/lib/theme/styled'

export const PasswordRequirementsContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: ${({ theme }) => `${theme.breakpoints.values.xs}${theme.breakpoints.unit}`};
`
