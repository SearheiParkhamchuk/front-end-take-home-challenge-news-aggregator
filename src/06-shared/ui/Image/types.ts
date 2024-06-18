type ConditionalImageProps =
  | {
      height: string | number;
      width: string | number;
    }
  | {
      height?: never;
      width?: never;
    };

export type ImageProps = {
  alt: string;
  src: string | null;
  className?: string;
  withBackground?: boolean;
} & ConditionalImageProps;
