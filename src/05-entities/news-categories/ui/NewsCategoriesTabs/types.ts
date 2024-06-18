import { type ReactElement } from 'react';

export type Data = { value: string; selected: number };

export type NewsCategoriesTabsProps<D extends Data> = {
  activeTab: string | null;
  data: D[];
  onTabChange: (value: string | null) => void;
  renderPanel: (props: { element: D }) => ReactElement;
};
