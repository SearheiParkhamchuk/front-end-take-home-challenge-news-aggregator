import { type ReactElement } from 'react';

export type Data = { type: string };

export type NewsCategoriesTabsProps<D extends Data> = {
  activeTab: string | null;
  data: D[];
  onTabChange: (value: string | null) => void;
  children: (props: { tabData: D }) => ReactElement;
};
