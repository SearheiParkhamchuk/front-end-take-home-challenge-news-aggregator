export function proxyImage({ set }: { set: (target: HTMLImageElement, prop: string, value: any) => void }) {
  return new Proxy(Image, {
    construct(Target: typeof Image, args: [width?: number, height?: number]) {
      const instance = new Target(...args)

      return new Proxy(instance, {
        set(target: HTMLImageElement, prop: string, value: any) {
          set(target, prop, value)
          return Reflect.set(target, prop, value)
        }
      })
    }
  })
}
