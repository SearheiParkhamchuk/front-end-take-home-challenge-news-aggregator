import { IconReload } from '@tabler/icons-react'
import { type MouseEvent } from 'react'

import { articlesClientApi } from 'src/05-entities/articles/index.client'
import Link from 'src/06-shared/ui/Link'

import { type LoadPreviousPageProps } from './types'

function LoadPreviousPage({ params, href }: LoadPreviousPageProps) {
  const inifinite = articlesClientApi.useGetArticlesInfinite(params)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    inifinite.fetchPreviousPage()
  }

  return (
    <Link
      component='button'
      href={href}
      loading={inifinite.isFetchingPreviousPage}
      onClick={handleClick}
    >
      <IconReload />
    </Link>
  )
}

export default LoadPreviousPage
