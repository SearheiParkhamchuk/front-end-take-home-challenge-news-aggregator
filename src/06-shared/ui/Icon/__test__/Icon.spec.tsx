/**
 * @jest-environment jsdom
 */
import { RemoveRedEye } from '@mui/icons-material'
import { cleanup } from '@testing-library/react'

import { withProviders } from '@/test/HOC/withProviders'
import { composeHOCs } from '@/test/utils/composeHOCs'
import { renderComponent } from '@/test/utils/renderComponent'

import Icon from '../Icon'

describe('InputText component', () => {
  afterEach(cleanup)

  const Component = composeHOCs(withProviders)(Icon)
  const render = renderComponent(Component)

  it('renders correctly', () => {
    expect(render({ Component: RemoveRedEye }).component).toBeInTheDocument()
  })
})
