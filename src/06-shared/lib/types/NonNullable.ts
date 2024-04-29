/**
 * Exclude null and undefined from T
 */
export type NonNullable<T> = T extends null | undefined ? never : T
