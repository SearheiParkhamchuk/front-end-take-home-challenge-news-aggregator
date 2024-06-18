declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL: string;
    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_GOOGLE_ANALYTICS_GAID: string;

    NEXT_SERVER_API_BASE_URL: string;
    NEXT_SERVER_APP_ORIGIN: string;

    NEXT_SERVER_APP_VERIFICATION_GOOGLE: string;
    NEXT_SERVER_APP_VERIFICATION_ME: string;

    BUILD_ANALYZE: string;
    BUILD_STANDALONE: string;
  }
}
