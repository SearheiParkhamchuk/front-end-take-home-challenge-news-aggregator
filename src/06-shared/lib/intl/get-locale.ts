import { getLocale as nextIntlGetLocale } from 'next-intl/server'

export async function getLocale() {
  return nextIntlGetLocale()
}
