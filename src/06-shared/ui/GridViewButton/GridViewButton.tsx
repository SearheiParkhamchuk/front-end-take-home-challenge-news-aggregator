import ButtonSegmented from 'src/06-shared/ui/ButtonSegmented'

import Tooltip from 'src/06-shared/ui/Tooltip'

import { model } from './model'
import { type GridViewButtonProps } from './types'

function GridViewButton({ disabled, value, className, onChange }: GridViewButtonProps) {
  return (
    <Tooltip label='Change view'>
      <ButtonSegmented
        className={className}
        data={model}
        disabled={disabled}
        value={value}
        // @ts-ignore
        onChange={onChange}
      />
    </Tooltip>
  )
}

export default GridViewButton
