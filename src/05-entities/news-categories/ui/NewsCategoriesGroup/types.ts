export type Data = { uuid: string; name: string };

export type NewsCategoriesGroupProps<E extends Data> = {
  value: string[];
  data: E[];
  onChange: (value: string[]) => void;
};
