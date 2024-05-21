import { never } from '@/06-shared/lib/utils/misc/never'

export function coloredLog(message: unknown, type: 'error' | 'success' = 'success'): void {
  const date = new Date().toLocaleString()
  switch (type) {
    case 'success': {
      console.log('\x1b[42m', date, '|', message, '\x1b[0m')
      break
    }
    case 'error': {
      console.log('\x1b[41m', date, '|', message, '\x1b[0m')
      break
    }
    default: never(null, `Invalid log type ${type}`)
  }
}
