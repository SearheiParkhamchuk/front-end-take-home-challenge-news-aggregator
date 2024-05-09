import ButtonSegmented from '@/06-shared/ui/ButtonSegmented'

import { model } from './model'
import { type GridViewButtonProps } from './types'

function GridViewButton({ disabled, value, className, onChange }: GridViewButtonProps) {
  return (
    <ButtonSegmented
      className={className}
      data={model}
      disabled={disabled}
      value={value}
      // @ts-ignore
      onChange={onChange}
    />
  )
}

export default GridViewButton
