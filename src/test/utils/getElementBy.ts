export const getElementBy = (type: 'input' | 'a', component: HTMLElement) => {
  const input = component.querySelector(type)
  if (!input) throw new Error('Input element not found')
  return input
}
