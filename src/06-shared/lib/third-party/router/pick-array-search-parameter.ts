import { type PolymorphicSearcParams } from 'src/06-shared/lib/types/PolymorphicSearcParams';

export function pickArraySearchParameter(params: PolymorphicSearcParams, key: string): string[] {
  let parameter: string | string[] | null | undefined = null;

  if (params instanceof URLSearchParams) parameter = params.get(key);
  else parameter = params[key];

  if (!parameter?.length) return [];

  return Array.isArray(parameter) ? parameter[0].split(',') : parameter.split(',');
}
