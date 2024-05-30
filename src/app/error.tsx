'use client'
import Button from '@/06-shared/ui/Button'
import LayoutGeneralError from '@/06-shared/ui/LayoutGeneralError'

function LayoutError(props: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <LayoutGeneralError title={props.error.message}>
      <Button onClick={props.reset}>Reload</Button>
    </LayoutGeneralError>
  )
}

export default LayoutError
