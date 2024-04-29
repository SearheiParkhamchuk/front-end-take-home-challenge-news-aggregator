'use client'
import { Container, Footer, Header, Main, Section } from './styles'
import { type SingleColumnLayoutProps } from './types'

function SingleColumnLayout({ header, body, footer, ...rest }: SingleColumnLayoutProps) {
  return (
    <Container {...rest}>
      <Header><Section>{header}</Section></Header>
      <Main><Section>{body}</Section></Main>
      <Footer><Section>{footer}</Section></Footer>
    </Container>
  )
}

export default SingleColumnLayout
