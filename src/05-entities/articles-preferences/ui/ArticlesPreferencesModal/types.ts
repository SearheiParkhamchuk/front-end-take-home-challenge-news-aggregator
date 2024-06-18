import { type PropsWithChildren } from 'react';

export type ArticlesPreferencesModalProps = PropsWithChildren<{
  onClose: () => void;
  opened: boolean;
}>;
