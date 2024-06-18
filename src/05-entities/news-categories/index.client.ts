import { useGetGrouped } from './api/grouped-news-categories/get-grouped.api-client';
import { useGetPersistedState } from './api/persisted-data/get-persisted-state.api-client';
import { useSetPersistedState } from './api/persisted-data/set-persisted-state.api-client';
import { useGetSelected } from './api/selected-news-categories/get-selected.api-client';
import { useSetSelected } from './api/selected-news-categories/set-selected.api-client';

const newsCategoriesClientApi = { useGetGrouped, useGetSelected, useSetSelected, useGetPersistedState, useSetPersistedState };

export { newsCategoriesClientApi };
