import { type Metadata } from 'next/types';

import LayoutNotFoundError from 'src/06-shared/ui/LayoutNotFoundError'

export function generateMetadata(): Metadata {
  return {
    title: 'Not found'
  };
}

function NotFoundPage() {
  return <LayoutNotFoundError title='Page Not Found' />
}

export default NotFoundPage
