import { styled } from '@/06-shared/lib/theme/styled'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled('header')`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`

export const Main = styled('main')`
  flex: 1;
`

export const Footer = styled('footer')`
  flex: 0;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
`

export const Section = styled('section')`
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpoints.values.md}${theme.breakpoints.unit}`};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.spacing(1)};
  padding-block: ${({ theme }) => theme.spacing(0.5)};
`
