'use client'
import { useDisclosure } from '@mantine/hooks'

import { ArticlesPreferencesButton, ArticlesPreferencesModal } from 'src/05-entities/articles-preferences/index.ui'

import { type ArticlesPreferencesProps } from './types'

function ArticlesPreferences({ children }: ArticlesPreferencesProps) {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <ArticlesPreferencesButton onClick={open} />
      <ArticlesPreferencesModal opened={opened} onClose={close} >
        {children}
      </ArticlesPreferencesModal>
    </>
  )
}

export default ArticlesPreferences