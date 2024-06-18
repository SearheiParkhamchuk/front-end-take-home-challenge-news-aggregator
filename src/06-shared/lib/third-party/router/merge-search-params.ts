export function mergeSearchParams(params: URLSearchParams[]) {
  const target = new URLSearchParams();

  params.forEach((param) => {
    Array.from(param.entries()).forEach(([key, value]) => {
      target.set(key, value);
    });
  });
  return target;
}
