import { type HomePageProps } from './types'

function HomePage({ ...rest }: HomePageProps) {
  return <div {...rest}>Home</div>
}

export default HomePage
