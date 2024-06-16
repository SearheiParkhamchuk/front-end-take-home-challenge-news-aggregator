import { type ApiResponse } from 'src/06-shared/lib/utils/errors/types/ApiResponse';

import { type NewsCategoriesServer } from '../@types';

export type GroupedNewsCategoriesServer = {
  type: string;
  grouped: NewsCategoriesServer[];
};

export type GroupedNewsCategories = GroupedNewsCategoriesServer;

export type GroupedNewsCategoriesResponse = ApiResponse<GroupedNewsCategoriesServer[]>;
