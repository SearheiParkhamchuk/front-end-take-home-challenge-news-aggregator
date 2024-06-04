import { GRID_VIEW } from 'src/06-shared/ui/GridViewButton/model';

import styles from './styles.module.scss';

export const classnamesView = {
  [GRID_VIEW.GRID]: { grid: styles['container-grid'] },
  [GRID_VIEW.LIST]: { grid: styles['container-list'] },
};
