declare namespace NodeJS {
  interface ProcessEnv {
    CACHE_DB_NAME: string
    CACHE_DB_PASSWORD: string
    CACHE_DB_PORT: number
    CACHE_DB_USERNAME: string

    NEWS_EXPIRATION_CHECK_INTERVAL_MINUTES: string
    NEWS_EXPIRATION_MINUTES: string
    NEWS_UPDATES_CHECK_INTERVAL_MINUTES: string

    NEXT_PUBLIC_APP_BASE_URL: string
  }
}
